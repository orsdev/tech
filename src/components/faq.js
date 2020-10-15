import React from 'react';
import { Collapse, Row, Col, Button } from 'antd';

const { Panel } = Collapse;

function Faq() {
  return (
    <section className="faq" id="faq">
      <header className="faq-header text-center">
        <h2 className="sub-header no-gutter">Frequently Asked Questions</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <hr className="border-bottom" />
      </header>
      <div className="faq-body">
        <Row justify="center">
          <Col xs={23} sm={22} md={20} lg={19} xl={20}>
            <Collapse defaultActiveKey={['1']} accordion>
              <Panel header="How to set up the theme?" key="1">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis distinctio nulla sunt quo quia tempora dicta enim sint quisquam error.
              </p>
              </Panel>
              <Panel header="Can i cancel anytime?" key="2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis distinctio nulla sunt quo quia tempora dicta enim sint quisquam error.
              </p>
              </Panel>
              <Panel header="How to manage my account?" key="3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis distinctio nulla sunt quo quia tempora dicta enim sint quisquam error.
              </p>
              </Panel>
            </Collapse>
          </Col>
        </Row>
      </div>
      <footer className="faq-footer text-center">
        <Row justify="center">
          <Col xs={23} sm={18} md={15} lg={14} xl={15}>
            <h2 className="sub-header no-gutter">Want a Quick Support?</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi sit quam nihil repellendus dolores exercitationem amet eveniet odio? Quaerat voluptatibus aliquid nobis reprehenderit libero sunt ad eius saepe voluptate consequatur?
        </p>
            <Button
              type="primary"
              size="large"
              icon={<i className="fa fa-envelope"
                aria-hidden="true"></i>}>
              Email your question
              </Button>
          </Col>
        </Row>
      </footer>
    </section>
  )
}

export default Faq;
