import React from 'react';
import './LeaderCard.css';
//import '../../public/JohnDoe.jpg'
/*Defines UserCard for use acrross the application*/


const LeaderCard = ({Card}) => {
    return(
        <div className='LeaderCard'>
            <div className='LeaderCardTitle'>
                <img className='UserImage' src="./public/JohnDoe.jpg" alt=""/>
                <h3 className='UserName'>
                    &#127942; Kieron
                </h3>
                <h4 className='AnsweredQuestions'>
                    Answered Questions 10
                </h4>
                <h4 className='CreatedQuestions'>
                    Created Questions 5
                </h4>
                <h4 className='TotalScore'>
                    Total Score 15
                </h4>
            </div>
        </div>       
    )
}

export default LeaderCard;