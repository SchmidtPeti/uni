import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/Home';
import AddMatAlapTask from './Pages/AddMatAlapTask';
import VeletlenPage from './Pages/VeletlenTask';
import 'bootstrap/dist/css/bootstrap.min.css';
import S3FileUpload from 'react-s3';
import {Nav,Form,Button} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import api from './api/api';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        MatAlapTasks : [],
        task_description : null,
        task_type : "",
        topic : "",
        level : "",
        solutation : null,
        major : "",
        solutation_stepbystep : null,
        solutation_stepbystp_server_location : "",
        solutation_by : "",
        solutation_by_credit: "",
        source : "",
        time : 0,
        difficulty : 0,
        isLoading: false,
        solution_showed : false,
        solution_stepbystep_showed : false,
    }
    
  }
    componentDidMount = async () => {
      this.setState({ isLoading: true })

      await api.getAllMatAlapTasks().then(MatAlapTasks => {
          this.setState({
            MatAlapTasks: MatAlapTasks.data.data,
              isLoading: false,
          })
      });
    };
      myChangeHandler = (event) => {//used on admin page to login
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    };
    onFileChange = event => { 
     
      this.setState({ solutation_stepbystep: event.target.files[0] }); 
     
    }; 
    onFileChangeTaskDesc = event => {
      this.setState({ task_description: event.target.files[0] }); 
    }
    onFileChangeSolutation= event => {
      this.setState({ solutation: event.target.files[0] }); 
    }
    onShowSolutation = () => {
      this.setState({solution_showed : true});
  }
  onSolution_stepbystep = () => {
      this.setState({solution_stepbystep_showed : true})
  }

    submitMatAlap = async () =>{
        await this.uploadFileToS3(); //wrong input can t be fatal
        const {task_description,task_type,topic,level,solutation,major,solutation_stepbystep,solutation_by,solutation_by_credit,source,time,difficulty} = this.state;
        const playload = {task_description,task_type,topic,level,solutation,major,solutation_stepbystep,solutation_by,solutation_by_credit,source,time,difficulty};
        console.log(playload);
        api.insertMatAlapTask(playload).then(() => console.log("success")).catch(error => console.log(error));
    }
      uploadFileToS3 = async () => {
        const config = {
          bucketName: 'unilearning',
          dirName: 'MatAlap_solutation',
          region: 'eu-central-1',
          accessKeyId: process.env.REACT_APP_Bucket_ID,
          secretAccessKey: process.env.REACT_APP_Bucket_Key,
        }
        const file_loc = await S3FileUpload.uploadFile(this.state.solutation_stepbystep, config);
        const taskDesc = await S3FileUpload.uploadFile(this.state.task_description, config);
        const solutation_short = await S3FileUpload.uploadFile(this.state.solutation, config);
        this.setState({task_description : taskDesc.location,solutation_stepbystep : file_loc.location, solutation : solutation_short.location });
      };
  render() {
    return (
    <div className="App">
      <Router>
      <Nav defaultActiveKey="/home" as="ul" color="black">
  <Nav.Item as="li">
    <Nav.Link>Active</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-1"><Link to="/home">Home</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-2"><Link to="/addMatek">Matek feladat hozzáadás</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-3"><Link to="/veletlen">Veletlen</Link></Nav.Link>
  </Nav.Item>
</Nav>
      <Switch>  
          <Route exact path="/addMatek">
          <AddMatAlapTask myChangeHandler={this.myChangeHandler} submitMatAlap={this.submitMatAlap} onFileChange={this.onFileChange} onFileChangeTaskDesc={this.onFileChangeTaskDesc} onFileChangeSolutation={this.onFileChangeSolutation}/>           
          </Route>
          <Route path="/home">
            <HomePage MatAlapTasks={this.state.MatAlapTasks} solution_showed={this.state.solution_showed} solution_stepbystep_showed={this.state.solution_stepbystep_showed} onShowSolutation={this.onShowSolutation} onSolution_stepbystep={this.onSolution_stepbystep} />
          </Route>
          <Route path="/veletlen">
            <VeletlenPage MatAlapTasks={this.state.MatAlapTasks} />
          </Route>
        </Switch>
      </Router>  
    </div>)
  };
}

export default App;
