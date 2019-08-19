// import React, {useState} from 'react';
import './App.css';
import React from 'react';
// import activityData from '../../data/activity';
// import userData from '../../data/users';
import TodoApp from './ToDo';


const AboutMe = ({userId, name}) => {
  return(

    <div className="youOverview">
      <h1>{name} To Do and Suggestions</h1>
      <TodoApp userId={userId}/>
      
      Improvement Ideas (like you need more sleep if under 8 hours or more exercise)
    </div>
  );
}

export default AboutMe