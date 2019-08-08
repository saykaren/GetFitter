import React from 'react';
import './App.css';
import Friends from './Friends';
import UserResult from './scripts';
import UserLookUp from './UserLookUp';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Friends />
        <UserResult />
        <UserLookUp />
      </header>

    </div>
  );
}

export default App;
