import React from 'react';
import MatAlap_form from '../Components/MatAlap_form';

const AddMatAlapTask = ({myChangeHandler,submitMatAlap,onFileChange,onFileChangeTaskDesc,onFileChangeSolutation,MatAlapTasks}) => {
    return(
        <div className='app'>
          <MatAlap_form myChangeHandler={myChangeHandler} submitMatAlap={submitMatAlap} onFileChange={onFileChange} onFileChangeTaskDesc={onFileChangeTaskDesc} onFileChangeSolutation={onFileChangeSolutation} MatAlapTasks={MatAlapTasks}/>
        </div>   
    );
};
export default AddMatAlapTask;