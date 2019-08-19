import React, {useState} from 'react';
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

const UserLookUp = ({userId, name}) => {
  const [address, setAddress] = useState("");
  const [friends, setFriends] = useState(userData[0].friends);
  
  const handleChange = () => {
    console.log("click");
    console.log({userId});
    const userIdObject = userId;
    console.log({userIdObject});

    if (userIdObject !== undefined){
      if (userIdObject > 0 && userIdObject < userData.length-1){
        console.log("I am in handleChange");
        const myNameId = {userId}; //object
        const valueId = Object.values(myNameId)[0]; //number format of ID

        const userResultArray = userData.filter(x=>(x.id === valueId)); //give array of user selected
        const userResultId = userResultArray[0].id; // id of user
        const userResultAddress = userResultArray[0].address; // email of user
        const userResultFriendsId = userResultArray[0].friends;
        console.log(userResultFriendsId);
        
        const address = userResultAddress;
        const friends = userResultFriendsId;

        setAddress(address);
        setFriends(friends);
      };
    };  
  };


  return (
    <div className="userInformation">
      <p
        onChange={handleChange}
      >
        Hello {name} User ID {userId}
      </p>
      <button 
        onClick={handleChange}
      >
        click me
      </button>
      <section>
        You live at {address} 
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
              onChange = {handleChange}
            />
          ))}
      </div>
      </section>
 
   </div>
  );
};

export default UserLookUp
