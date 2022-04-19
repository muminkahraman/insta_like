import React from 'react'
import './Register.css'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import OutlinedInput from '@mui/material/OutlinedInput';
import Paper from '@mui/material/Paper';

/*function Register() {
  return (
    <div className='Register'>
         <div className='registerTitle'>Register</div>
         <div className='rectangle1'>
         <div classsName='pic1'>
                        <EmailOutlinedIcon/>
                    </div>
            <div className='mail'> Email </div>
         </div>
         <div className='rectangle2'>
            <div className='user'> Username </div>
         </div>
         <div className='rectangle3'>
            <div className='telephone'> Phone number </div>
         </div>
         <div className='rectangle4'>
            <div className='pass'> Password </div>
         </div>
         <div className='rectangle5'>
            <div className='pass2'> Confirm password </div>
         </div>
    </div>

  )
}
*/


//export default Register

export default function InputWithIcon() {
   return (
     <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <div className = 'email'>
     
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <EmailOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-email" label="Email" variant="standard" />
        <div className = 'paper2'>
       <Paper variant="standard" /> 
       </div>
      </Box> 
       </div>

       <div className = 'user'>
       <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-user" label="Username" variant="standard" />
        <div className = 'paper3'>
       <Paper variant="standard" /> 
       </div>
      </Box>
       </div>

       <div className = 'telephone'>
       <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <PhoneOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-phone" label="Phone number" variant="standard" />
        <div className = 'paper4'>
       <Paper variant="standard" /> 
       </div>
      </Box>
       </div>

       <div className = 'pass'>
       <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <LockOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-password" label="Password" variant="standard" />
        <div className = 'paper5'>
       <Paper variant="standard" /> 
       </div>
      </Box>
       </div>

       <div className = 'pass2'>
       <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <LockOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-password-c" label="Confirm password" variant="standard" />
        <div className = 'paper6'>
       <Paper variant="standard" /> 
       </div>
      </Box>
       </div>

       <div className = 'paper1'>
       <Paper variant="outlined" /> 
       </div>
     </Box>
   );
 }