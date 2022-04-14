import React from 'react'
import './ChatList.css'
import stockProfile from './Img_back/stock_profile.jpg'

function ChatList() {
    return (
        <div className='chatList'>
            <div className='contactTitle'>Contacts</div>
            <div className='contacts'>
                <div className='contact'>
                    <div className='pic'>
                        <img src={stockProfile}></img>
                    </div>
                    <div className='name'>FirstName Lastname</div>
                </div>
                <div className='contact'>
                    <div className='pic'>
                        <img src={stockProfile}></img>
                    </div>
                    <div className='name'>FirstName Lastname</div>
                </div>
                <div className='contact'>
                    <div className='pic'>
                        <img src={stockProfile}></img>
                    </div>
                    <div className='name'>FirstName Lastname</div>
                </div>
                <div className='contact'>
                    <div className='pic'>
                        <img src={stockProfile}></img>
                    </div>
                    <div className='name'>FirstName Lastname</div>
                </div>
            </div>
        </div>
    )
}

export default ChatList