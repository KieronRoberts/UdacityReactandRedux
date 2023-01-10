import React from "react";

import AppRouter from "./Components/AppRouter";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="Header">
        Would You Rather Application
        <ul id="NavList" className="NavList">
          <li><a href="http://localhost:3000/Home">&#127969; Home</a></li>
          <li><a href="http://localhost:3000/NewQuestion">&#10068; New Question</a></li>
          <li><a href="http://localhost:3000/Leaderboard">&#127942; Leaderboard</a></li>
        </ul>
      </header>
      <body className="Body">
        <AppRouter />
      </body>
    </div>
  );
}

export default App;
