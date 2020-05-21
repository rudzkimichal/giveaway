

import React from 'react';
import {Link} from 'react-router-dom';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import Divider from './Divider';

const Login = () => {

  const createAccount = () => {
    console.log('Submit');
  }

  return (
    <div className='register-container'>
      <div className='register-content'>
        <h2>Załóż konto</h2>
        <Divider />
        <Formik
          initialValues={{email: '', password: '', repeatPassword: ''}}
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

            if(!values.repeatPassword)
              errors.repeatPassword = fieldRequired;
            else if(values.repeatPassword.length < 6)
              errors.repeatPassword = 'Podane hasło jest za krótkie!';
            else if(values.repeatPassword !== values.password)
              errors.repeatPassword = 'Powtórzone hasło musi być identyczne';

            return errors;
          }}
          onSubmit = {(_,{setSubmitting}) => {
            createAccount();
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

                <label htmlFor='repeatPassword'>Powtórz Hasło</label>
                <Field type='password' name='repeatPassword' className='input' />
                <ErrorMessage className='error-message' name='repeatPassword' component='p' />
              </section>
              <div className='buttons'>
                <button className='btn' type='submit' disabled={isSubmitting}>Załóż konto</button>
                <Link className='btn' to='/logowanie' >Zaloguj się</Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
