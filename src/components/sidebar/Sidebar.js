import React from 'react';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";

import SideChannel from './SideChannel';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Welcome Channel</h3>
        <ExpandMoreIcon />
      </div>

      <div className="sidebar__channel">
        <div className="sidebar__channelHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>New Channel</h4>
          </div>

          <AddIcon className="sidebar__addChannel" />
        </div>

        <div className="sidebar__channelsList">
          <SideChannel />
          <SideChannel />
          <SideChannel />
          <SideChannel />
        </div>
      </div>
      
    </div>
  );
}

export default Sidebar;