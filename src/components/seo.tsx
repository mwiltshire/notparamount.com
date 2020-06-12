import React, { FC } from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type Props = {
  title?: string;
  description?: string;
  keywords?: string[];
};

const SEO: FC<Props> = ({
  title: pageTitle,
  description: pageDescription,
  keywords
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            lang
          }
        }
      }
    `
  );

  const { lang, title, description } = site.siteMetadata;

  const meta = [
    {
      name: 'description',
      content: pageDescription || description
    },
    {
      property: 'og:title',
      content: pageTitle || title
    },
    {
      property: 'og:description',
      content: pageDescription || description
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      name: 'twitter:card',
      content: 'summary'
    },
    {
      name: 'twitter:title',
      content: pageTitle || title
    },
    {
      name: 'twitter:description',
      content: pageDescription || description
    }
  ];

  if (keywords) {
    meta.push({
      name: 'keywords',
      content: keywords.join()
    });
  }

  return (
    <Helmet htmlAttributes={{ lang }} title={pageTitle || title} meta={meta} />
  );
};

export default SEO;
