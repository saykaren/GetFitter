// import React, {useState} from 'react';
import React from 'react';
// import activityData from '../../data/activity';
// import userData from '../../data/users';
import TodoApp from './ToDo';


const AboutMe = ({userId, name}) => {
  return(
    <div className="componentBox">
      <h1>{name} To Do and Suggestions</h1>
      <TodoApp userId={userId}/>
    </div>
  );
}

export default AboutMe