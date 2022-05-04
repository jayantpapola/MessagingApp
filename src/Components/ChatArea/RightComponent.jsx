import React, { useState } from 'react'
import './rightComponent.css'

const RightComponent = ({name, avatar}) => {

  const [inputMessage, setInputMessage] = useState([''])

  let MessageStore = [
                        {msg:"This is my First Message",time:"1:30 p.m"},
                        {msg:"This is my Second Message",time:"1:30 p.m"},
                        {msg:"This is my Third Message",time:"1:30 p.m"},
                        {msg:"This is my Fourth Message",time:"1:30 p.m"},
                        {msg:"Bhai tu ye kya kar rha hai, Sab DoglaPan Hai Yee....",time:"1:30 p.m"},
                        {msg:"Bhai tu ye kya kar rha hai, Sab DoglaPan Hai Yee....",time:"1:30 p.m"}
                      ]

  const sendMessage = () =>{
    setInputMessage('')
  }


  return (
    <div className='rightComponent'>

        <div className="chats">
          <div className="rightComponent__header">
              <div className="rightComponent_avatar">
                <img src={avatar} alt="A" />
              </div>
              <div className="rightComponent_ChatName">
                  <h2>{name}</h2>
              </div>
          </div>

            {/* MESSAGES */}
            <div className="messages">
              {MessageStore.map((e)=>{
              return(
              <div className="message">
                <p>{e.msg}</p>
                <span>{e.time}</span>
              </div>)
              } )}
              {MessageStore.map((e)=>{
              return(
              <div className="message incoming">
                <p>{e.msg}</p>
                <span>{e.time}</span>
              </div>)
              } )}
              
            </div>




          <div className="rightComponent__TextArea">
            <div className="rightComponent__TextBar">
              <input type="text" placeholder='Text...' value={inputMessage}
              onChange={(e)=> setInputMessage(e.target.value)}/>
            </div>
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>

    </div>
  )
}

export default RightComponent