import { React, Component } from 'react';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';
import './styles.css'; 

import api from './api2'; 

class Profile extends Component {
  state = {
    nomes: [],
  }

  async componentDidMount() {
    const response = await api.get('');

    this.setState({ nomes: response.data });
  }
  render() { 
    const { nomes } = this.state;  
    return (
      <Col md={6}>
      <Card className="mx-6 p-2 content-card border card-shadow overflow-auto">
        <Card.Title className="p-4 mx-4 p-2 mt-4 border content-title">
          <strong>Listar os Histórico Clientes</strong>
        </Card.Title>
        <Card.Body className="mb-6">

            {nomes.map(nome => (
           
          
        <p key={nome.id}>
          <ListGroup className="border">
            <ListGroup.Item action href="#">{nome.codigo}</ListGroup.Item>
            <ListGroup.Item action href="#">{nome.data}</ListGroup.Item>
              <ListGroup.Item action href="#">{nome.cliente}</ListGroup.Item>
              <ListGroup.Item action href="#">{nome.valorTotal}</ListGroup.Item>
             
            </ListGroup>
            </p>
        ))}
          
        </Card.Body>
      </Card>
    </Col>
    );
  }
}

export default Profile;
