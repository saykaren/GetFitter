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

const UserLookUp = () => {
  const [request, setRequest] = useState(userData[0].name);
  const [userId, setUserId] = useState(userData[0].id);
  const [address, setAddress] = useState(userData[0].address);
  const [friends, setFriends] = useState(userData[0].friends);
  const handleChange = event => {
    const y = event;

    if (y !== undefined){
      if (y > 0 && y < userData.length-1){
        const results = userData[y];
        const nameResults = results["name"];
        const address = results["address"];
        const friends = results["friends"];
        setRequest(nameResults);
        setAddress(address);
        setFriends(friends);
      }else{
        setRequest(0);}
    };  
  };

  const userChange = event =>{
    const y = event.target.value;
    if (y > 0 && y < userData.length-1){
      const x = event.target.value-1;
      const variable = userData[x].id;
      setUserId(variable);
      handleChange(x);
    }else{
      const zeroV = userData[0].id;
      setUserId(zeroV);
    };
  };

  return (
    <div className="userInformation">
        <Input 
          value={userId}
          onChangeInput={userChange}  
        >
        Input Your ID:
        </Input>
      <p>
        Hello {request} User ID {userId}
      </p>
      <section>
        Contact information {address}
      </section>
      <section>
        My friends are: 
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


const Input = ({value, onChangeInput, children}) => (
  <label>
    {children}
    <input
      type="number"
      value={value}
      onChange={onChangeInput}
      />
  </label>
);

export default UserLookUp
