import React, { useState } from 'react'
import ChatBox from './ChatBox'
import './leftComponent.css'
import Reels from './Reels'

const LeftComponent = () => {

    const [newChatEmail ,setNewChatEmail] = useState('')
    const [openModal ,setOpenModal] = useState('')
    const [search ,setSearch] = useState('')
    const [dropDown ,setDropDown] = useState('')
    const [heading ,setHeading] = useState({
                                        color:'white'
                                    })


    function searchFunc(){
        if(search === ''){
            setSearch('search')
            setHeading({
                color:'transparent',
                transition:'.2s'
            })
        }else{
            setSearch('')
            setHeading({
                color:'white',
                transition:'.2s'
            })
        }
    }

    function reel_Dropdown(){
        if(dropDown === ''){
            setDropDown('dropdown')
        }else{
            setDropDown('')
        }
        
    }


    const [account_settings, setShowSettings] = useState('')

    const  showSettings = () =>{
        if(account_settings === ''){
            setShowSettings('show')
        }else{
            setShowSettings('')
        }
    }

    const modalFunc = () =>{
        setOpenModal('open')
        setShowSettings('')
    }
    const closeModalFunc = (e) =>{
        e.preventDefault()
        setOpenModal('')
    }

    const addPeople = async (e) =>{
        e.preventDefault()
        const response = await fetch('/people',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email:newChatEmail})
        })
        const data = await response.json()
        console.log(data)
        if(!data){
      console.log("Message not sent")
        }else{
        console.log("New Chat Added Successfully")
        setOpenModal('')
        alert("New Chat Added Successfully")
        }
    }


  return (
    <div className='leftComponent'>

        {/* HEADER */}
        <h1 style={heading}>ChatApp</h1>
        <div className="leftComponent__header">
            
            <div className={`searchBar ${search}`}>
                <input type="text"/>
                <i class="fa-solid fa-magnifying-glass" onClick={searchFunc}></i>
            </div>
            <div className="leftComponent__header__account_settings">
                <i class="fa-solid fa-ellipsis-vertical" onClick={showSettings}></i>
                <div className={`account_settings ${account_settings}`}>
                    <p onClick={modalFunc}>Add New Chat</p>
                    <p>Settings</p>
                    <p>Log Out</p>
                </div>
            </div>
        </div>

        {/* ADD NEW CHAT */}

        <div className={`add__new__chat ${openModal}`}>

                <div className="add__new__chat__modal">
                    <form method='POST'>
                        <h1>Add New Chat</h1>
                        <input type="email" placeholder='Enter Email' value={newChatEmail}
                        onChange={(e)=>setNewChatEmail(e.target.value)}
                        />
                        <div>
                            <button type='submit' onClick={addPeople}>ADD</button>
                            <button id='closeBtn' onClick={closeModalFunc}>close</button>
                        </div>
                        
                    </form>
                </div>

        </div>



        {/* REELS SECTION */}
        <div className={`leftComponent__Reels ${dropDown}`}>
                <Reels
                     avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGcw8FvW1xxUM1FjCa9eRR2mnaXUBe7mAqreb5zal386CuIJ9T2_7mVZNsj1WeavWkJDA&usqp=CAU'}                
                />

                <Reels
                avatar={'https://cdn0.iconfinder.com/data/icons/avengers-end-game-1/256/captain_marvel-512.png'}
                />

                <Reels
                     avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWo63WMF91ZvMqbh32lNtvQDmDvA8gUDSdZCZ9GXuVbVDCRJo1fcJd-mdD5-3_V5X6wV0&usqp=CAU'}                
                />

                <Reels
                      avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC9cb93SNBvT4dPwJMo9JOh286aWF0YaM6xQ&usqp=CAU'}
                />

                <Reels
                    avatar={'https://cdn0.iconfinder.com/data/icons/avengers-end-game-1/256/thor-512.png'}
                />

                <Reels
                      avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA5tl9PHGiGCmQ9_PUUvioJB2crx16lnrC_Bfq5wTPuY7tx5n7-Qzk1BGRP52qGcNxHUA&usqp=CAU'}
                />
                <Reels
                     avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGcw8FvW1xxUM1FjCa9eRR2mnaXUBe7mAqreb5zal386CuIJ9T2_7mVZNsj1WeavWkJDA&usqp=CAU'}                
                />

                <Reels
                avatar={'https://cdn0.iconfinder.com/data/icons/avengers-end-game-1/256/captain_marvel-512.png'}
                />

                <Reels
                     avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWo63WMF91ZvMqbh32lNtvQDmDvA8gUDSdZCZ9GXuVbVDCRJo1fcJd-mdD5-3_V5X6wV0&usqp=CAU'}                
                />

                <Reels
                      avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC9cb93SNBvT4dPwJMo9JOh286aWF0YaM6xQ&usqp=CAU'}
                />

                <Reels
                    avatar={'https://cdn0.iconfinder.com/data/icons/avengers-end-game-1/256/thor-512.png'}
                />

                <Reels
                      avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA5tl9PHGiGCmQ9_PUUvioJB2crx16lnrC_Bfq5wTPuY7tx5n7-Qzk1BGRP52qGcNxHUA&usqp=CAU'}
                />

        </div>
        <div className='leftComponent__Reels__btn' onClick={reel_Dropdown}>
            <p><i class="fa-solid fa-video"></i></p>
            {/* <p><i class="fa-solid fa-caret-down"></i></p> */}
        </div>


        {/* CHAT-BOX SECTION */}
        <div className="people">
            <ChatBox
             avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGcw8FvW1xxUM1FjCa9eRR2mnaXUBe7mAqreb5zal386CuIJ9T2_7mVZNsj1WeavWkJDA&usqp=CAU'}
             name={'Jayant'} 
             lastMessage={'Hello There.....'}
             />

            <ChatBox
             avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWo63WMF91ZvMqbh32lNtvQDmDvA8gUDSdZCZ9GXuVbVDCRJo1fcJd-mdD5-3_V5X6wV0&usqp=CAU'}
             name={'Yogesh'} 
             lastMessage={'Bhai ye kaise solve hoga.....'}
             />

            <ChatBox
             avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA5tl9PHGiGCmQ9_PUUvioJB2crx16lnrC_Bfq5wTPuY7tx5n7-Qzk1BGRP52qGcNxHUA&usqp=CAU'}
             name={'Mehul'} 
             lastMessage={'Multiverse of Madness.....'}
             />

            <ChatBox
             avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC9cb93SNBvT4dPwJMo9JOh286aWF0YaM6xQ&usqp=CAU'}
             name={'Shivam'} 
             lastMessage={'Burger King.....'}
             />

            <ChatBox
             avatar={'https://cdn0.iconfinder.com/data/icons/avengers-end-game-1/256/thor-512.png'}
             name={'Prince'} 
             lastMessage={'Leg Press.....'}
             />

            <ChatBox
             avatar={'https://cdn0.iconfinder.com/data/icons/avengers-end-game-1/256/captain_marvel-512.png'}
             name={'Gautam'} 
             lastMessage={'Data analysis.....'}
             />
            <ChatBox
             avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC9cb93SNBvT4dPwJMo9JOh286aWF0YaM6xQ&usqp=CAU'}
             name={'Shivam'} 
             lastMessage={'Burger King.....'}
             />

            <ChatBox
             avatar={'https://cdn0.iconfinder.com/data/icons/avengers-end-game-1/256/thor-512.png'}
             name={'Prince'} 
             lastMessage={'Leg Press.....'}
             />

            <ChatBox
             avatar={'https://cdn0.iconfinder.com/data/icons/avengers-end-game-1/256/captain_marvel-512.png'}
             name={'Gautam'} 
             lastMessage={'Data analysis.....'}
             />

             <ChatBox
             avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGcw8FvW1xxUM1FjCa9eRR2mnaXUBe7mAqreb5zal386CuIJ9T2_7mVZNsj1WeavWkJDA&usqp=CAU'}
             name={'Jayant'} 
             lastMessage={'Hello There.....'}
             />

            <ChatBox
             avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWo63WMF91ZvMqbh32lNtvQDmDvA8gUDSdZCZ9GXuVbVDCRJo1fcJd-mdD5-3_V5X6wV0&usqp=CAU'}
             name={'Yogesh'} 
             lastMessage={'Bhai ye kaise solve hoga.....'}
             />

            <ChatBox
             avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA5tl9PHGiGCmQ9_PUUvioJB2crx16lnrC_Bfq5wTPuY7tx5n7-Qzk1BGRP52qGcNxHUA&usqp=CAU'}
             name={'Mehul'} 
             lastMessage={'Multiverse of Madness.....'}
             />
            

        </div>
    </div>
  )
}

export default LeftComponent