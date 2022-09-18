import React from 'react';
import NotificationsIcon from "@mui/icons-material/Notifications";
import EditLocationRoundedIcon from "@mui/icons-material/EditLocationRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import HelpIcon from "@mui/icons-material/Help";

import './MainHeader.css';

const MainHeader = () => {
  return (
    <div className="chat__Header">
      <div className="header__Left">
        <h3>
            <span className="header__tag">
                #
            </span>
            Test Channel
        </h3>
      </div>

      <div className="header__Right">
        <NotificationsIcon />
        <EditLocationRoundedIcon />
        <PeopleAltRoundedIcon />

        <div className="header__Search">
            <input placeholder='Search for any topic' />
            <SearchIcon />
        </div>

        <SendIcon />
        <HelpIcon />

      </div>

    </div>
  );
}

export default MainHeader;