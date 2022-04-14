import React from 'react'
import logo from './Img_back/logoInstashot2.png'
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import { height } from '@mui/system';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
    return (
        <div className='header'>
            <div className='HeaderGroup1'>
                <div className='hamburgerMenuButton'>
                    <MenuIcon sx={{ fontSize: "40px" }} className='hamburgerComponent' />
                </div>
                <div className='logo'>
                    <img src={logo} />
                </div>
            </div>
            <div className='HeaderGroup2'>
                <TextField
                    required
                    id="filled-required"
                    label=""
                    defaultValue="Hello World"
                    variant="filled"
                    //m={0}
                    //style={{height:40}}
                    inputProps={{
                        style:{
                            height:5, 
                            width:500, 
                            fontSize:24, 
                            paddingTop:16, 
                            paddingBottom:16}}}
                    InputLabelProps={{style:{height:0, fontSize:0}}}
                />
                <Button 
                    variant="contained"
                    style={{padding:6, marginLeft:5}}
                >
                    <SearchIcon />
                </Button>
            </div>
            <div className='HeaderGroup3'>
                <div className='profileDiv'>
                    <AccountCircleIcon sx={{ fontSize: "40px" }} />
                </div>
                <div className='settingsDiv'>
                    <SettingsIcon sx={{ fontSize: "40px" }} />
                </div>
                <div className='logoutDiv'>
                    <LogoutIcon sx={{ fontSize: "40px" }} />
                </div>
            </div>
        </div>
    )
}

export default Header