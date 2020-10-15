import React from "react";
import { Row, Col, Card } from "antd";
import ModernDesign from '../assets/images/modern-design.jpg';
import CleanAndElegant from '../assets/images/clean-design.jpg';
import GreatSupport from '../assets/images/great-support.jpg';
import EasyCustomize from '../assets/images/easy-customise.jpg';
import UnlimitedFeatures from '../assets/images/unlimited-features.jpg';
import AdvancedOption from '../assets/images/advanced-option.jpg';

const { Meta } = Card;

function Features() {
  return (
    <section className="features" id="features">
      <header className="features-header text-center">
        <h2 className="sub-header no-gutter">Key Features and Benefit
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <hr className="border-bottom" />
      </header>
      <div className="features-body-cards">
        <Row justify="center" gutter={[20, 30]}>
          <Col md={8} lg={7} xl={8}>
            <Card
              hoverable
              cover={<img alt="Modern Design" src={ModernDesign}
                style={{ height: '180px', objectFit: "cover", width: '100%' }} />}
            >
              <Meta title="Modern Design" />
            </Card>
          </Col>
          <Col md={8} lg={7} xl={8}>
            <Card
              hoverable
              cover={<img alt="Clean And Elegant" src={CleanAndElegant} style={{ height: '180px', objectFit: "cover", width: '100%' }} />}
            >
              <Meta title="Clean and Elegant" />
            </Card>
          </Col>
          <Col md={8} lg={7} xl={8}>
            <Card
              hoverable
              cover={<img alt="Great Support" src={GreatSupport}
                style={{ height: '180px', objectFit: "cover", width: '100%' }} />}
            >
              <Meta title="Great Support" />
            </Card>
          </Col>
          <Col md={8} lg={7} xl={8}>
            <Card
              hoverable
              cover={<img alt="Easy to Customize" src={EasyCustomize}
                style={{ height: '180px', objectFit: "cover", width: '100%' }} />}
            >
              <Meta title="Easy to Customize" />
            </Card>
          </Col>
          <Col md={8} lg={7} xl={8}>
            <Card
              hoverable
              cover={<img alt="Unlimited Features" src={UnlimitedFeatures} style={{ height: '180px', objectFit: "cover", width: '100%' }} />}
            >
              <Meta title="Unlimited Features" />
            </Card>
          </Col>
          <Col md={8} lg={7} xl={8}>
            <Card
              hoverable
              cover={<img alt="Advanced Options" src={AdvancedOption}
                style={{ height: '180px', objectFit: "cover", width: '100%' }} />}
            >
              <Meta title="Advanced Options" />
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Features;
