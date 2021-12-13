import { React, Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import './styles.css';
 

class Footer extends Component {
  render() {
    return (
      <Row className="pb-4 justify-content-md-center text-center">
        <Col md={12} className="mt-4">
          <Card className="footer-card border-radius card-shadow">
            <Card.Body className="align-middle">
              
              <strong>footer</strong>
            </Card.Body>
          </Card>
        </Col>
       
      </Row>
    );
  }
}

export default Footer;
