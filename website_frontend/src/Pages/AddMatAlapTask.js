import React from 'react';
import MatAlap_form from '../Components/MatAlap_form';

const AddMatAlapTask = ({myChangeHandler,submitMatAlap,onFileChange,onFileChangeTaskDesc,onFileChangeSolutation}) => {
    return(
        <div className='app'>
          <MatAlap_form myChangeHandler={myChangeHandler} submitMatAlap={submitMatAlap} onFileChange={onFileChange} onFileChangeTaskDesc={onFileChangeTaskDesc} onFileChangeSolutation={onFileChangeSolutation}/>
        </div>   
    );
};
export default AddMatAlapTask;