import React, {useState} from 'react';
import './NewFriend.scss';
import welcome from '../../assets/welcome.png';

const NewFriend = ({Id, name}) => {
  const [request, setRequest] = useState("New User");

  const handleChange = event => setRequest(event.target.value);


  return (
    <div className="componentBox">
      <h1>{request}</h1>
      <img src={welcome} alt="Welcome" id="welcomeImg"/>
      <p>
        Welcome new friend {request}
      </p>
        <Input 
          value={request}
          onChangeInput={handleChange}  
        >
        Input name here
        </Input>
    
    </div>
  );
};

const Input = ({value, onChangeInput, children}) => (
  <label>
    {children}
    <input
      type="text"
      value={value}
      onChange={onChangeInput}
      />
  </label>
);



export default NewFriend