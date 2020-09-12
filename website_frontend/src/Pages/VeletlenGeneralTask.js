import React,{Component} from 'react';
import {Form,Button} from 'react-bootstrap';
import GeneralCard from '../Components/GeneralCard';
class VeletlenGeneralTask extends Component{
    constructor(props){//GeneralTasks
        super(props);
        this.state = {
            selectedSubjectName : "",
            FilerTasks : [],
        }
    }
    onSelectChange = (event) => {
        this.setState({selectedSubjectName:event.target.value});
    }
    onClickFiler =  () =>{
        const GeneralTasks = this.props.GeneralTasks.filter(x=>x.subject_name==this.state.selectedSubjectName);
        /*console.log("Hurka",MatAlapTasks);
        const FilerTasks_beingMade = MatAlapTasks.map((i,MatAlapTask)=>{
            if(MatAlapTask.topic == this.state.selected_Category){
                return MatAlapTasks[i];
            }
        });*/
         this.setState({FilerTasks: GeneralTasks});

    }
    render(){
        let HasSubjectName = [];
        const GeneralTaskSubjectNames = this.props.GeneralTasks.map((GeneralTask,i)=>{
                if(!HasSubjectName.includes(this.props.GeneralTasks[i].subject_name)){
                    HasSubjectName.push(this.props.GeneralTasks[i].subject_name);
                    return GeneralTask.subject_name;
                }
                else{
                    return "";
                }
        }); 
        const Option_subName = GeneralTaskSubjectNames.map((SubjectName) =>{
            if(SubjectName!=""){
        return (<option>{SubjectName}</option>);
            }
        });
        const RandomTask = this.state.FilerTasks[Math.floor(Math.random()*this.state.FilerTasks.length)];
        const fileterTasks = (this.state.FilerTasks.length > 0) ? 
        <GeneralCard AltanaosTask={RandomTask}  />
        :
        "Nincs még kijelölve tantárgy név";
        return(
            <div>
            <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Tantárgy név</Form.Label>
            <Form.Control as="select" onChange={this.onSelectChange}>
               <option>Válassz valamit</option> 
              {Option_subName}
            </Form.Control>
          </Form.Group>
          <Button onClick={this.onClickFiler}>Mehet</Button>
            {fileterTasks}
          </div>
        )
    }
}
export default VeletlenGeneralTask;