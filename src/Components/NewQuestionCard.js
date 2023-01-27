import React from 'react';
import './NewQuestionCard.css';
/*Defines UserCard for use acrross the application*/

const NewQuestionCard = ({Card}) => {
    return(
        <div className='NewQuestionCard'>
            <div className='NewQuestionCardTitle'>
                <h3>
                    You ask would you rather:
                </h3>
            </div>
            
            <div className='NewQuestionCardQuestion'>
                <form>
                    <input className='Input' type="text" id="Wouldyourather" name="Wouldyourather"></input>
                    <br/>
                    OR
                    <br/>
                    <input className='Input' type="text" id="Wouldyourather" name="Wouldyourather"></input>
                    <br></br>
                    <button className='SubmitButton' type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default NewQuestionCard;