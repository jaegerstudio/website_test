import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

//src
import "./SideBar.scss";

const SideBar = (props) => {
  const navigate = useNavigate();
  const handleChange = (to) => {
    props.onChange(true);
    navigate(to);
  };
  return (
    <div className="sidebar-container">
      <div onClick={() => handleChange("/inbox")}>
        <ChatOutlinedIcon />
      </div>
      <div onClick={() => handleChange("/live-poll")}>
        <PollOutlinedIcon />
      </div>
      <div onClick={() => handleChange("/event-agenda")}>
        <CalendarMonthOutlinedIcon />
      </div>
      <div onClick={() => handleChange("/questions")}>
        <HelpOutlineOutlinedIcon />
      </div>
      <div onClick={() => {handleChange("/participants")}}>
        <PeopleAltOutlinedIcon />
      </div>
    </div>
  );
};

export default SideBar;
