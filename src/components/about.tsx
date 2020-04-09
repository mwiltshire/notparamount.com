import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import Section from './section';
import Container from './container';
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
      <Container constrain>
        <h3
          css={css`
            font-size: ${theme.fontSizes['4xl']};
          `}
        >
          Hey, I&rsquo;m Chris, owner of Not&nbsp;Paramount
        </h3>
        <div
          css={css`
            margin-bottom: 4rem;
          `}
        >
          <Image
            fluid={data.chrisImage.childImageSharp.fluid}
            draggable={false}
            style={{
              margin: '0 1rem 1rem 0',
              boxShadow: '1rem 1rem #cbf3f2'
            }}
          />
        </div>
        <p>
          With over 10 years experience working professionally, I’ve recorded in
          some of the top UK studios, including Abbey Road, RAK and The Pool.
          I’ve also toured globally as band member in <a>Mamas&nbsp;Gun</a> as
          well as with artists including <a>Lone</a> (R&S),{' '}
          <a>Lucy&nbsp;Rose</a> (Communion) and <a>Nilüfer&nbsp;Yanya</a> (ATO).
        </p>
      </Container>
    </Section>
  );
};

export default About;
