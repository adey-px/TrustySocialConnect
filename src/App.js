import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LeftSidebar from './components/leftsidebar/LeftSidebar';
import ChatSpace from './components/chatspace/ChatSpace';
import UserLogin from './components/userlogin/UserLogin';
import { selectUser } from './features/userSlice';
import { auth } from './Firebase'
import { login, logout } from './features/userSlice';
import './App.css';

function App() {

  // For use in useEffect hook below
  const dispatch = useDispatch();

  // Grab user instance from userSlice
  const user = useSelector(selectUser);

  // To allow user access to site after login
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // Capture user details from login
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
        }))
      } else {
        //
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app__Content">
      {user ? (
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
