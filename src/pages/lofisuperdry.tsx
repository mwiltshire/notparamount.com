import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Container from '../components/container';
import { BP_MIN_LG } from '../breakpoints';
import { theme } from '../components/layout';
import { ExternalLink } from '../components/link';

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
  const data = useStaticQuery(graphql`
    query {
      drumPackImage: file(relativePath: { eq: "drum-pack-lofisuperdry.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 720, maxHeight: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout menuBackground="#ffe9c9">
      <SEO
        title="Lo-Fi & Superdry Drums - A drum sample pack"
        description="Collection of over 240
            loops, samples and one-shots. All royalty free! Buy now for £30."
        keywords={[
          'lofi',
          'tape drums',
          'sample pack',
          'loops',
          'stems',
          'drums',
          'drum kit',
          'one shots'
        ]}
      />
      <section
        css={css`
          background: #ffe9c9;
          padding: 5rem 0;
          margin: 0 -5px;
          ${BP_MIN_LG} {
            margin: 0 -15px;
          }
        `}
      >
        <Container constrain>
          <h1
            css={css`
              text-align: center;
              font-size: ${theme.fontSizes['2xl']};
              color: #514835;
              text-shadow: 5px 5px 0 #d5d2c0;
              padding: 4rem 0 1rem 0;
              ${BP_MIN_LG} {
                font-size: ${theme.fontSizes['4xl']};
              }
            `}
          >
            Lo-Fi & Super Dry Drums
          </h1>
          <Image
            fluid={data.drumPackImage.childImageSharp.fluid}
            draggable={false}
            style={{
              borderRadius: '1rem',
              boxShadow: '0px 1px 12px 9px rgba(165, 130, 130, 0.1)'
            }}
          />
        </Container>
      </section>
      <section
        css={css`
          margin-top: 12vmin;
          padding: 2rem 0;
        `}
      >
        <Container constrain>
          <h2>About the pack</h2>
          <p>
            Lo-Fi & Super Dry is an incredibly versatile set of close and punchy
            drum sounds that lift any production or provide a powerful starting
            point for writing and programming in any style. The raw multi-tracks
            are also provided to ensure these beats can be mixed seamlessly into
            your next production.
          </p>
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
          <h2>How to purchase</h2>
          <p>
            The sample pack is available now for just <strong>£25</strong>! Head
            over to{' '}
            <ExternalLink to="https://www.albertsfavourites.com/sample-library#!/Lo-Fi-&-Super-Dry/p/266963436/category=0">
              Albert&apos;s Favourites
            </ExternalLink>{' '}
            grab it.
          </p>
        </Container>
      </section>
    </Layout>
  );
};

export default LofiSuperdry;
