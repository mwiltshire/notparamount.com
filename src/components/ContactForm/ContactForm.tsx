import { Form, Formik, Field } from 'formik';
import { object, string, bool } from 'yup';
import toast from 'react-hot-toast';
import { Button } from '../Button/Button';
import { Checkbox } from '../Checkbox/Checkbox';
import { Input } from '../Input/Input';
import { Stack } from '../Stack/Stack';
import { Textarea } from '../Textarea/Textarea';

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
  email: string().email('Invalid email address!').required('Required field!'),
  message: string().required('Required field!'),
  gdpr: bool().oneOf([true], 'Required field!')
});

async function submitForm(data: typeof initialValues) {
  return Promise.reject();
  // const response = await fetch('/', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //   body: new URLSearchParams({
  //     ...data,
  //     gdpr: data.gdpr.toString(),
  //     subject: `Not Paramount website form: ${data.name}`
  //   }).toString()
  // });

  // if (!response.ok) {
  //   throw new Error();
  // }
}

export function ContactForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={async (data, actions) => {
        try {
          await submitForm(data);
          toast.success('Got it! I’ll get back to you soon!');
          actions.resetForm();
        } catch (e) {
          toast.error("Oh no! That didn't work, try again!");
        } finally {
          actions.setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          autoComplete="off"
        >
          <Stack gap={4}>
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
            <Stack gap="3rem">
              <Textarea
                name="message"
                label="Message"
                placeholder="I'd love some help putting together a couple drum tracks! 🥁"
              />
              <Checkbox
                name="gdpr"
                label="I agree to having my email stored for the purpose of responding to my request"
              />
              <Button type="submit" loading={isSubmitting}>
                Send
              </Button>
            </Stack>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}
