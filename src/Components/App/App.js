// import React from 'react';
import './App.css';
import Friends from './Friends';
// import UserResult from './scripts';
import UserLookUp from './UserLookUp';
import TodoApp from './ToDo';
import Exercise from './Exercise';
import Sleep from './Sleep';
import React, {useState} from 'react';
import userData from '../../data/users';


const App = () => {

  const [userId, setUserId] = useState(userData[0].id);
  const [name, setName] = useState("Guest");
  const [email, setEmail] = useState("");
 
  const userChange = event => {
    const stringEvent = event.target.value;
    const eventTarget = parseInt(stringEvent);
    
    // console.log({eventTarget});
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
        <div className="youOverview">
          <h1>About Me /Status</h1>
          Put in Your profile
          <TodoApp userId={userId}/>
          Improvement Ideas (like you need more sleep if under 8 hours or more exercise)
        </div>

        <Exercise userId={userId} name={name} email={email}/>

        <Sleep userId={userId} name={name} email={email}/>

        <div className="hydration">
          <h1>Hydration H20</h1>
          <article>
            (bring in picture of water boy)

          </article>
        </div>
        <UserLookUp />
        
        <Friends />

        
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
