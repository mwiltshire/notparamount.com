import React, { FC } from 'react';
import { css } from '@emotion/core';
import { Form, Formik } from 'formik';
import { object, string, bool } from 'yup';
import Input from './input';
import Checkbox from './checkbox';
import SubmitButton from './submit-button';

type ContactFormProps = {
  onSuccess: () => void;
  onError: () => void;
};

const initialValues = {
  name: '',
  email: '',
  message: '',
  gdpr: false
};

const schema = object().shape({
  name: string().required('Required field!'),
  email: string()
    .email('Invalid email address!')
    .required('Required field!'),
  message: string().required('Required field!'),
  gdpr: bool().oneOf([true], 'Required field!')
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
          <div
            css={css`
              margin-bottom: 2rem;
            `}
          >
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
            <Checkbox
              name="gdpr"
              label="I agree to having my email stored for the purpose of responding to my request"
            />
          </div>
          <SubmitButton isSubmitting={props.isSubmitting}>Send</SubmitButton>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
