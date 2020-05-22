
import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import firebase from '../db/auth';
import Divider from './Divider';

const Login = () => {

  const history = useHistory();
  
  const sendCredentials = (email, password) => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => firebase.auth().signInWithEmailAndPassword(email, password))
    .catch(error => console.log(error));

    history.push('/');
  }

  return (
    <div className='login-container'>
      <div className='login-content'>
        <h2>Zaloguj się</h2>
        <Divider />
        <Formik
          initialValues={{email: '', password: ''}}
          validate = {values => {
            const errors = {};
            const fieldRequired = 'To pole jest wymagane';

            if(!values.email)
              errors.email = fieldRequired;
            else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
              errors.email = 'Podany email jest nieprawidłowy!';

            if(!values.password)
              errors.password = fieldRequired;
            else if(values.password.length < 6)
              errors.password = 'Podane hasło jest za krótkie!';

            return errors;
          }}
          onSubmit = {(values,{setSubmitting}) => {
            sendCredentials(values.email, values.password);
            setSubmitting(false);
          }
        }
        >
          {({isSubmitting}) => (
            <Form className='form'>
              <section className='input-field'>
                <label htmlFor='email'>Email</label>
                <Field type='email' name='email' className='input' />
                <ErrorMessage className='error-message' name='email' component='p' />

                <label htmlFor='password'>Hasło</label>
                <Field type='password' name='password' className='input' />
                <ErrorMessage className='error-message' name='password' component='p' />
              </section>
              <div className='buttons'>
                <Link className='btn' to='/rejestracja'>Załóż konto</Link>
                <button className='btn' type='submit' disabled={isSubmitting}>Zaloguj się</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
