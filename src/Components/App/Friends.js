import React, {useState} from 'react';
import './App.css';

const Friends = ({Id, name}) => {
  const [request, setRequest] = useState("New User");

  const handleChange = event => setRequest(event.target.value);


  return (
    <div className="componentBox">
      {Id}{name}
      <p>
        New Friend... {request}
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



export default Friends