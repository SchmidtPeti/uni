import React from 'react';
import MatAlapCard from '../Components/MatAlapCard';


const HomePage = ({MatAlapTasks,solution_showed,solution_stepbystep_showed,onShowSolutation,onSolution_stepbystep}) =>{
    const MatTaskCard = MatAlapTasks.map((MatalapTask,i)=>{
        return (
            <MatAlapCard topic={MatAlapTasks[i].topic} task_type={MatAlapTasks[i].task_type} task_image={MatAlapTasks[i].task_description} task_solution={MatAlapTasks[i].solutation} task_solution_stepbystep={MatAlapTasks[i].solutation_stepbystep}  />
  )
    });
    return(
    <div className='app'>
                {MatTaskCard}

    </div>   );
};
export default HomePage;
