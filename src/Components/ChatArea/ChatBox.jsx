import React from 'react'
import './ChatBox.css'


const ChatBox = ({avatar,name, lastMessage}) => {
  return (
    <div className='ChatBox'>
      <div className="ChatBox__Hover">
          <i class="fa-solid fa-gear"></i>
        {/* <div className="ChatBox__settings">
          <i class="fa-solid fa-phone"></i>
          <i class="fa-solid fa-message"></i>
          <i class="fa-solid fa-bell-slash"></i>
        </div> */}
      </div>
        <div className="ChatBox__avtar">
            <img src={avatar} alt="A" />
        </div>
        <div className="ChatBox__Content">
            <h3>{name}</h3>
            <p>{lastMessage}</p>
        </div>

    </div>
  )
}

export default ChatBox