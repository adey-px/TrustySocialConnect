import React from 'react';

import './SideChannel.css';

const SideChannel = ({id, channel}) => {
  return (
    <div className='sideChannel'>
       <h4>
          <span className='sideChannel__tag'>#</span>
          YouTube
       </h4>
    </div>
  );
}

export default SideChannel;