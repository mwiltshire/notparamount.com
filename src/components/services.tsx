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
    ),
    [BLOCKS.HEADING_3]: (_: unknown, children: React.ReactNode) => (
      <h3>{children}</h3>
    )
  }
};

const Services = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulNotParamountHome {
        servicesHeading
      }
      audioEditing: contentfulNotParamountHomeServicesAudioEditingRichTextNode {
        json
      }
      drumTracking: contentfulNotParamountHomeServicesDrumTrackingRichTextNode {
        json
      }
      mixingMastering: contentfulNotParamountHomeServicesMixingMasteringRichTextNode {
        json
      }
      production: contentfulNotParamountHomeServicesProductionRichTextNode {
        json
      }
    }
  `);

  const theme = useTheme<Theme>();

  return (
    <Section
      id="services"
      heading={data.contentfulNotParamountHome.servicesHeading}
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
              <Row>
                <Col sm={6}>
                  {documentToReactComponents(data.drumTracking.json, options)}
                </Col>
                <Col sm={6}>
                  {documentToReactComponents(data.production.json, options)}
                </Col>
                <Col sm={6}>
                  {documentToReactComponents(
                    data.mixingMastering.json,
                    options
                  )}
                </Col>
                <Col sm={6}>
                  {documentToReactComponents(data.audioEditing.json, options)}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </Section>
  );
};

export default Services;
