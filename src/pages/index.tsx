import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Home from '../components/home';
import Services from '../components/services';

const IndexPage = () => (
  <Layout>
    <SEO />
    <Home />
    <Services />
  </Layout>
);

export default IndexPage;
