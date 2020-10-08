import React,{Component} from 'react';
import {Card,Button} from 'react-bootstrap';

class GeneralCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            solution_showed : false,
        };
    }
    onShowSolutation = () => {
        this.setState({solution_showed : true});
    }
    componentWillReceiveProps(){
        this.setState({solution_showed:false});
    }
    render() {
        const {topic,task_type,task_description,solution,subject_name,major,semester} = this.props.AltanaosTask;
        return(
            <Card style={{ width: '80%'}} className="mx-auto shadow-sm p-3 mb-5 bg-white rounded">
            <Card.Body>
                  <Card.Title>{topic}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{task_type} | {major}/{subject_name}/{semester} félév</Card.Subtitle>
                  <Card.Img variant="top"  src={task_description} />
                  <Card.Text>
                  ---------------------------------------------------------------------------------------------------------
              </Card.Text>
                  {this.state.solution_showed? <Card.Img variant="middle" src={solution} /> : <Button onClick={this.onShowSolutation}>Megoldás</Button>}
            </Card.Body>
            </Card>      
        )
    }
}
export default GeneralCard;