import React, {useState} from 'react';
// import userData from '../../data/users';


class UserRepository{
  constructor(id, name, address, email, strideLength, dailyStepGoal, friends){
    this.id = id;
    this.name = name;
    this.address= address;
    this.email = email;
    this.strideLength = strideLength;
    this.dailyStepGoal = dailyStepGoal;
    this.friends = friends;
  }
}

const Me = new UserRepository(51, "Karen", "address", "email", 5, 1000, []);

class Activity{
  constructor(userId, data, numSteps, minutesActive, flightOfStairs){
    this.userId = userId;
    this.data = data;
    this.numSteps = numSteps;
    this.minutesActive = minutesActive;
    this.flightOfStairs = flightOfStairs;
  }
}

// const contact = userData[0].name;

const UserResult = () => {
  return (
    <div>
      <p>
        
      </p>
 
      <div>
    heeeeellllooo - I will put new friend setup here I think .....
      </div>
   </div>
  );
};



export default UserResult
