import React, {useState} from 'react';
import './App.css';
import userData from '../../data/users';


const UserLookUp = () => {
  const [request, setRequest] = useState(userData[0].name);
  const [userId, setUserID] = useState(0);

  const handleChange = event => {
    var y = event;
    console.log({y});
    console.log(y);
    if (y !== undefined){
      if (y > 0 && y < userData.length-1){
        var results = userData[y];
        var nameResults = results["name"];
        setRequest(nameResults);
      }else{
        setRequest(0);}
    };  
  };

  const userChange = event =>{
    var x = event.target.value;
    setUserID(event.target.value);
    handleChange(x);
  };

  return (
    <div>
      <p>
        Current Friend... {request}: User ID {userId}
      </p>
        <Input 
          value={userId}
          onChangeInput={userChange}  
        >
        Input friend number here:
        </Input>
      <div>

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
