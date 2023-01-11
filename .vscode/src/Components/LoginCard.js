import React from 'react';
import './LoginCard.css';
/*Defines UserCard for use acrross the application*/


const LoginCard = ({Card}) => {
    return(
        <div className='LoginCard'>
            <div className='LoginCardTitle'>
                <h3>
                Login Page
                </h3>
            </div>
            <div className='LoginForm'>
                <label className='UserName'>Choose a User</label>
                <br></br>
                <select className='UsernameDrop'>
                    <option value='User1'>User 1</option>
                    <option value='User2'>User 2</option>
                </select>
                <br></br>
                <br></br>
                <label className='Password' for='password'>
                    Enter password
                </label>
                <br></br>
                <input className='Input' type="password" name="password" required></input>
                <br></br>
                <a href='http://localhost:3000/Home'>
                    <button className='SubmitButton' type="submit">
                        Login
                    </button>
                </a>
            </div>
        </div>
    )
}

export default LoginCard;