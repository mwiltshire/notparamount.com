import React from 'react';
import { Form, Formik } from 'formik';
import { object, string } from 'yup';
import Input from './input';
import SubmitButton from './submit-button';

const initialValues = {
  name: '',
  email: '',
  message: ''
};

const schema = object().shape({
  name: string().required('Required field!'),
  email: string()
    .email('Invalid email address!')
    .required('Required field!'),
  message: string().required('Required field!')
});

const ContactForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => {
        setTimeout(() => {
          console.log('Submitted!');
        }, 2000);
      }}
      validationSchema={schema}
    >
      {props => (
        <Form autoComplete="off">
          <Input name="name" label="Your Name" placeholder="Jane Smith" />
          <Input
            name="email"
            label="Email"
            placeholder="jane.smith@example.com"
          />
          <Input
            textarea
            name="message"
            label="Message"
            placeholder="I'd love some help putting together a couple drum tracks! 🥁"
          />
          <SubmitButton isSubmitting={props.isSubmitting}>Send</SubmitButton>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
