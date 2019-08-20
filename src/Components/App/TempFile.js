// import React, {useState} from 'react';
import './App.css';
import React from 'react';
import activityData from '../../data/activity';
// import userData from '../../data/users';


///using User 6 who has friends 11 48 15
const firstFriendID = activityData[10].userID;
const firstFriendSteps = activityData[10].numSteps;
const secondFriendID = activityData[47].userID;
const secondFriendSteps = activityData[47].numSteps;
const thirdFriendID = activityData[14].userID;
const thirdFriendSteps = activityData[14].numSteps;


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

// const FriendList = ({Id, friends}) =>{
//   const idNum = {Id};
//   const valueId = Object.values(idNum)[0]; //number format of ID
//   const IdArray = userData.filter(x=>(x.id === valueId));
//   const nameData = IdArray[valueId].name;

//   return(
//     <div
//       className="todo"
//     >
//       {nameData} : ID {friends}
//     </div>
//   );
// }

const TempUserLookUp = ({friends, name}) => {

  // console.log({Id});
  console.log({friends});
  const friendsArray = friends.map(x=>x); //working into an array 
  console.log(` friends Array is ${friendsArray}`);

  const todayArray = activityData.filter(x=>(x.date === "2019/09/21")) //array of today activity 2019/09/21
  const testFriendsTodayArray = todayArray.filter(x=>(x.userID === 2)); //filter by a particular id number will do based upon friend list
  const newResults = testFriendsTodayArray[0].numSteps; //pulls from particular one the steps for that day

  // console.log({testingactivityDataID});
  console.log({todayArray});
  console.log({testFriendsTodayArray});
  console.log({newResults});


  ///8-19-2019 15:48 below is not working...need to figure out how to filter the data down to friends
  const dataId = activityData.filter(x=>(x.userID === 16));
  console.log({dataId});

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
    <div className="componentBox">
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