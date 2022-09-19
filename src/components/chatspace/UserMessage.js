import React from 'react';
import { Avatar } from "@mui/material";
import './UserMessage.css';

// Message component
const UserMessage = ({ eachMsg, user, timestamp }) => {
  return (
    <div className="user__Message">
      <Avatar src={user.photo} />

      <div className="message__Info">
        <h4>
          {user.displayName}
          <span className="message__timeStamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>

        <p>{eachMsg}</p>
      </div>
    </div>
  );
}

export default UserMessage;