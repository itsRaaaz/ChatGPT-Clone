import React, { useEffect, useState } from 'react'
import { IoSunnyOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";
import './DarkMode.css'
function DarkMode() {
    const [mode, setMode]=useState("darkmode");
    function toggle(){
        mode==="darkmode"?setMode("lightmode"):setMode("darkmode")
    }
    useEffect(()=>{
        document.body.className=mode
    },[mode])
  return (
    <button className='darkmodebtn' onClick={()=>{
        toggle()
    }}>{mode==="lightmode"?<FaRegMoon/>:<IoSunnyOutline/>}</button>
  )
}

export default DarkMode