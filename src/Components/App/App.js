import React from 'react';
import './App.css';
import Friends from './Friends';
// import UserResult from './scripts';
import UserLookUp from './UserLookUp';
import Graph from './Graph';
import TodoApp from './ToDo';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Graph />
        <Friends />
        <UserLookUp />
        <TodoApp/>
      </header>
    </div>
  );
}

export default App;
