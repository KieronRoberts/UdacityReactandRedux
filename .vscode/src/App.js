import React from "react";
import { Helmet } from "react-helmet";

import AppRouter from "./Components/AppRouter";
import './App.css';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title> Would You Rather Application</title>
        <meta name="Would You Rather Application" content="Application" />
      </Helmet>
      <header className="Header">
        Would You Rather Application
        <ul id="NavList" className="NavList">
          <li className="Login"><a href="http://localhost:3000/">&#128275; Login</a></li>
          <li className="Home"><a href="http://localhost:3000/Home">&#127969; Home</a></li>
          <li className="NewQuestion"><a href="http://localhost:3000/NewQuestion">&#10068; New Question</a></li>
          <li className="Leaderboard"><a href="http://localhost:3000/Leaderboard">&#127942; Leaderboard</a></li>
        </ul>
      </header>
      <body className="Body">
        <AppRouter />
      </body>
    </div>
  );
}

export default App;
