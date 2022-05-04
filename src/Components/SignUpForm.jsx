import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SignUpForm.css'
// import axios from 'axios'



const SignUpForm = ({show, pointer}) => {

    const navigate = useNavigate()
    const formDisplay = {
        transition:'1s',
        transitionDelay:'.5s',
        opacity:`${show}`,
        pointerEvents:`${pointer}`
    }
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')


    const RegisterationBtn = async (e) =>{
        e.preventDefault()
        if( !name || !email || !phone || !password || !cpassword ){
            alert("Please Enter All The Fields")
            return;
        }
        else if(password !== cpassword){
            alert("Password Doesn't Match")
            setPassword('')
            setCPassword('')
            return;
        }
        const response = await fetch('/register', {
                method:"POST",
                headers:{
                    "content-Type" : "application/JSON"
                },
                body: JSON.stringify({
                    name, email, phone, password 
                })
                })
                const data = await response.json()
                console.log(data);
                if(data.status === 422 || data === {error: 'Plzz fill all the field'}){
                window.alert("Invalid Registeration")
                navigate('/signUp')
                }
                else{
                navigate('/login')
                window.alert("Registeration Successful")
                
                }
            }




  return (
    <div className='SignUpForm' style={formDisplay}>
        <form method='POST'>
            <h1>Create New Account</h1>
            <div className='form'>
                <input type="text" name="name" value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder='Your Name'/>
                <input type="email" name="email" value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder='Your Email'/>
                <input type="number" name="phone" value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                placeholder='Phone Number'/>
                <input type="password" name='password' value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder='Create A New Password'/>
                <input type="password" name='password' value={cpassword}
                onChange={(e)=>setCPassword(e.target.value)}
                placeholder='Confirm Password'/>
                <button type='submit' onClick={RegisterationBtn}>SUBMIT</button>
            </div>
            
            <p id='login'>
                <Link to="/login" className='plzz'>
                    Already have an account? Login
                </Link>
            </p>
        </form>
    </div>
  )
}

export default SignUpForm