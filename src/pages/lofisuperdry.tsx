import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Container from '../components/container';
import { useScroll } from '../hooks';
import { BP_MIN_LG } from '../breakpoints';
import { theme } from '../components/layout';
import PaypalBuyButton from '../components/paypal-buy-button';

const highlights = [
  '242 files total',
  '50 drum samples',
  '144 clean drum loops',
  '24Bit 48kHz',
  'BPM: 75 - 120',
  '24 tape drum loops',
  '24 lo-fi drum loops',
  'All loops tempo labelled',
  '100% royalty free'
];

const LofiSuperdry = () => {
  const scrollTo = useScroll({ offset: -48 });
  const data = useStaticQuery(graphql`
    query {
      drumPackImage: file(relativePath: { eq: "drum-pack.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO />
      <section
        css={css`
          background: #f0f0f0;
          margin: 0 -5px;
          ${BP_MIN_LG} {
            margin: 0 -15px;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            margin: 0 5px;
            padding-top: 3rem;
            ${BP_MIN_LG} {
              flex-direction: row;
              margin: 0 15px;
            }
          `}
        >
          <div
            css={css`
              display: flex;
              align-items: center;
              flex: 1;
            `}
          >
            <Container>
              <div
                css={css`
                  display: flex;
                  flex-direction: column;
                  align-items: flex-end;
                  padding: 1rem 0;
                `}
              >
                <div
                  css={css`
                    align-self: flex-start;
                    display: flex;
                    flex-direction: column;
                    ${BP_MIN_LG} {
                      align-self: center;
                    }
                  `}
                >
                  <h1
                    css={css`
                      font-size: ${theme.fontSizes['6xl']};
                      text-align: left;
                      color: #96a795;
                      text-shadow: 5px 5px 0 #5e5e5e;
                      padding: 2rem 0;
                      ${BP_MIN_LG} {
                        text-align: right;
                        font-size: ${theme.fontSizes['7xl']};
                      }
                    `}
                  >
                    Lo-Fi &<br />
                    Superdry
                    <br />
                    Drums
                  </h1>
                  <button
                    onClick={() => scrollTo('#purchase')}
                    css={css`
                      cursor: pointer;
                      background: none;
                      border: 2px solid #96a795;
                      padding: 1rem;
                      outline: none;
                      align-self: flex-start;
                      color: #5e5e5e;
                      font-weight: 700;
                      box-shadow: none;
                      transition: box-shadow 250ms ease;
                      text-transform: uppercase;
                      &:hover {
                        box-shadow: 5px 5px 0 #5e5e5e;
                      }
                      ${BP_MIN_LG} {
                        align-self: flex-end;
                      }
                    `}
                  >
                    Buy now for £30
                  </button>
                </div>
              </div>
            </Container>
          </div>
          <div
            css={css`
              flex: 1;
            `}
          >
            <div
              css={css`
                position: relative;
                height: 80vmin;
                transform: translateY(2rem);
              `}
            >
              <Image
                fluid={data.drumPackImage.childImageSharp.fluid}
                draggable={false}
                style={{ height: '100%', borderRadius: '1rem' }}
              />
              <svg
                css={css`
                  position: absolute;
                  bottom: -2px;
                  right: 1rem;
                  width: 5rem;
                  & path {
                    fill: #fff;
                  }
                `}
                viewBox="0 0 70 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.3333 18.7391L1 35H69L53.8889 7.65217L46.3333 13.5652L36.8889 1L18.6296 26.1304L12.3333 18.7391Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section
        css={css`
          margin-top: 12vmin;
          padding: 2rem 0;
        `}
      >
        <Container constrain>
          <h2>About the pack</h2>
          <ul
            css={css`
              display: flex;
              justify-content: flex-start;
              flex-wrap: wrap;
              margin: 0;
            `}
          >
            {highlights.map(highlight => (
              <li
                key={highlight}
                css={css`
                  display: inline-block;
                  margin: 1rem 1rem 1rem 0;
                  background: #f0f0f0;
                  padding: 1rem;
                  border-radius: 1rem;
                  list-style: none;
                  font-size: 0.8rem;
                `}
              >
                {highlight}
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section
        css={css`
          padding: 2rem 0;
        `}
      >
        <Container constrain>
          <h2>Listen</h2>
          <iframe
            title="Excerpt 75"
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/837012409&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
          <iframe
            title="Excerpt 90"
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/837012400&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
          <iframe
            title="Excerpt 120"
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/837012424&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </Container>
      </section>
      <section
        id="purchase"
        css={css`
          padding: 4rem 0;
          background: ${theme.colors.gray200};
          border-radius: 1rem;
        `}
      >
        <Container constrain>
          <h2>Purchase</h2>
          <p>
            For just <strong>£30</strong>, you get a collection of over 240
            loops, samples and one-shots. All royalty free!
          </p>
          <p>
            You’ll receive a download link for the sample pack via email usually
            within 48 hours of payment confirmation. Please note that the email
            address associated with your PayPal account will be used.
          </p>
          <PaypalBuyButton />
        </Container>
      </section>
    </Layout>
  );
};

export default LofiSuperdry;
