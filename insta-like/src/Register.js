import React from 'react'
import './Register.css'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


function Register() {
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

export default Register