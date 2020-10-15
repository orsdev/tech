import React from 'react';
import { Layout } from 'antd';
import Nav from './components/nav';
import 'antd/dist/antd.css';
import './custom.css';
import Hero from './components/hero';

const { Header } = Layout;

const App = () => {

  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Hero />
    </>
  );
}

export default App;
