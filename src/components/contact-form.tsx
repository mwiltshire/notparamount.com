import React, { FC } from 'react';
import { css } from '@emotion/core';
import { Form, Formik, Field } from 'formik';
import { object, string, bool } from 'yup';
import qs from 'qs';
import Input from './input';
import Checkbox from './checkbox';
import SubmitButton from './submit-button';

type ContactFormProps = {
  onSuccess: () => void;
  onError: () => void;
};

const initialValues = {
  'bot-field': '',
  'form-name': 'contact',
  name: '',
  email: '',
  message: '',
  gdpr: false,
  subject: ''
};

const schema = object().shape({
  name: string().required('Required field!'),
  email: string()
    .email('Invalid email address!')
    .required('Required field!'),
  message: string().required('Required field!'),
  gdpr: bool().oneOf([true], 'Required field!')
});

const ContactForm: FC<ContactFormProps> = ({ onSuccess, onError }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (data, actions) => {
        try {
          const response = await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: qs.stringify({
              ...data,
              subject: `Not Paramount website form: ${data.name}`
            })
          });
          if (!response.ok) {
            throw new Error();
          }
          onSuccess();
          actions.resetForm();
        } catch (e) {
          onError();
        } finally {
          actions.setSubmitting(false);
        }
      }}
      validationSchema={schema}
    >
      {props => (
        <Form
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          autoComplete="off"
        >
          <div
            css={css`
              margin-bottom: 2rem;
            `}
          >
            <Field type="hidden" name="form-name" />
            <Field type="hidden" name="bot-field" />
            <Field
              type="hidden"
              name="subject"
              value="Not Paramount website form"
            />
            <Input name="name" label="Name" placeholder="Jane Smith" />
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
