import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import Section from './section';
import Container from './container';
import Carousel from './carousel';
import { Row, Col } from './grid';
import { ExternalLink } from './link';
import { Theme } from './layout';

const About = () => {
  const theme = useTheme<Theme>();

  return (
    <Section id="about" heading="About">
      <Container>
        <Row align="center">
          <Col lg={4}>
            <h3
              css={css`
                font-size: ${theme.fontSizes['4xl']};
              `}
            >
              I&rsquo;m Chris, owner of Not&nbsp;Paramount
            </h3>
            <p>
              With over 10 years experience working professionally, I’ve
              recorded in some of the top UK studios, including Abbey Road, RAK
              and The Pool. I’ve also toured globally as band member in{' '}
              <ExternalLink
                to="http://www.mamasgun.co.uk"
                decoration={theme.colors.turqoise}
              >
                Mamas&nbsp;Gun
              </ExternalLink>{' '}
              as well as with artists including{' '}
              <ExternalLink
                to="http://www.lonemusic.co.uk/"
                decoration={theme.colors.turqoise}
              >
                Lone
              </ExternalLink>{' '}
              (R&S),{' '}
              <ExternalLink
                to="https://www.lucyrosemusic.com/"
                decoration={theme.colors.turqoise}
              >
                Lucy&nbsp;Rose
              </ExternalLink>{' '}
              (Communion) and{' '}
              <ExternalLink
                to="http://niluferyanya.com/"
                decoration={theme.colors.turqoise}
              >
                Nilüfer&nbsp;Yanya
              </ExternalLink>{' '}
              (ATO).
            </p>
          </Col>
          <Col lg={7} lgOffset={1}>
            {/* <Image
              fluid={data.chrisImage.childImageSharp.fluid}
              draggable={false}
              style={{
                margin: '0 1rem 1rem 0',
                boxShadow: `1rem 1rem ${theme.colors.turqoise}`
              }}
            /> */}
            <Carousel />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default About;
