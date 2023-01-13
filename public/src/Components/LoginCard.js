import React from 'react';
import { useState } from 'react';
import './LoginCard.css';
//import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ErrorPopup from './ErrorPopup';

const LoginCard = ({Card}) => {
    const [ButtonPopup, setButtonPopup] = useState(false);

    const[enteredText, setEnteredText] = useState("");

    const navigate = useNavigate();

    let VarPassword = "Password"; 
    
    function ToggleButton(){
        if(enteredText == VarPassword
        ) {
            console.log("True");
            navigate("/Home");
        } else {
            console.log("False");
            setButtonPopup(true);
        }
    };

    function UpdateVarPassword(event){
        setEnteredText(event.target.value);
        console.log(enteredText);
    };


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
                <input onChange={UpdateVarPassword} className='Input' type="password" name="password" required></input>
                <br></br>
                        <button className='SubmitButton' onClick={ToggleButton}>
                            Login
                        </button>


                        <ErrorPopup trigger={ButtonPopup} setTrigger={setButtonPopup}>
                            <h3> 
                                Password was entered incorrectly
                            </h3>
                        </ErrorPopup>
            </div>
        </div>
    )
}

export default LoginCard;