import React from 'react';
import { Avatar } from "@mui/material";

import './UserMessage.css';

const UserMessage = () => {
  return (
    <div className='user__Message'>
        <Avatar />

        <div className="message__Info">
            <h4>adeyking
                <span className="message__timeStamp">
                    Timestamp space
                </span>
            </h4>

            <p>This is a sample message</p>
        </div>
    </div>
  );
}

export default UserMessage