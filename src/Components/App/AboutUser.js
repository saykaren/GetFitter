import React from 'react';
import TodoApp from './ToDo';
import './AboutUser.scss';

const AboutMe = ({userId, name}) => {
  return(
    <div className="componentBox">
      <h1>{name} To Do and Suggestions</h1>
      <TodoApp userId={userId}/>
    </div>
  );
}

export default AboutMe