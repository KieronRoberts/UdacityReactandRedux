import React from "react";
import UserCard from "../Components/UserCard";

const HomePage =() => {
    return (
        <div>
            <header className="Header">
            Would You Rather Application
                <ul id="NavList" className="NavList">
                    <li className="LogOut"><a href="http://localhost:3000/LogOut">&#128274; LogOut</a></li>
                    <li className="Home"><a href="http://localhost:3000/Home">&#127969; Home</a></li>
                    <li className="NewQuestion"><a href="http://localhost:3000/NewQuestion">&#10068; New Question</a></li>
                    <li className="Leaderboard"><a href="http://localhost:3000/Leaderboard">&#127942; Leaderboard</a></li>
                </ul>
            </header>
            <UserCard>
            </UserCard>
        </div>
    )
};

export default HomePage