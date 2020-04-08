import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';
import Container from './container';
import CTALink from './cta-link';
import { BP_MIN_MD, BP_MIN_XL } from '../breakpoints';
import { Theme } from './layout';

type TitleSectionProps = {
  textColor: string;
};

const TitleSection = styled.div<TitleSectionProps, Theme>`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 2rem 0;
  color: ${({ textColor }) => textColor};
  h1 {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
    line-height: 0.9;
    ${BP_MIN_XL} {
      font-size: ${({ theme }) => theme.fontSizes['6xl']};
    }
  }
`;

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      studioImage: file(relativePath: { eq: "studio.jpeg" }) {
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
          flex-direction: column;
          height: auto;
          margin-top: 3rem;
          ${BP_MIN_MD} {
            flex-direction: row;
          }
          ${BP_MIN_XL} {
            height: calc(100vh - 3rem - 15px);
          }
        `}
      >
        <TitleSection
          textColor={theme.colors.textLight}
          css={css`
            background: ${theme.colors.backgroundDark};
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
            <p>Recording and production service in Lewes, UK</p>
            <CTALink to="#contact">Get in touch</CTALink>
          </Container>
        </TitleSection>
        <div
          css={css`
            flex: 1;
            position: relative;
          `}
        >
          <Image
            fluid={data.studioImage.childImageSharp.fluid}
            draggable={false}
            style={{ height: '100%' }}
          />
          <div
            css={css`
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              background: rgba(25, 8, 0, 0.2);
            `}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
