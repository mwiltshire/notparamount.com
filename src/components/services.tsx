import React from 'react';
import { css } from '@emotion/core';
import Container from './container';
import { Row, Col } from './grid';
import SectionHeader from './section-header';
import CTALink from './cta-link';

const Services = () => {
  return (
    <section
      id="services"
      css={css`
        position: relative;
      `}
    >
      <Container>
        <SectionHeader>Services</SectionHeader>
      </Container>
      <Container>
        <Row>
          <Col lg={4}>
            <div
              css={css`
                margin-bottom: 2rem;
              `}
            >
              <h3
                css={css`
                  font-size: 2rem;
                `}
              >
                Professional drum recording and audio production
              </h3>
              <p>
                I work from my own professionally designed studio whereby I can
                provide live drum recordings as well as a variety of production
                services including mixing, mastering, podcast editing and more.
              </p>
              <CTALink to="#contact">Let&apos;s talk</CTALink>
            </div>
          </Col>
          <Col lg={7} lgOffset={1}>
            <Row>
              <Col sm={6}>
                <h3>Drum tracking</h3>
                <p>
                  Delivering drum stems at your preferred sample rate/bit depth.
                  I can use any combination of drums and microphones provided to
                  get the right sound for your music at a competitive
                  price-point.
                </p>
              </Col>
              <Col sm={6}>
                <h3>Production</h3>
                <p>
                  Utilising years of production experience and the various gear
                  at NP Studio I can help you craft a product; whether it’s a
                  single, EP or full length album, we can discuss options.
                </p>
              </Col>
              <Col sm={6}>
                <h3>Mixing/mastering</h3>
                <p>
                  Mixing services can either song by song basis, an EP or a full
                  length album. Mastering services are available too, to get the
                  tracks ready for release. Sending references is always
                  helpful.
                </p>
              </Col>
              <Col sm={6}>
                <h3>Podcast editing</h3>
                <p>
                  Whether it’s just working through existing audio to get rid of
                  unwanted noise or starting from scratch to record and arrange
                  an entire podcast there is a fully sound proofed room here and
                  some detailed microphones to choose from.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
