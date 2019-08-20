import React from 'react';
import './App.css';
import userData from '../../data/users';

const FriendList = ({ friends }) =>{
  const idNum = friends-1;
  const nameData = userData[idNum].name; // is one digit off.... 
  return(
    <div 
      className="todo"
     >
      {nameData} : ID {friends}
    </div>
  );
 }

const UserLookUp = ({Id, name, friends}) => {
  return (
    <div className="componentBox">
      <h1>
        {name} Friends:
      </h1>
      <section>
        <div className="todo-list">
          {friends.map((friends, index)=>(
            <FriendList
              key={index} 
              friends={friends}
              Id={Id}
              index = {index}
            />
          ))}
      </div>
      </section>
 
   </div>
  );
};

export default UserLookUp
