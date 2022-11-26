import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Section from './section';
import Container from './container';
import ContactForm from './contact-form';
import Toast from './toast';

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      contact: contentfulNotParamountHome {
        contactHeading
      }
    }
  `);

  const [status, setSubmissionStatus] = useState<'success' | 'error' | null>(
    null
  );

  return (
    <Section
      id="contact"
      heading={data.contact.contactHeading}
      background="gray200"
    >
      <Container constrain>
        <ContactForm
          onSuccess={() => setSubmissionStatus('success')}
          onError={() => setSubmissionStatus('error')}
        />
      </Container>
      <Toast
        show={!!status}
        status={status}
        handleClose={() => setSubmissionStatus(null)}
        message={
          status === 'success'
            ? '🙌 Got it! I’ll get back to you soon!'
            : '😱 Gasp! Something went wrong. Please try again later!'
        }
      />
    </Section>
  );
};

export default Contact;
