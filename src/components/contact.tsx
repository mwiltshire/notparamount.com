import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import Section from './section';
import Container from './container';
import ContactForm from './contact-form';
import { Theme } from './layout';

const Contact = () => {
  const theme = useTheme<Theme>();
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
        <ContactForm />
      </Container>
    </Section>
  );
};

export default Contact;
