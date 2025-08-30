import React, { useContext, useState } from 'react';
import '../Sidebar/Sidebar.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { FiPlus } from "react-icons/fi";
import { MdOutlineMessage } from "react-icons/md";
import { dataContext } from '../../context/UserContext';

function Sidebar() {
    const [extend, setExtend] =useState(false)
    const {sent,prevPrompt,newChat}=useContext(dataContext);
    async function loadPrevPrompt(prompt){
      sent(prompt)
    }
    
  return (
    <div className='sidebar'>
    <GiHamburgerMenu id='ham' onClick={()=>{setExtend(prev=>!prev)}}/>
    <div className='newchat' onClick={()=>{
      newChat()
    }}><FiPlus/> {extend?<p>New Chat</p>:null}</div>
    {prevPrompt.map((item, index)=>{
      return (
      <div key={index} className='recent' onClick={()=>{
        loadPrevPrompt(item)
      }}>
    <MdOutlineMessage/> {extend?<p>{item.slice(0,10)+'...'}</p>:null}
    </div>)})}

    </div>
  )
}

export default Sidebar