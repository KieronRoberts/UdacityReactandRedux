import React from 'react';
import './NewQuestionCard.css';
/*Defines UserCard for use acrross the application*/

const NewQuestionCard = ({Card}) => {
    return(
        <div className='NewQuestionCard'>
            <div className='NewQuestionCardTitle'>
                <h3>
                    Kieron asks would you rather:
                </h3>
            </div>
            
            <div className='NewQuestionCardQuestion'>
                <form>
                    <input type="text" id="Wouldyourather" name="Wouldyourather"></input>
                    <br/>
                    OR
                    <br/>
                    <input type="text" id="Wouldyourather" name="Wouldyourather"></input>
                    <br></br>
                    <input className='SubmitButton' type="submit" value="Submit">
                    </input>
                </form>
            </div>
        </div>
    )
}

export default NewQuestionCard;