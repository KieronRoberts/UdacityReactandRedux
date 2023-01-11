import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "../Pages/Home";
import NewPollPage from "../Pages/NewPoll";
import LeaderboardPage from "../Pages/Leaderboard";
import LoginPage from "../Pages/Login";

function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/Home" element={<HomePage />} />
                <Route path="/NewQuestion" element={<NewPollPage />} />  
                <Route path="/Leaderboard" element={<LeaderboardPage />} />
                <Route path="/" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter