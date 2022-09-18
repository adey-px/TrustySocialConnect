import React from 'react';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GifIcon from "@mui/icons-material/Gif";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

import MainHeader from './MainHeader';
import UserMessage from './UserMessage';
import './ChatSpace.css';

const ChatSpace = () => {
  return (
    <div className="chat__Space">
      <MainHeader />

      <div className="chat__Messages">
        <UserMessage />
        <UserMessage />
        <UserMessage />
      </div>

      <div className="chat__inputBar">
        <AddCircleIcon fontSize="large" />
        <form>
          <input placeholder={`Type new message here`} />
          <button type="submit" className="chat__inputBtn">
            Send Message
          </button>
        </form>

        <div className="chat__inputIcons">
          <CardGiftcardIcon fontSize="large" />
          <GifIcon fontSize="large" />
          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default ChatSpace;