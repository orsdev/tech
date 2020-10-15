import React, { useState } from 'react';
import { Anchor, Drawer, Button } from 'antd';

const { Link } = Anchor;

function Nav() {

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <nav className="nav" id="home">
        <a href="#home" className="logo">
          <i className="fa fa-bolt" aria-hidden="true"></i>
          <span>TECH</span>
        </a>
        <div className="desktop-nav">
          <Anchor affix={false} defaultSelectedKeys={['home']} targetOffset={64}>
            <Link href="#home" title="Home" />
            <Link href="#about" title="About" />
            <Link href="#features" title="Features" />
            <Link href="#hiw" title="How it works" />
            <Link href="#faq" title="FAQ" />
            <Link href="#pricing" title="Pricing" />
            <Link href="#contact" title="Contact" />
          </Anchor>
        </div>
        <div className="mobile-nav">
          <Button type="primary" onClick={showDrawer}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor affix={false} defaultSelectedKeys={['home']} targetOffset={64}>
              <Link href="#home" title="Home" />
              <Link href="#about" title="About" />
              <Link href="#features" title="Features" />
              <Link href="#hiw" title="How it works" />
              <Link href="#faq" title="FAQ" />
              <Link href="#pricing" title="Pricing" />
              <Link href="#contact" title="Contact" />
            </Anchor>
          </Drawer>
        </div>
      </nav>
    </>
  )
}

export default Nav;
