import React from 'react';
import userData from '../../data/users';
import friendsImg from '../../assets/friends.png';

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

const FriendLookUp = ({Id, name, friends}) => {
  return (
    <div className="componentBox">
      <h1>
        {name} Friends:
      </h1>
      <section className="friendsBox">
      <img src={friendsImg} id="friendsImg" alt="friends"/>
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

export default FriendLookUp
