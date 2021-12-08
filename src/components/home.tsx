import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';
import Container from './container';
import CTALink from './cta-link';
import { BP_MIN_LG, BP_MIN_XL } from '../breakpoints';
import { Theme } from './layout';

type TitleSectionProps = {
  textColor: string;
};

const TitleSection = styled.div<TitleSectionProps, Theme>`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 3rem 0;
  color: ${({ textColor }) => textColor};
  h1 {
    font-size: ${({ theme }) => theme.fontSizes['5xl']};
    line-height: 0.9;
    ${BP_MIN_XL} {
      font-size: ${({ theme }) => theme.fontSizes['6xl']};
    }
  }
`;

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      studioImage: file(relativePath: { eq: "studio-home-2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const theme = useTheme<Theme>();

  return (
    <section>
      <div
        css={css`
          display: flex;
          flex-direction: column-reverse;
          height: calc(100vh - 3rem - 5px);
          margin-top: 3rem;
          overflow: hidden;
          border-radius: 1rem;
          ${BP_MIN_LG} {
            flex-direction: row;
          }
          ${BP_MIN_XL} {
            height: calc(100vh - 3rem - 15px);
          }
        `}
      >
        <TitleSection
          textColor={theme.colors.white}
          css={css`
            background: ${theme.colors.richBlack};
            & > div {
              flex: 1;
            }
          `}
        >
          <Container>
            <h1>
              Not
              <br />
              Paramount
            </h1>
            <p>Modest little recording gaff in Lewes, UK. <br />Predominantly drum recording by Chris Boot.</p>
            <CTALink to="#contact">Get in touch</CTALink>
          </Container>
        </TitleSection>
        <div
          css={css`
            flex: 1;
          `}
        >
          <Image
            fluid={data.studioImage.childImageSharp.fluid}
            draggable={false}
            style={{ height: '100%' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
