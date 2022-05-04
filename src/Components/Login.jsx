import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const userLogin = async (e) =>{
        e.preventDefault()

        const response = await fetch('/login',{
          method:'POST',
          headers:{
            'content-Type':'application/JSON'
          },
          body:JSON.stringify({email:email,password:password})
        })
        const data = await response.json()
        console.log(data);
        if(response.status === 422 || !data)
        {
          window.alert("Invaild Credintials")
        }
        else{
          navigate('/')
          window.alert("User Logged in Successfully")
        }
      }


  return (
    <div className='Login'>
        <form method='POST' className='loginForm'>
            <h1>Login</h1>
            <input type="email" value={email} name='email' 
              onChange={(e)=>setEmail(e.target.value)}
            placeholder='Email'/>
          
            <input type="password" value={password} name='password' 
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='Password'/>
            <button type='submit' onClick={userLogin}>SUBMIT</button>
        </form>
    </div>
  )
}

export default Login