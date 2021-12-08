import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Home from '../components/home';
import Services from '../components/services';
import Audio from '../components/audio';
import Gear from '../components/gear';
import About from '../components/about';
import Contact from '../components/contact';

const IndexPage = () => (
  <Layout>
    <SEO />
    <Home />
    <Services />
    <Audio />
    <About />
    <Gear />
    <Contact />
  </Layout>
);

export default IndexPage;
