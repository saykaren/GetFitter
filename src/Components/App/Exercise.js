// import React, {useState} from 'react';
import './App.css';
import React from 'react';
import activityData from '../../data/activity';
// import userData from '../../data/users';

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
];

const Bar = ({percent}) =>{
  return(
    <div
      className="bar"
      style={{ width: `${percent}%`}}
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
    />
  );
}


const Exercise = () => {

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


export default Exercise