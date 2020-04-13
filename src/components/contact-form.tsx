import React, { FC } from 'react';
import { Form, Formik } from 'formik';
import { object, string } from 'yup';
import Input from './input';
import SubmitButton from './submit-button';

type ContactFormProps = {
  onSuccess: () => void;
  onError: () => void;
};

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

const mockSendData = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (Math.round(Math.random())) {
        res();
      } else {
        rej();
      }
    }, 2000);
  });
};

const ContactForm: FC<ContactFormProps> = ({ onSuccess, onError }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (_, actions) => {
        try {
          await mockSendData();
          onSuccess();
          actions.resetForm();
          actions.setFieldValue('message', '');
        } catch (e) {
          onError();
        } finally {
          actions.setSubmitting(false);
        }
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
