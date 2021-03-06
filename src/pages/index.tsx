import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Home from '../components/home';
import Services from '../components/services';
import Gear from '../components/gear';
import About from '../components/about';
import Contact from '../components/contact';

const IndexPage = () => (
  <Layout>
    <SEO />
    <Home />
    <About />
    <Gear />
    <Services />
    <Contact />
  </Layout>
);

export default IndexPage;
