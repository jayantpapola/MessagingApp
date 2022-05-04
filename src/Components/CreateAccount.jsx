import React, { useState } from 'react'
import './CreateAccount.css'
import SignUpForm from './SignUpForm'

const CreateAccount = () => {

    var [cube , setCube] = useState('')
    var [float , setFloat] = useState('float')
    var [start , setStart] = useState('SignIn')
    var [expand , setExpand] = useState('')
    var [display , setDisplay] = useState('0')
    var [pointer , setPointer] = useState('none')

   
    const closeUp = () =>{
        setCube('roll')
        setFloat('')
        setStart('')
        setExpand('expand')
        setDisplay('1')
        setPointer('all')
    }

    
  return (
    <div className='CreateAccount'>
        {/* <img src="../img/JP-Logo.png" alt="" /> */}
        <div className={`cube ${cube}`}>
            <div className={`sides top ${float}`}></div>
            <div className={`sides bottom ${float}`}></div>
            <div className={`sides left ${float}`}></div>
            <div className={`sides right ${float}`}></div>
            <div className={`sides front ${float} ${expand}`} 
            onClick={closeUp}
            ><p>{start}</p>
                <SignUpForm show={display} pointer={pointer}/>
            </div>
            <div className={`sides back ${float}`}></div>
        </div>
        <div className="shadow"></div>
    </div>
  )
}

export default CreateAccount