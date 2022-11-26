import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import Section from './section';
import Container from './container';
import Carousel from './carousel';
import { Row, Col } from './grid';
import { Theme } from './layout';

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_: unknown, children: React.ReactNode) => (
      <p>{children}</p>
    ),
    [BLOCKS.HEADING_3]: (_: unknown, children: React.ReactNode) => (
      <h3>{children}</h3>
    )
  }
};

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulNotParamountHome {
        aboutHeading
      }
      about: contentfulNotParamountHomeAboutContentRichTextNode {
        json
      }
    }
  `);

  const theme = useTheme<Theme>();

  return (
    <Section id="about" heading={data.contentfulNotParamountHome.aboutHeading}>
      <Container>
        <Row align="center">
          <Col lg={4}>
            <div
              css={css`
                margin-bottom: 2rem;
                & h3 {
                  font-size: ${theme.fontSizes['4xl']};
                }
              `}
            >
              {documentToReactComponents(data.about.json, options)}
            </div>
          </Col>
          <Col lg={7} lgOffset={1}>
            <Carousel />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default About;
