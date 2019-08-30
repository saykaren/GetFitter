import React, {useState, useEffect} from 'react';
import './App.scss';
import NewFriend from './NewFriend';
import FriendLookUp from './FriendLookUp';
import Exercise from './Exercise';
import Sleep from './Sleep';
// import userData from '../../data/users';
import AboutMe from './AboutUser';
import Hydration from './Hydration';
import Footer from './Footer';

const App = () => {

  const guestData = { "data": [
    {
      "id":0,
      "name":"Guest",
      "address":"No address on file",
      "email":"",
      "strideLength":0,
      "dailyStepGoal":0,
      "friends":[
        9,
        27,
        21,
        13
      ]
    }
  ]}  

  const [users, setUsers] = useState([]);
  const [Id, setId] = useState(guestData["data"][0].id);
  const [name, setName] = useState(guestData["data"][0].name);
  const [email, setEmail] = useState(guestData["data"][0].email);
  const [friends, setFriends] = useState(guestData["data"][0].friends);
  const [hasErrors, setErrors] = useState(false);
  const [friendNames, setFriendNames] = useState(["No friends right now"]);
  
  console.log({Id});
  console.log({friends});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('http://localhost:3000/users');
      res
      .json()
      .then(res => setUsers(res))
      .then(res => setId(res[0].Id))
      .catch(err => setErrors(err));
    }
    fetchData();
  }, []);


  const userChange = event => {
    const stringEvent = event.target.value;
    const eventTarget = parseInt(stringEvent);
  
    if (eventTarget> 0 && eventTarget < users["data"].length){
      var userResultArray =  users["data"].filter(x=>(x.id === eventTarget));
      var userResultId = userResultArray[0].id;
      var userResultEmail = userResultArray[0].email;
      const userResultFriendsId = userResultArray[0].friends;
      const userResultName = userResultArray[0].name;
      setId(userResultId);
      setEmail(userResultEmail);
      changeContent(userResultId);
      setFriends(userResultFriendsId);
      setName(userResultName);

    //   const testingResult = users["data"].filter(x=>(x.id === 15));
    // console.log({users});
    // console.log({friends});
    // console.log({testingResult});
     
    }else{
      setId(guestData["data"][0].id);
      setName(guestData["data"][0].name);
      setEmail(guestData["data"][0].email);
    };
  };

  const changeContent = (id)=>{
    var userResultArray =  users["data"].filter(x=>(x.id === id)) 
    var userResultName = userResultArray[0].name;
    setName(userResultName);
  }

  //Ability for user to input email to change ID and name
  const emailChange = (event) => {
    var stringEvent = event.target.value;
    var userResultArray =  users["data"].filter(x=>(x.email === stringEvent));
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
        <h1 id="appName">GitFitter {name}</h1>
        <div className="welcomeSection">
          
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
         <Sleep sleepId={Id} name={name}/> 
         <Hydration Id={Id} name={name} email={email} friends={friends}/>
         <FriendLookUp users={users} Id={Id} name={name} email={email} friends={friends}/>
         <NewFriend Id={Id} name={name} email={email} friends={friends}/>       
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
