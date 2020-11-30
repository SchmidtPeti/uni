import React from 'react';
import General_form from '../Components/General_form';

const AddGeneralTask = ({myChangeHandler,submitMatAlap,onFileChange,onFileChangeTaskDesc,onFileChangeSolutation,GeneralTasks}) => {
    return(
        <div className='app'>
          <General_form myChangeHandler={myChangeHandler} submitMatAlap={submitMatAlap} onFileChange={onFileChange} onFileChangeTaskDesc={onFileChangeTaskDesc} onFileChangeSolutation={onFileChangeSolutation} GeneralTasks={GeneralTasks}/>
        </div>   
    );
};
export default AddGeneralTask;