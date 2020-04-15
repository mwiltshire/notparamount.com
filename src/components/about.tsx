import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import Section from './section';
import Container from './container';
import { Row, Col } from './grid';
import Link from './link';
import { Theme } from './layout';

const About = () => {
  const theme = useTheme<Theme>();
  const data = useStaticQuery(graphql`
    query {
      chrisImage: file(relativePath: { eq: "chris.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Section id="about" heading="About">
      <Container>
        <Row>
          <Col lg={4} lgOffset={1}>
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
              <Link
                to="http://www.mamasgun.co.uk"
                decoration={theme.colors.turqoise}
              >
                Mamas&nbsp;Gun
              </Link>{' '}
              as well as with artists including{' '}
              <Link
                to="http://www.lonemusic.co.uk/"
                decoration={theme.colors.turqoise}
              >
                Lone
              </Link>{' '}
              (R&S),{' '}
              <Link
                to="https://www.lucyrosemusic.com/"
                decoration={theme.colors.turqoise}
              >
                Lucy&nbsp;Rose
              </Link>{' '}
              (Communion) and{' '}
              <Link
                to="http://niluferyanya.com/"
                decoration={theme.colors.turqoise}
              >
                Nilüfer&nbsp;Yanya
              </Link>{' '}
              (ATO).
            </p>
          </Col>
          <Col lg={5} lgOffset={1}>
            <Image
              fluid={data.chrisImage.childImageSharp.fluid}
              draggable={false}
              style={{
                margin: '0 1rem 1rem 0',
                boxShadow: `1rem 1rem ${theme.colors.turqoise}`
              }}
            />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default About;
