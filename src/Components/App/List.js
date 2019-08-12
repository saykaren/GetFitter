// import React, {useState} from 'react';
import React from 'react';
import './App.css';


const numbers = [1,2,3,4,5];
const listItems = numbers.map((number)=>
  <li>
    {number}
  </li>
  );
const List = ()=>{
  return (
    <div>
      {listItems}
    </div>

  );
};

export default List