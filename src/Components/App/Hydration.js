import React from 'react';
import hydrationData from '../../data/hydration';
import waterGlass from '../../assets/water_glass.png';

const Hydration = ({Id, name})=>{
  const hydrationIdFilter = hydrationData.filter(x=>(x.userID === Id));
  const todayHydrationID = hydrationIdFilter.filter(x=>(x.date === "2019/09/22"));
  const hydrationToday = todayHydrationID[0]["numOunces"];
  const goodHydration = parseInt(80-hydrationToday);

  return(
    <div className="componentBox">
      <h1>Hydration H20</h1>
      <article>
        <img src={waterGlass} alt="water" id="waterGlass"/>

      </article>
      <article className="sleepDetails">
        {name} you drank <span className="bold">{hydrationToday}</span> ounces yesterday
        <p>
        You need to drink <span className="bold">{goodHydration}</span> more ounces today to hit your goal
        </p>      
      </article>
    </div>
  )
}

export default Hydration