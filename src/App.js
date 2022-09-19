import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import LeftSidebar from './components/leftsidebar/LeftSidebar';
import ChatSpace from './components/chatspace/ChatSpace';
import UserLogin from './components/userlogin/UserLogin';
import { selectUser } from './features/userSlice';
import './App.css';

function App() {

  // Create auth with selectUsercfrom userSlice
  const authUser = useSelector(selectUser);

  //
  useEffect(() => {

  }, [])

  
  return (
    <div className="app__Content">
      
      {authUser ? (
        <>
          <LeftSidebar />
          <ChatSpace />
        </>
      ) : (
        <UserLogin />
      )}

    </div>
  );
}

export default App;
