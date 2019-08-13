
import './App.css';
import React, {useState} from 'react';
import userData from '../../data/users';


const Welcome = () => {
  
  const [userId, setUserId] = useState(userData[0].id);
  const [name, setName] = useState("Guest");
 
  const userChange = event => {
    var y = event.target.value;
    console.log({y});
    if (y> 0 && y < userData.length-1){
      var x = event.target.value-1;
      console.log({x});
      var variable = userData[x].id;
      setUserId(variable);
      changeContent();
    }else{
      var zeroV = userData[0].id;
      console.log({zeroV});
      setUserId(zeroV);
      changeContent();
    }
  };

  const changeContent = ()=>{
    var y = userId;
    var z = y--;
    var x = userData[z].name;
    console.log({z});
    console.log({x});
    setName(x);
  }

  return (
    <div className="welcomeSection">
      <div className="flipCard">
        <section className="front">
        Welcome
        </section>
        <section className="back">
        Back
        </section>
      </div>
      <Input 
          value={userId}
          onChangeInput={userChange}  
          className="welcomeInput"
        >
        ID top
        </Input>
        <div>
          {name}
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


export default Welcome