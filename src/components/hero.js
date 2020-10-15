import React from 'react';
import { Carousel, Space, Button } from 'antd';

function Hero() {
  return (
    <section className="hero" id="hero">
      <Carousel dotPosition="bottom" autoplay>
        <div className="hero-item hero-item-one">
          <h2>Web and mobile payment built for developers</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis distinctio quam illo omnis, expedita labore molestiae, tempore reprehenderit consequatur culpa inventore in itaque tempora nesciunt eveniet veniam voluptate? Ipsam adipisci doloribus laborum recusandae impedit similique? Alias vitae facere dolore quidem.</p>
          <Space>
            <Button type="primary" size="large"> Learn More </Button>
            <Button type="ghost" size="large">
              <i className="fa fa-desktop" aria-hidden="true"></i>
              Watch a Demo
              </Button>
          </Space>
        </div>
        <div className="hero-item hero-item-two">
          <h2>Payment made easy</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi aperiam natus, consectetur magnam officiis atque voluptate, laudantium architecto impedit dignissimos eaque deserunt. Tempore, totam eum accusantium, perferendis ex quia quidem deleniti eligendi atque saepe dolor.
          </p>
        </div>
      </Carousel>
    </section>
  )
}

export default Hero
