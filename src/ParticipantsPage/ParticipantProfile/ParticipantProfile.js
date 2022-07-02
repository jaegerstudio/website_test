import React, { useState } from "react";
import FooterPage from "../../FooterPage/FooterPage";
import HeaderPage from "../../HeaderPage";
import SideBar from "../../SideBar";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonPinCircleOutlinedIcon from "@mui/icons-material/PersonPinCircleOutlined";
import { Button } from "@mui/material";

//src
import "./ParticipantProfile.scss";
import { useNavigate } from "react-router-dom";

export default function ParticipantProfile() {
  const navigate = useNavigate();
  const [showMenu, SetShowMenu] = useState(true);
  const handleChange = (e) => {
    SetShowMenu(e);
  };

  return (
    <>
      <HeaderPage />
      <div className="participant-profile-main">
        <img
          className="participant-profile-page-img"
          height="100%"
          width="70%"
          src="./assets/video.png"
          alt="logo"
        />
        <div className="participant-profile-inside">
          <div className="participants-title-main">
            <div className="participants-title">
              <ArrowBackOutlinedIcon
                onClick={() => navigate("/participants")}
              />
            </div>
            <div>
              <MoreVertOutlinedIcon onClick={() => console.log("side")} />
            </div>
          </div>
          <div className="participant-profile-detail">
            <img
              className="participants-profile-img"
              height="156px"
              width="156px"
              src="./assets/dp.png"
              alt="dp"
            />
            <p className="user-name">Lydia Vaccaro</p>
            <p className="user-email">lydiavaccaro@example.com</p>
            <br />
            <br />
            <p className="user-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra.
            </p>
          </div>
          <div className="participant-address-detail">
            <div>
              <BusinessCenterOutlinedIcon />
              <p>Senior Sound Engineer</p>
            </div>
            <br />
            <div>
              <HomeOutlinedIcon />
              <p>Gallus Media AG</p>
            </div>
            <br />
            <div>
              <PersonPinCircleOutlinedIcon />
              <p>7304 Clarissa Shore Suite 831</p>
            </div>
          </div>
          <div className="participant-option">
            <Button
              variant="outlined"
              onClick={() => navigate("/participant-chat")}
            >
              Start Chat
            </Button>
            <Button variant="outlined">Block</Button>
          </div>
        </div>
        <SideBar onChange={handleChange} />
      </div>
      <FooterPage />
    </>
  );
}
