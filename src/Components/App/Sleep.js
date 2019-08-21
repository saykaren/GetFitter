import React from 'react';
import sleepData from '../../data/sleep';
import sleepImg from '../../assets/sleep.png';
import './Sleep.scss';

const Sleep = ({Id, name})=>{

  const sleepIdFilter = sleepData.filter(x=>(x.userID === Id));
  const todaySleepID = sleepIdFilter.filter(x=>(x.date === "2019/09/22"));
  const sleepToday = todaySleepID[0]["hoursSlept"];
  const goodSleep = parseInt(8-sleepToday);
    
  return(
    <div className="componentBox">
      <h1>Sleep Data</h1>
      <img src={sleepImg} alt="sleep" id="waterGlass"/>
      <article className="sleepDetails">
        {name} you slept for <span className="bold">{sleepToday}</span> hours last night
        <p>
        You need <span className="bold">{goodSleep}</span> hours
        </p>
        <p> 
        to get to the recommended 8 hours each night you need.
        </p>
    </article>
   </div>
  );
}

export default Sleep