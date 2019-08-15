import './App.css';
import React, {useState} from 'react';
import userData from '../../data/users';

const Welcome = () => {
  
  const [userId, setUserId] = useState(userData[0].id);
  const [name, setName] = useState("Guest");
  const [email, setEmail] = useState("");
 
  const userChange = event => {
    var stringEvent = event.target.value;
    var eventTarget = parseInt(stringEvent);
    
    console.log({eventTarget});
    if (eventTarget> 0 && eventTarget < userData.length-1){
      var userResultArray = userData.filter(x=>(x.id === eventTarget));
      var userResultId = userResultArray[0].id;
      var userResultEmail = userResultArray[0].email;
      setUserId(userResultId);
      setEmail(userResultEmail);
      changeContent(userResultId);
    }else{
      setUserId("");
      setName("Guest");
      setEmail("");
    };
  };

  const changeContent = (id)=>{
    var userResultArray = userData.filter(x=>(x.id === id)) 
    var userResultName = userResultArray[0].name;
    setName(userResultName);
  }

  //Ability for user to input email to change ID and name
  const emailChange = (event) => {
    var stringEvent = event.target.value;
    var userResultArray = userData.filter(x=>(x.email === stringEvent));
    var userResultId = userResultArray[0].id;
    if(userResultId>0){
      setUserId(userResultId);
      setEmail(stringEvent);
      changeContent(userResultId);
    } else{
      setUserId(0);
      setName("Wrong email");
      setEmail("");
    };
  }

  return (
    <div className="welcomeSection">
      <div className="flipCard">
        <section className="front">
        Welcome
        </section>
        <section className="back">
        {name}
        </section>
      </div>
      <Input 
          value={userId}
          onChangeInput={userChange}  
          className="welcomeInput"
          id="userIdTop"
        >
        ID:
      </Input>
      <InputText
        value={email}
        onChangeInput={emailChange}
        className="welcomeInput"
      >
        Email:
      </InputText>
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

const InputText = ({value, onChangeInput, children}) => (
  <label>
    {children}
    <input
      type="text"
      value={value}
      onChange={onChangeInput}
      />
  </label>
);



export default Welcome