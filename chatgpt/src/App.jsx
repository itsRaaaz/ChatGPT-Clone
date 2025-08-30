import React, { useContext } from 'react';
import Sidebar from './Componenets/Sidebar/Sidebar.jsx';
import ChatSection from './Componenets/chatSection/ChatSection.jsx';
import Separation from './Componenets/separation/Separation.jsx';
import { dataContext } from './context/UserContext.jsx';

function App() {
  let data = useContext(dataContext)
  return (
    <>
      <Sidebar/>
      <Separation/>
      <ChatSection/>
    </>
  )
}

export default App