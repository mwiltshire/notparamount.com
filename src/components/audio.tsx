import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import Container from './container';
import { Row, Col } from './grid';
import Section from './section';
import { Theme } from './layout';

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_: unknown, children: React.ReactNode) => (
      <p>{children}</p>
    )
  }
};

const Services = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulNotParamountHome {
        audioHeading
      }
      audio: contentfulNotParamountHomeAudioContentRichTextNode {
        json
      }
    }
  `);

  const theme = useTheme<Theme>();

  return (
    <Section
      id={data.contentfulNotParamountHome.audioHeading.toLowerCase()}
      heading={data.contentfulNotParamountHome.audioHeading}
      background="richBlack"
    >
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
              {documentToReactComponents(data.audio.json, options)}
              <iframe
                title="Audio example playlist"
                src="https://open.spotify.com/embed/playlist/3ctuKfFMyOuAO8x86HJKiz?utm_source=generator&theme=0"
                width="100%"
                height="380"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </div>
    </Section>
  );
};

export default Services;
