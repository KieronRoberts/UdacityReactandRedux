import React from 'react';
import './UserCard.css';
/*Defines UserCard for use acrross the application*/

const UserCard = ({Card}) => {
    return(
        <div className='UserCard'>
            <div className='UserCardTitle'>
                <h3>
                    Kieron asks would you rather:
                </h3>
            </div>
            
            <div className='UserCardQuestion'>
                <form>
                    <div className='RadioButton'>
                        <input type="radio" id="Option1" name="Options" value="Option 1"/>
                        <label for="Option1">Option 1</label>
                    </div>
                    <div className='RadioButton'>
                        <input type="radio" id="Option2" name="Options" value="Option 2"/>
                        <label for="Option2">Option 2</label>
                    </div>
                    <input className='SubmitButton' type="submit" value="Submit">
                    </input>
                </form>
            </div>
        </div>
    )
}

export default UserCard;