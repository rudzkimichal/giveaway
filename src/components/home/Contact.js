
import React from 'react';
import Divider from '../Divider';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import instagram from '../../assets/Instagram.svg';
import facebook from '../../assets/Facebook.svg';

const Contact = () => {

  const sendMessage = async (url, data) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    return response.json();
  }

  return (
    <>
    <div id='contact'>
      <div className='contact-img-container'></div>
      <div className='contact-form-container'>
        <h2>Skontaktuj się z nami</h2>
        <Divider />
        <Formik
          initialValues={{name: '', email: '', message: ''}}
          validate = {values => {
            const errors = {};
            const fieldRequired = 'To pole jest wymagane';

            if(!values.name)
              errors.name = fieldRequired;
            else if (values.name.includes(' '))
              errors.name = 'Imię powinno być jednym wyrazem bez spacji';

            if(!values.email)
              errors.email = fieldRequired;
            else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
              errors.email = 'Nieprawidłowy adres';

            if(!values.message)
              errors.message = fieldRequired;
            else if(values.message.length < 120)
              errors.message = 'Wiadomość powinna zawierać co najmniej 120 znaków';

            return errors;
          }}
          onSubmit = {(values, {setSubmitting}) => {
            sendMessage(
              'https://fer-api.coderslab.pl/v1/portfolio/contact',
              {
                "name": values.name,
                "email": values.email,
                "message": values.message
              }
            );
            setSubmitting(false);
          }}
        >
          {({isSubmitting}) => (
          <Form className='form'>
            <section>
              <div>
                <label htmlFor='name'>Wpisz swoje imię</label>
                <Field type='text' name='name' className='input' placeholder='Krzysztof' />
                <ErrorMessage className='error-message' name='name' component='p' />
              </div>
              <div>
                <label htmlFor='email'>Wpisz swój email</label>
                <Field type='email' name='email' className='input' placeholder='abc@xyz.pl' />
                <ErrorMessage className='error-message' name='email' component='p' />
              </div>
            </section>
            <div>
              <label htmlFor='message'>Wpisz swoją wiadomość</label>
              <Field
                name='message'
                component='textarea'
                rows='5'
                className='input'
                placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.'
                />
              <ErrorMessage className='error-message' name='message' component='p' />
            </div>
            <button type='submit' disabled={isSubmitting}>Wyślij</button>
          </Form>
        )}
        </Formik>
      </div>
    </div>
    <div className='footer'>
      Copyright by Coders Lab
      <div>
        <img src={facebook} alt='Facebook' />
        <img src={instagram} alt='Instagram' />
      </div>
    </div>
    </>
  );
}

export default Contact;
