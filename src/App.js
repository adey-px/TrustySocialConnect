import React from 'react';
import './App.css';

import ChatSpace from './components/chatspace/ChatSpace';
import Sidebar from './components/sidebar/LeftSidebar';

function App() {
  return (
    <div className="App">
      <h1>Discord Webclone</h1>
      
      <Sidebar />
      
      <ChatSpace />
    </div>
  );
}

export default App;
