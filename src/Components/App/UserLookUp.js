import React, {useState} from 'react';
import './App.css';
import userData from '../../data/users';

const ToDo = ({ userId, friends, index }) =>{
  return(
    <div 
      className="todo"
     >
      {userData.index}
      {userId.name}
      {userData.userId}
      Jello
      {friends}
      {index}

    </div>
  );
 }

const UserLookUp = () => {
  const [request, setRequest] = useState(userData[0].name);
  const [userId, setUserID] = useState(userData[0].id);
  const [address, setAddress] = useState(userData[0].address);
  const [friends, setFriends] = useState(userData[0].friends);

  console.log(userData[userId]["friends"]);
  const handleChange = event => {
    var y = event;

    if (y !== undefined){
      if (y > 0 && y < userData.length-1){
        var results = userData[y];
        var nameResults = results["name"];
        var address = results["address"];
        var friends = results["friends"];
        setRequest(nameResults);
        setAddress(address);
        setFriends(friends);
      }else{
        setRequest(0);}
    };  
  };

  const userChange = event =>{
    var x = event.target.value-1;
    var variable = userData[x].id;
    setUserID(variable);
    handleChange(x);
  };

  return (
    <div>

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
        My friends are: {friends}
      </section>
      <div className="todo-list">
      {friends.map((friends, index)=>(
        <ToDo
          key={index} 
          friends={friends}
          userId={userId}
          index = {index}
        />
      ))}

      </div>
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
