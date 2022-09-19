import React, { useEffect, useState } from 'react';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GifIcon from "@mui/icons-material/Gif";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import firebase from "firebase/compat/app";

import MainHeader from './MainHeader';
import UserMessage from './UserMessage';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from '../../features/appSlice';
import { selectUser } from '../../features/userSlice';
import db from '../../Firebase';
import "./ChatSpace.css";

const ChatSpace = () => {

  // Get details for channel display
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);

  // Capture input in message bar to chatSpace 
  const [input, setInput] = useState('');
  const[messages, setMessages] = useState([]);

  // 
  useEffect(() => {
    if (channelId) {
      db.collection('channels')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => setMessages(
         snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [channelId]);


  // 
  const sendHandler = (e) => {
    e.preventDefault();

    db.collection('channels').doc(
      channelId).collection('messages').add(
        {
          eachMsg: input,
          user: user,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

    setInput('');
  };


  return (
    <div className="chat__Space">
      <MainHeader channelName={channelName} />

      <div className="chat__Messages">
        {messages.map((eachMsg) => (
          <UserMessage
            eachMsg={eachMsg.eachMsg}
            user={eachMsg.user}
            timestamp={eachMsg.timestamp}
          />
        ))}
      </div>

      <div className="chat__inputBar">
        <AddCircleIcon fontSize="large" />
        <form>
          <input
            value={input}
            disabled={!channelId}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Add or select a #Channel above, type here and press "Enter" to send.`}
          />

          <button
            type="submit"
            disabled={!channelId}
            onClick={sendHandler}
            className="chat__inputBtn"
          >
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