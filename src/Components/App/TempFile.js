// import React, {useState} from 'react';
import './App.css';
import React from 'react';
import activityData from '../../data/activity';
import userData from '../../data/users';
import userId from './App';



// const newArray = [];
// const activityLocal = newArray.push(myFriends);

const activityLocal = [
  {
    "userID": 5,
    "date": "2019/06/15",
    "numSteps": 3577,
    "minutesActive": 140,
    "flightsOfStairs": 16
  },
  {
    "userID": 7,
    "date": "2019/06/15",
    "numSteps": 4294,
    "minutesActive": 138,
    "flightsOfStairs": 10
  },
  {
    "userID": 8,
    "date": "2019/06/15",
    "numSteps": 7402,
    "minutesActive": 116,
    "flightsOfStairs": 33
  },
  {
    "userID": 50,
    "date": "2019/09/22",
    "numSteps": 2121,
    "minutesActive": 237,
    "flightsOfStairs": 14
  },
];

const Bar = ({percent}) =>{
  return(
    <div
      className="bar"
      style={{ width: `${percent}%`}}
      key={percent}
    />
  )
}

const BarTextContent = () => {
  return (
    <div className="bar-text-content">
      {activityLocal.map((steps)=>( //used activityLocal but need to change to friends
        <div 
          className="text"
          key={activityLocal.userID}
        >
          {steps.userID}
        </div>
        ))
      }
    </div>
  )
}



const Line = ({ left }) =>{
  return(
    <div 
      className="line"
      style={{ left: `${left}%` }}
      key={left}
    />
  );
}

const FriendList = ({userId, friends}) =>{
  const idNum = {userId};
  const valueId = Object.values(idNum)[0]; //number format of ID
  const userIdArray = userData.filter(x=>(x.id === valueId));
  const nameData = userIdArray[valueId].name;

  return(
    <div
      className="todo"
    >
      {nameData} : ID {friends}
    </div>
  );
}

const TempUserLookUp = ({userId, friends, name}) => {

  console.log({userId});
  console.log({friends});

  ///8-19-2019 15:48 below is not working...need to figure out how to filter the data down to friends
  const data = activityData.filter(x=>(x.userID === friends.map(x=>(x))));
  console.log(data);

  const renderBars =() =>{
    const data = activityLocal;
    // const data = activityData; //real data full list probably want friends list
    
    // console.log({data}); //properly coming in
    let sumOfAllActivity = data.reduce((acc, curr)=>{
      return acc + curr.numSteps;
    }, 0);
    return data.map((numSteps)=>{
      const percent = (numSteps.numSteps / sumOfAllActivity)*100;
      return(
        <Bar
          percent={percent}
          key={activityData.numSteps}
        />
      )
    });
  };

  const renderLines = () =>{
    return Array(10).fill(null).map((el, i)=>(
      <Line
        left={i * 10}
        key={i}
      />
    ))
  }

  return (
    <div className="graph-wrapper, exerciseGroup">
      <h1>Friends Steps</h1>
      
      <div className="graph">
 
        <BarTextContent />
        <div className="bar-lines-container">
          {renderLines()}
          {renderBars()}
        </div>
        
      </div>

    </div>
  )
};

export default TempUserLookUp