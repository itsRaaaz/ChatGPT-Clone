import React, { useContext } from 'react';
import './Chatsection.css';
import DarkMode from '../Darkmode/DarkMode';
import { LuSendHorizontal } from "react-icons/lu";
import { dataContext } from '../../context/UserContext';
import user from '../../assets/user.png';
import bot from '../../assets/bot.png';
function ChatSection() {
  let {sent,input,setInput,showResult,resultData,recentPrompt,loading}=useContext(dataContext)
  return (
    <div className='chatSection'>
        <div className='topsection'>
          {!showResult?<div className='headings'>
            <span>Hello Raaz,</span>
            <span>I'm Your Own Assistant</span>
            <span>What can I help you...?</span>
          </div>:<div className='result'>
              <div className='userbox'>
                <img src={user} alt='User' width="60px"/>
                <p>{recentPrompt}</p>
              </div>
              <div className='botbox'>
                <img src={bot} alt='Bot' width="60px"/>
                {loading?<div className='loader'>
                  <hr/>
                  <hr/>
                  <hr/>
                </div>:<p>{resultData}</p>}
              </div>
          </div>}
        </div>
        <div className='bottomsection'>
          <input onChange={(e)=>setInput(e.target.value)} type='text' placeholder='Enter a prompt' value={input} />
          {input?<button id='sendbtn' onClick={()=>{
            sent(input)
          }}><LuSendHorizontal/></button>:null}
          <DarkMode/>
        </div>
    </div>
  )
}

export default ChatSection