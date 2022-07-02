import React, { useState } from "react";
import FooterPage from "../FooterPage/FooterPage";
import HeaderPage from "../HeaderPage";
import PrivateChat from "./PrivateChat/PrivateChat";
import PublicChat from "./PublicChat/PublicChat";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import SideBar from "../SideBar/SideBar";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

//src
import "./InboxPage.scss";

export default function InboxPage() {
  const [selectedTab, setSelectedTab] = useState("pr-chat");
  const [showMenu, SetShowMenu] = useState(true);
  const [value, setValue] = useState('pr-chat');

  const handleChangeTab = (event, newValue) => {
    setSelectedTab(newValue)
    setValue(newValue);
  };
  const handleChange = (e) => {
    SetShowMenu(e);
  };

  return (
    <>
      <HeaderPage />
      <div className="inbox-main">
        <img
          className="inbox-page-img"
          height="100%"
          width={showMenu ? "70%" : "95%"}
          src="./assets/video.png"
          alt="logo"
        />
        {showMenu && (
          <div className="conversation-main">
            <div className="conversation-title-main">
              <div className="conversation-title">
                <p>conversation</p>
                <CancelOutlinedIcon onClick={() => SetShowMenu(false)} />
              </div>
            </div>
            <div className="chat-tabs">
              <Tabs
                value={value}
                onChange={handleChangeTab}
                textColor="secondary"
                indicatorColor="secondary"
              >
                <Tab value="pr-chat" label="Private Chat" />
                <Tab value="pub-chat" label="Public Chat" />
              </Tabs>
            </div>
            <hr />
            {selectedTab === "pr-chat" ? <PrivateChat /> : <PublicChat />}
          </div>
        )}
        <SideBar onChange={handleChange} />
      </div>
      <FooterPage />
    </>
  );
}
