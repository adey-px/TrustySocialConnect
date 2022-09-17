import React from 'react';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CallIcon from "@mui/icons-material/Call";
import { Avatar } from '@mui/material';
import MicIcon from "@mui/icons-material/Mic";
import HeadsetIcon from "@mui/icons-material/Headset";
import SettingsIcon from "@mui/icons-material/Settings";

import SideChannel from './SideChannel';
import './LeftSidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Welcome Channel</h3>
        <ExpandMoreIcon />
      </div>

      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
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

      <div className="sidebar__Voice">
        <SignalCellularAltIcon 
          className='sidebar__voiceSignal'
          fontSize='large'
        />

        <div className="sidebar__voiceMsg">
          <h3> Voice Connected</h3>
          <p>Stream</p>
        </div>

        <div className="sidebar__voiceIcons">
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>

      <div className="sidebar__Profile">
        <Avatar src='' />
        <div className="sidebar__profileInfo">
          <h3>User Name</h3>
          <p>User ID</p>
        </div>

        <div className="sidebar__profileIcons">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>

    </div>
  );
}

export default Sidebar;