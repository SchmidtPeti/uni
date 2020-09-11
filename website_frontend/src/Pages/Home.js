import React from 'react';
import {Container,Row,Col,Card} from 'react-bootstrap';


const HomePage = ({MatAlapTasks}) =>{
    const MatTaskCard = MatAlapTasks.map((user,i)=>{
        return (
            
            <Card style={{ width: '50rem' }}>
  <Card.Body>
        <Card.Title>{MatAlapTasks[i].topic}</Card.Title>
        <Card.Img variant="top" src={MatAlapTasks[i].task_description} />
    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
    <Card.Img variant="middle" src={MatAlapTasks[i].solutation} />
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Img variant="bottom" src={MatAlapTasks[i].solutation_stepbystep} />
    </Card.Body>
  </Card>
  )
    });
    return(
    <div className='app'>
        <Container>
            <Row>
            <Col>
                {MatTaskCard}
            </Col>
            </Row> 
        </Container>
    </div>   );
};
export default HomePage;
