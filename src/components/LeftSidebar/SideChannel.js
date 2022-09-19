import React from 'react';
import { useDispatch } from 'react-redux';
import { setChannelInfo } from '../../features/appSlice'

import './SideChannel.css';

// Side channel component
const SideChannel = ({id, name}) => {

  const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch (
      setChannelInfo({
        channelId: id,
        channelName: name,
    }))}
      className='sideChannel'
    >

      <h4>
        <span className='sideChannel__tag'>
          #
        </span>
          {name}
      </h4>
    </div>
  );
}

export default SideChannel;