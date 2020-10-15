import React from 'react';
import { Layout } from 'antd';
import Nav from './components/nav';
import 'antd/dist/antd.css';
import './custom.css';
import Hero from './components/hero';
import About from './components/about';
import Features from './components/features';
import Hiw from './components/hiw';
import Faq from './components/faq';
import Pricing from './components/pricing';
import Contact from './components/contact';

const { Header } = Layout;

const App = () => {

  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Hero />
      <About />
      <Features />
      <Hiw />
      <Faq />
      <Pricing />
      <Contact />
    </>
  );
}

export default App;
