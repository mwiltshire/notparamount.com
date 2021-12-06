import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import Container from './container';
import { Row, Col } from './grid';
import Section from './section';
import { Theme } from './layout';

const Services = () => {
  const theme = useTheme<Theme>();
  return (
    <Section id="audio" heading="Audio">
      <div
        css={css`
          & h3 {
            font-size: ${theme.fontSizes['2xl']};
          }
          p {
            padding-bottom: 3vmin;
          }
        `}
      >
        <Container>
          <Row>
            <Col lg={8} lgOffset={2}>
            <iframe src="https://open.spotify.com/embed/playlist/3ctuKfFMyOuAO8x86HJKiz?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
              </Col>
            
          </Row>
        </Container>
      </div>
    </Section>
  );
};

export default Services;
