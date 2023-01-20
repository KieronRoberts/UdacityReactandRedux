import React from 'react';
import './LogOutCard.css';
/*Defines UserCard for use acrross the application*/


const LogOutCard = ({Card}) => {
    return(
        <div className='LogOutCard'>
            <div className='LogOutCardTitle'>
                <h3>
                    Log Out Page
                </h3>
            </div>
                <h4>
                    Would you like to log out of this
                </h4>
                <h4>
                    Would You Rather Application
                </h4>
                <a href='http://localhost:3000/'>
                    <button className='SubmitButton' type="submit">
                        Log Out
                    </button>
                </a>
        </div>
    )
}

export default LogOutCard;