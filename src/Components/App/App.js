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
import TempUserLookUp from './TempFile';



const App = () => {

  const [userId, setUserId] = useState(userData[0].id);
  const [name, setName] = useState("Guest");
  const [email, setEmail] = useState("");
  const [friends, setFriends] = useState(userData[0].friends);
 
  const userChange = event => {
    const stringEvent = event.target.value;
    const eventTarget = parseInt(stringEvent);
    
    console.log({eventTarget});
    if (eventTarget> 0 && eventTarget < userData.length-1){
      var userResultArray = userData.filter(x=>(x.id === eventTarget));
      var userResultId = userResultArray[0].id;
      var userResultEmail = userResultArray[0].email;
      const userResultFriendsId = userResultArray[0].friends;
      setUserId(userResultId);
      setEmail(userResultEmail);
      changeContent(userResultId);
      setFriends(userResultFriendsId);
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
    <div className="App">
      <header className="App-header">
        <div className="welcomeSection">
          {/* <h1 id="appName">GitFitter</h1> */}
           <div id="welcomeName">
              {name}
           </div>
          <section className="welcomeTopInput">
            <Input 
                value={userId}
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
        <AboutMe userId={userId} name={name} email={email}/>

        <Exercise userId={userId} name={name} email={email} friends={friends}/>

        <Sleep userId={userId} name={name} email={email}/>

        <div className="hydration">
          <h1>Hydration H20</h1>
          <article>
            (bring in picture of water boy)

          </article>
        </div>
        <UserLookUp userId={userId} name={name} email={email} friends={friends}/>
        
        <Friends userId={userId} name={name} email={email} friends={friends}/>

        <TempUserLookUp userId={userId} name={name} email={email} friends={friends}/>
      </section>
      <footer className="footer">

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
