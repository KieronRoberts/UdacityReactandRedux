import React from "react";
import {Route, Routes } from "react-router-dom";

import HomePage from "../Pages/Home";
import NewPollPage from "../Pages/NewPoll";
import LeaderboardPage from "../Pages/Leaderboard";
import LogOutPage from "../Pages/Logout";
import LoginPage from "../Pages/Login";
import ErrorPage from "../Pages/Error";

function AppRouter(){
    return(
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/Home" element={<HomePage />} />
                <Route path="/NewQuestion" element={<NewPollPage />} />  
                <Route path="/Leaderboard" element={<LeaderboardPage />} />
                <Route path="/LogOut" element={<LogOutPage />} />

                <Route path="*" element={<ErrorPage/>} />
            </Routes>
    )
}

export default AppRouter