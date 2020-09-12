import React from 'react';
import General_form from '../Components/General_form';

const AddGeneralTask = ({myChangeHandler,submitMatAlap,onFileChange,onFileChangeTaskDesc,onFileChangeSolutation}) => {
    return(
        <div className='app'>
          <General_form myChangeHandler={myChangeHandler} submitMatAlap={submitMatAlap} onFileChange={onFileChange} onFileChangeTaskDesc={onFileChangeTaskDesc} onFileChangeSolutation={onFileChangeSolutation}/>
        </div>   
    );
};
export default AddGeneralTask;