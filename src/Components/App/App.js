import React from 'react';
import './App.css';
import Friends from './Friends';
// import UserResult from './scripts';
import UserLookUp from './UserLookUp';
import Welcome from './Welcome';
import TodoApp from './ToDo';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome />
      </header>
      <section className="mainContent">
        <div className="youOverview">
          <h1>About Me /Status</h1>
          Put in Your profile
          <TodoApp/>
          Improvement Ideas (like you need more sleep if under 8 hours or more exercise)
        </div>

        <div className="exerciseGroup">
          <h1>Exercise</h1>
            <article>
              Steps
            </article>
            <article>
              Flight of stairs 
            </article>
        </div>

        <div className="sleepInfo">
          <h1>Sleep Data</h1>
          <article>
            Your sleep
            You are under/over 8 hours....(calculate)
          </article>
        </div>

        <div className="hydration">
          <h1>Hydration H20</h1>
          <article>
            (bring in picture of water boy)

          </article>
        </div>
        <UserLookUp />
        
        <Friends />

        
      </section>
      <footer className="footer">
     
      </footer>
    </div>
  );
}

export default App;
