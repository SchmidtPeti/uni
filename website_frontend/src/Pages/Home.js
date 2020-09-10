import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';


const HomePage = () =>{
    return(
    <div className='app'>
        <Container>
            <Row>
            <Col>
               <h1>This is the HomePage!</h1>
            </Col>
            </Row> 
        </Container>
    </div>   );
};
export default HomePage;
