import React from 'react';
import { useState } from 'react';
import './LoginCard.css';
import { useNavigate } from 'react-router-dom';
import ErrorPopup from './ErrorPopup';

//import { connect } from 'react-redux';
//import { setAuthedUser } from '../actions/authedUser';

//Testing Login ->>    

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

/*
    function handleAuthedUser(id) {
        const { from } = this.props.location.state || {
            from: { pathname: '/Home' }
        };
        this.props.dispatch(setAuthedUser(id));
        this.props.history.push(from);
    };

    render() {
    const { userIds, users } = this.props;
*/

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
                    <option id='sarahedo' value='sarahedo'>Sarah Edo</option>
                    <option id='tylermcginnis' value='tylermcginnis'>Tyler McGinnis</option>
                    <option id='johndoe' value='johndoe'>John Doe</option>
                </select>
                <br></br>
                <br></br>
                <label className='Password' for='password'>
                    Enter password
                </label>
                <br></br>
                <input onChange={UpdateVarPassword} className="Input" type="password" name="password" required></input>
                <br></br>
                {/*{userIds.map(user => (*/}
                    <button className='SubmitButton' onClick={ToggleButton}>
                        {/*() => this.handleAuthedUser(user)}*/}
                        Login
                    </button>
                    {/* ))} */}
                    <ErrorPopup trigger={ButtonPopup} setTrigger={setButtonPopup}>
                        <h3> 
                            Password was entered incorrectly
                        </h3>
                    </ErrorPopup>
            </div>
        </div>
    )
}

/*
function mapStateToProps({ users }) {
    return {
      userIds: Object.keys(users),
      users
    };
}
*/
  
export default LoginCard;

/*
connect(mapStateToProps)(LoginCard);
*/