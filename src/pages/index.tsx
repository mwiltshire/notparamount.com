import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Home from '../components/home';
import Services from '../components/services';
import Gear from '../components/gear';

const IndexPage = () => (
  <Layout>
    <SEO />
    <Home />
    <Services />
    <Gear />
  </Layout>
);

export default IndexPage;
