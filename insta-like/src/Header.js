import React from 'react'
import logo from './Img_back/logoInstashot.png'
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    return (
        <div className='header'>
            <div className='HeaderGroup1'>
                <div className='hamburgerMenuButton'>
                    <MenuIcon className='hamburgerComponent'/>
                </div>
                <div className='logo'>
                    <img src={logo} />
                </div>
            </div>
            <div className='HeaderGroup2'>

            </div>
            <div className='HeaderGroup3'>

            </div>
        </div>
    )
}

export default Header