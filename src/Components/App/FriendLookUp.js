import React from 'react';
// import userData from '../../data/users';
import friendsImg from '../../assets/friends.png';

const FriendList = ({ friends, users, friendNames}) =>{
  return(
    <div 
      className="todo"
     >
    {friends} 
    </div>
  );

}
  

const FriendLookUp = ({Id, name, friends, users, friendNames}) => {
  const specificItems = friendNames.map(y=>(y.map(x=>(x.name))));//pulls the names that match the friend ids
  const filteredName = specificItems.map(x=>(x[0]));
  // console.log(filteredName);

  return (
    <div className="componentBox">
      <h1>
        {name} Friends:
      </h1>
      <section className="friendsBox">
      <img src={friendsImg} id="friendsImg" alt="friends"/>
        <div className="todo-list">
          {filteredName.map((friends, index)=>(
            <FriendList
              key={index} 
              friends={friends}
              Id={Id}
              index = {index}
              users ={users}
              friendNames ={friendNames}
            />
          ))}
      </div>
      </section>
 
   </div>
  );
};

export default FriendLookUp
