import React from 'react';
import activityData from '../../data/activity';
import './Exercise.scss';


const Exercise = ({friends, name, friendNames}) => {
  const friendsList = Object.values({friends})[0]; //should make array
  const limitDateData = activityData.filter(x=>(x.date === "2019/09/22")); //Limits data to 2019/09/22
  const newArrayFiltered = limitDateData.filter((x)=> friendsList.includes(x.userID)); //Limits that date now to friends -WORKING!!!! 8/20/2019

  const specificItems = friendNames.map(y=>(y.map(x=>(x.name))));//pulls the names that match the friend ids
  const filteredName = specificItems.map(x=>(x[0]));
  
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
        {newArrayFiltered.map((steps, x)=>( //used activityLocal but need to change to friends
          <div 
            className="text"
            key={steps.userID}
          >
            {filteredName[x]}
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
        key={{left}}
      />
    );
  }

  const renderBars =() =>{
    const data = newArrayFiltered;

    const sumOfAllActivity = data.reduce((acc, curr)=>{
      return acc + curr.numSteps;
    }, 0);
    return data.map((numSteps)=>{
      const percent = (numSteps.numSteps / sumOfAllActivity)*100;
      return(
        <Bar
          percent={percent}
          key={percent}
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
      <h1>{name}'s Friends Steps</h1>
      
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