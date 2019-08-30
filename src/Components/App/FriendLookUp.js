import React from 'react';
// import userData from '../../data/users';
import friendsImg from '../../assets/friends.png';

const FriendList = ({ friends, users}) =>{
  const idNum = friends;
  // const data = users["data"];
  // const results = data.filter(x=>(x.id === 2));
  
  // console.log({users});
  // console.log({results});
  // console.log(data);
  // console.log(typeof(data));
  // const result = users['data'][0];
  // console.log({result});
  // const nameData = users['data'].filter(x=>x.id === idNum);
  const nameData = friends;
  


  // const nameData = users.data.filter(x=>(x.id == friends))[0].name;
  

  return(
    <div 
      className="todo"
     >
      {nameData} : ID {friends}
    </div>
  );

}
  

const FriendLookUp = ({Id, name, friends, users}) => {
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
              users ={users}
            />
          ))}
      </div>
      </section>
 
   </div>
  );
};

export default FriendLookUp
