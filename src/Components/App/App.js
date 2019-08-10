import React from 'react';
import './App.css';
import Friends from './Friends';
// import UserResult from './scripts';
import UserLookUp from './UserLookUp';
import Graph from './Graph';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Graph />
        <Friends />
        <UserLookUp />
      </header>
    </div>
  );
}

export default App;
