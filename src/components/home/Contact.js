
import React from 'react';
import Divider from './Divider';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import instagram from '../../assets/Instagram.svg';
import facebook from '../../assets/Facebook.svg';

const Contact = () => {
  return (
    <>
    <div id='contact'>
      <div className='contact-img-container'></div>
      <div className='contact-form-container'>
        <h2>Skontaktuj się z nami</h2>
        <Divider />
        <Formik>
          <Form className='form'>
            <section>
              <div>
                <label htmlFor='name'>Wpisz swoje imię</label>
                <Field type='text' name='name' className='input' placeholder='Krzysztof' />
                <ErrorMessage name='name' component='p' />
              </div>
              <div>
                <label htmlFor='email'>Wpisz swój email</label>
                <Field type='email' name='email' className='input' placeholder='abc@xyz.pl' />
                <ErrorMessage name='email' component='p' />
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
              <ErrorMessage name='message' component='p' />
            </div>
            <button type='submit'>Wyślij</button>
          </Form>
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
