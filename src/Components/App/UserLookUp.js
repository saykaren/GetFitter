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

const UserLookUp = ({userId, name, friends}) => {
  return (
    <div className="userInformation">
      <p>
        Hello {name} User ID {userId}
      </p>
      <section>
        {/* You live at {address}  */}
      </section>
      <section>
        {name} friends are: 
        <div className="todo-list">
          {friends.map((friends, index)=>(
            <FriendList
              key={index} 
              friends={friends}
              userId={userId}
              index = {index}
            />
          ))}
      </div>
      </section>
 
   </div>
  );
};

export default UserLookUp
