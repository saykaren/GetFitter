// import React from 'react';
import './App.css';
import Friends from './Friends';
// import UserResult from './scripts';
import UserLookUp from './UserLookUp';
// import TodoApp from './ToDo';
import Exercise from './Exercise';
import Sleep from './Sleep';
import React, {useState} from 'react';
import userData from '../../data/users';
import AboutMe from './AboutUser';
// import TempUserLookUp from './TempFile';
import Hydration from './Hydration';
import Footer from './Footer';



const App = () => {

  const [Id, setId] = useState(userData[0].id);
  const [name, setName] = useState("Guest");
  const [email, setEmail] = useState("");
  const [friends, setFriends] = useState(userData[0].friends);
 
  const userChange = event => {
    const stringEvent = event.target.value;
    const eventTarget = parseInt(stringEvent);
    
    // console.log({eventTarget});
    if (eventTarget> 0 && eventTarget < userData.length-1){
      var userResultArray = userData.filter(x=>(x.id === eventTarget));
      var userResultId = userResultArray[0].id;
      var userResultEmail = userResultArray[0].email;
      const userResultFriendsId = userResultArray[0].friends;
      setId(userResultId);
      setEmail(userResultEmail);
      changeContent(userResultId);
      setFriends(userResultFriendsId);
    }else{
      setId("");
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
      setId(userResultId);
      setEmail(stringEvent);
      changeContent(userResultId);
    } else{
      setId(0);
      setName("Wrong email");
      setEmail("");
    };
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="welcomeSection">
          {/* <h1 id="appName">GitFitter</h1> */}
           <div id="welcomeName">
              {name}
           </div>
          <section className="welcomeTopInput">
            <Input 
                value={Id}
                onChangeInput={userChange}  
              >
              Login ID:
            </Input>
            <InputText
              value={email}
              onChangeInput={emailChange}
            >
              Email:
            </InputText>
          </section>

        </div>
      </header>
      <section className="mainContent">
        <AboutMe Id={Id} name={name} email={email}/>

        <Exercise Id={Id} name={name} email={email} friends={friends}/>

        <Sleep Id={Id} name={name} email={email}/>

        <Hydration Id={Id} name={name} email={email} friends={friends}/>

        <UserLookUp Id={Id} name={name} email={email} friends={friends}/>
        
        <Friends Id={Id} name={name} email={email} friends={friends}/>

        
      </section>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

const Input = ({value, onChangeInput, children}) => (
  <label
    className="inputLabel"
  >
    {children}
    <input
      type="number"
      value={value}
      onChange={onChangeInput}
      className="inputNum"
      />
  </label>
);

const InputText = ({value, onChangeInput, children}) => (
  <label
    className="inputLabel"
  >
    {children}
    <input
      type="text"
      value={value}
      onChange={onChangeInput}
      className="inputText"
      />
  </label>
);


export default App;
