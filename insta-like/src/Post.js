import React from 'react'
import './Post.css'
import coeur from './Img_back/like-rose.png'
import comment from './Img_back/comment.png'
import image from './Img_back/stock_post.jpg'
import profile from './Img_back/stock_profile.jpg'

function Post() {
    return (
        <div className='page'>
            <div className='post'>
                <div className='profile'>
                    <div className='profile-pic-div'>
                        <img className='profile-pic' src={profile}></img>
                    </div>
                    <div className='profile-name'>FirstName Lastname</div>
                </div>
                <div className='reactions'>
                    <div className='coeur'>
                        <img className='coeur-img' src={coeur}></img>
                    </div>
                    <div className='like-number'>125</div>
                    <div className='coeur'>
                        <img className='coeur-img' src={comment}></img>
                    </div>
                    <div className='like-number'>125</div>
                </div>
                <img className='post_image' src={image}></img>
            </div>
        </div>
    )
}

export default Post