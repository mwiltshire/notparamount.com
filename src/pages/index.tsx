import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Home from '../components/home';
import Services from '../components/services';
import Gear from '../components/gear';
import About from '../components/about';

const IndexPage = () => (
  <Layout>
    <SEO />
    <Home />
    <Services />
    <Gear />
    <About />
  </Layout>
);

export default IndexPage;
