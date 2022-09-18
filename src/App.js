import React from 'react';
import './App.css';

import LeftSidebar from "./components/LeftSidebar/LeftSidebar";
import ChatSpace from './components/chatspace/ChatSpace';

function App() {
  return (
    <div className="app__Content">

      <LeftSidebar />
      <ChatSpace />

    </div>
  );
}

export default App;
