import React,{Component} from 'react';
import {Form,Button} from 'react-bootstrap';
import MatAlapCard from '../Components/MatAlapCard';

class VeletlenPage extends Component{
    constructor(props){//category and tasks
        super(props);
        this.state = {
            selected_Category : "",
            FilerTasks : [],
        }
    }
    onClickFiler =  () =>{
        const MatAlapTasks = this.props.MatAlapTasks.filter(x=>x.topic===this.state.selected_Category);
        /*console.log("Hurka",MatAlapTasks);
        const FilerTasks_beingMade = MatAlapTasks.map((i,MatAlapTask)=>{
            if(MatAlapTask.topic == this.state.selected_Category){
                return MatAlapTasks[i];
            }
        });*/
         this.setState({FilerTasks: MatAlapTasks});

    }
    onSelectChange = (event) => {
        this.setState({selected_Category:event.target.value});
    }
    render(){
        let HasCateg = [];
        const MatAlapCategories = this.props.MatAlapTasks.map((MatAlapTask,i)=>{
                if(!HasCateg.includes(this.props.MatAlapTasks[i].topic)){
                    HasCateg.push(this.props.MatAlapTasks[i].topic);
                    return MatAlapTask.topic;
                }
                else{
                    return "";
                }
        }); 
        const Option_Cat = MatAlapCategories.map((Category) =>{
            if(Category!==""){
        return (<option>{Category}</option>);
            }
        });
        const RandomTask = this.state.FilerTasks[Math.floor(Math.random()*this.state.FilerTasks.length)];
        /*const FilterTaskRandom = 
        const fileterTasks = (this.state.FilerTasks.length > 0) ? 
        FilerTasks.map((i)=>{
        return <MatAlapCard topic={i.topic} task_type={i.task_type} task_image={i.task_description} task_solution={i.solutation} task_solution_stepbystep={i.solutation_stepbystep} />})
        : "Nincs ilyen feladat";*/
        const fileterTasks = (this.state.FilerTasks.length > 0) ? 
        <MatAlapCard topic={RandomTask.topic} task_type={RandomTask.task_type} task_image={RandomTask.task_description} task_solution={RandomTask.solutation} task_solution_stepbystep={RandomTask.solutation_stepbystep}/>
        :
        "Nincs még kijelölve kategória";

        return(
            <div >
             <Form className="bg-light m-4 rounded p-3">   
            <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Válassz kategóriát!</Form.Label>
            <Form.Control as="select" onChange={this.onSelectChange}>
               <option>Válassz valamit</option> 
              {Option_Cat}
            </Form.Control>
          </Form.Group>
          <Button onClick={this.onClickFiler}>Mehet</Button>
            {fileterTasks}
            </Form>
          </div>
        )
    }
}
export default VeletlenPage;