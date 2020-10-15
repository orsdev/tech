import React from 'react';
import { Menu } from 'antd';

function Nav() {
  return (
    <>
      <nav className="nav">
        <a href="#home" className="logo">
          <i className="fa fa-bolt" aria-hidden="true"></i>
          <span>TECH</span>
        </a>
        <Menu mode="horizontal" defaultSelectedKeys={['home']}>
          <Menu.Item key="home">Home</Menu.Item>
          <Menu.Item key="about">About</Menu.Item>
          <Menu.Item key="feature">Features</Menu.Item>
          <Menu.Item key="hiw">How it works</Menu.Item>
          <Menu.Item key="faq">FAQ</Menu.Item>
          <Menu.Item key="pricing">Pricing</Menu.Item>
          <Menu.Item key="contact">Contact</Menu.Item>
        </Menu>
      </nav>
    </>
  )
}

export default Nav;
