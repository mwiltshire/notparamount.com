import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { Global, css } from '@emotion/core';
import SEO from '../components/seo';
import Container from '../components/container';
import Logo from '../components/logo';
import { GatsbyLink } from '../components/link';
import { BP_MIN_MD, BP_MIN_LG, BP_MIN_XL } from '../breakpoints';
import { globalStyles } from '../global-styles';
import { theme } from '../components/layout';

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
      lupinImage: file(relativePath: { eq: "lupin.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <>
      <Global styles={globalStyles} />
      <SEO />
      <header
        css={css`
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          height: 3rem;
          background: ${theme.colors.white};
          z-index: 1;
        `}
      >
        <nav
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 0 15px;
            height: 100%;
            & > svg {
              z-index: 2;
            }
          `}
        >
          <GatsbyLink to="/" aria-label="go to home page">
            <Logo stroke={theme.colors.black} fill={theme.colors.black} />
          </GatsbyLink>
        </nav>
      </header>
      <main
        css={css`
          margin: 3rem 5px 5px 5px;
          display: flex;
          flex-direction: column;
          ${BP_MIN_MD} {
            margin: 3rem 15px 0 15px;
            padding-bottom: 15px;
          }
          ${BP_MIN_LG} {
            height: calc(100vh - 3rem);
            flex-direction: row;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            flex: 1;
            align-items: center;
            padding: 3rem 0;
          `}
        >
          <Container constrain>
            <h1
              css={css`
                font-size: ${theme.fontSizes['5xl']};
                ${BP_MIN_XL} {
                  font-size: ${theme.fontSizes['6xl']};
                }
              `}
            >
              404
            </h1>
            <p>Nope. This is definitely not what you were looking for.</p>
            <p>
              Here&rsquo;s the deal. You can hang around here with
              Not&nbsp;Paramount&rsquo;s resident kitty, Lupin, for a while, or
              you can head back to the{' '}
              <GatsbyLink to="/" decoration={theme.colors.turqoise}>
                home page
              </GatsbyLink>
              .
            </p>
            <p>I think he might be fine here by himself anyway.</p>
          </Container>
        </div>
        <div
          css={css`
            flex: 1;
            ${BP_MIN_LG} {
              flex-direction: row;
            }
          `}
        >
          <Image
            fluid={data.lupinImage.childImageSharp.fluid}
            draggable={false}
            style={{ height: '100%', borderRadius: '1rem' }}
          />
        </div>
      </main>
    </>
  );
};

export default NotFoundPage;
