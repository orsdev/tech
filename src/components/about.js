import React from "react";
import { Row, Col, Card } from "antd";

function About() {
  return (
    <section className="about" id="about">
      <header className="about-header text-center">
        <h2 className="sub-header no-gutter">About Us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <hr className="border-bottom" />
      </header>
      <div className="about-body text-center">
        <Row justify="center">
          <Col xs={20} sm={18} md={20} lg={19} xl={18}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Magni, iure ex tempore illo atque sint sunt? Dolorum,
            consectetur neque. Vel dolorem, id maxime culpa necessitatibus
            enim nisi ipsa placeat eveniet autem, excepturi et alias quae!
            Autem facere incidunt eligendi corrupti.
               </Col>
        </Row>
        <div className="about-body-cards">
          <Row gutter={10} justify="center">
            <Col md={8} lg={7} xl={7}>
              <i class="fa fa-pie-chart" aria-hidden="true"></i>
              <Card title="High Performance" bordered={false}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur magnam eius praesentium numquam reprehenderit quam quis error veniam, ducimus amet.
              </Card>
            </Col>
            <Col md={8} lg={7} xl={7}>
              <i class="fa fa-desktop" aria-hidden="true"></i>
              <Card title="Flat Design" bordered={false}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur magnam eius praesentium numquam reprehenderit quam quis error veniam, ducimus amet.
              </Card>
            </Col>
            <Col md={8} lg={7} xl={7}>
              <i class="fa fa-stack-exchange" aria-hidden="true"></i>
              <Card title="Simplified Workflow" bordered={false}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur magnam eius praesentium numquam reprehenderit quam quis error veniam, ducimus amet.
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
}

export default About;
