import React, { useState } from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import Section from './section';
import Container from './container';
import ContactForm from './contact-form';
import Toast from './toast';
import { Theme } from './layout';

const Contact = () => {
  const theme = useTheme<Theme>();
  const [status, setSubmissionStatus] = useState<'success' | 'error' | null>(
    null
  );

  return (
    <Section id="contact" heading="Contact" background="backgroundGray">
      <Container constrain>
        <h3
          css={css`
            font-size: ${theme.fontSizes['4xl']};
          `}
        >
          Let’s work together
        </h3>
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
