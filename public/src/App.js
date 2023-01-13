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

      <AppRouter>
      </AppRouter>
    </div>
  );
}

export default App;
