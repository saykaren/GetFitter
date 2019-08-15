// import React, {useState} from 'react';
import './App.css';
import React from 'react';
// import activityData from '../../data/activity';
// import userData from '../../data/users';

const Sleep = ({userId, name})=>{

  return(
    <div className="sleepInfo">
    <h1>Sleep Data</h1>
    <article>
      {name} sleep for ID {userId} is.....
      You are under/over 8 hours....(calculate)
    </article>
  </div>
  )
}

export default Sleep