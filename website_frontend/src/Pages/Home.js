import React from 'react';
import {Container,Row,Col,Nav} from 'react-bootstrap';
import AddMatAlapTask from './AddMatAlapTask';


const HomePage = () =>{
    return(
    <div className='app'>
        <Container>
            <Row>
                <Col>
                <Nav defaultActiveKey="/home" as="ul">
  <Nav.Item as="li">
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-1">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
</Nav>
                </Col>
                <Col>
                    <AddMatAlapTask />
                </Col>
            </Row>
        </Container>
    </div>   );
};
export default HomePage;
