import React, {useState} from 'react';
import './App.css';
import userData from '../../data/users';


const UserLookUp = () => {
  const [request, setRequest] = useState(userData[0].name);
  const [userId, setUserID] = useState(0);
  const [address, setAddress] = useState(userData[0].address);

  const handleChange = event => {
    var y = event;
    console.log({y});
    console.log(y);
    if (y !== undefined){
      if (y > 0 && y < userData.length-1){
        var results = userData[y];
        var nameResults = results["name"];
        var address = results["address"];
        setRequest(nameResults);
        setAddress(address)
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
