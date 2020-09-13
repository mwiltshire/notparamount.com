import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import Section from './section';
import Container from './container';
import Carousel from './carousel';
import { Row, Col } from './grid';
import CTALink from './cta-link';
import { Theme } from './layout';

const About = () => {
  const theme = useTheme<Theme>();

  return (
    <Section id="about" heading="About">
      <Container>
        <Row align="center">
          <Col lg={4}>
            <div
              css={css`
                margin-bottom: 2rem;
              `}
            >
              <h3
                css={css`
                  font-size: ${theme.fontSizes['4xl']};
                `}
              >
                Drum recording and audio production
              </h3>
              <p>
                Not Paramount is the result of needing two main roles from a
                modest space. The studio was designed to spec, with one half
                acoustically treated as a neutral position for mixing,
                mastering, podcast editing and more, and the other as an open
                space for recording live drum tracks.
              </p>
              <CTALink to="#services">Services</CTALink>
            </div>
          </Col>
          <Col lg={7} lgOffset={1}>
            <Carousel />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default About;
