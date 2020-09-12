import React from 'react';
import GeneralCard from '../Components/GeneralCard'

 const AltalanosPage = ({AltanaosTasks}) =>{
     const AltalanosTasks = AltanaosTasks.map((i,AltanaosTask)=>{
         return (<GeneralCard AltanaosTask={i}/>)
     });
    return (<div>{AltalanosTasks}</div>);
 }
 export default AltalanosPage;