import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
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
import { selectUser } from '../../features/userSlice';
import db, { auth } from '../../Firebase';

import "./LeftSidebar.css";

const LeftSidebar = () => {

  // Grab user instance from userSlice 
  const user = useSelector(selectUser);

  // Display channels to auth user
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection('channels').onSnapshot((snapshot) => 
      setChannels(snapshot.docs.map((doc) => ({
        id: doc.id,
        channel: doc.data(),
      }))
      )
    );
  }, []);

  // Handler to add new channel - fire up above useEffect
  const addChannel = () => {
    const name = prompt('Enter name to create a new channel');

    if (name) {
      db.collection('channels').add({
        name: name,
      })
    }
  };

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
            <h4>Add New Channel</h4>
          </div>

          <AddIcon onClick={addChannel}
                   className="sidebar__addChannel" 
          />
        </div>

        <div className="sidebar__channelsList">
          {channels.map(({ id, channel }) => (
            <SideChannel 
              key={id}
              id={id}
              name={channel.name}
            />
          ))}
        </div>
      </div>

      <div className="sidebar__Voice">
        <SignalCellularAltIcon
          className="sidebar__voiceSignal"
          fontSize="large"
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
        <Avatar src={user.photo}
                onMouse 
                onClick={() => auth.signOut()}  
        />

        <div className="sidebar__profileInfo">
          <h3>{user.displayName}</h3>
          <p>#{user.uid.substring(0, 9)}</p>
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

export default LeftSidebar;