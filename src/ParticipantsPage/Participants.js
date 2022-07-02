import React, { useState } from "react";
import FooterPage from "../FooterPage";
import HeaderPage from "../HeaderPage";
import SideBar from "../SideBar";
import Paper from "@mui/material/Paper";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import TextField from "@mui/material/TextField";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import { useNavigate } from "react-router-dom";
import Advertisement from "../Addvertisement/Advertisement";

//src
import "./Participants.scss";

export default function Participants() {
  const navigate = useNavigate();
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [showMenu, SetShowMenu] = useState(true);
  const handleChange = (e) => {
    SetShowMenu(e);
  };
  return (
    <>
      <HeaderPage />
      <div className="participants-main">
        <img
          className="participants-page-img"
          height="100%"
          width={showMenu ? "70%" : "95%"}
          src="./assets/video.png"
          alt="logo"
        />
        {showMenu && (
          <div className="participants-inside">
            <div className="participants-cards-main">
              <div className="participants-title-main">
                <div className="participants-title">
                  <p>Participants</p>
                  <CancelOutlinedIcon onClick={() => SetShowMenu(false)} />
                </div>
              </div>
              <div className="participants-search">
                <TextField
                  placeholder="Search Participant"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="end">
                        <SearchOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                />
              </div>
              {arr.map((r) => (
                <Paper elevation={0}>
                  <div className="participants-card">
                    <div
                      onClick={() => navigate("/participant-profile")}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="participants-dp">
                        <img
                          src="./assets/dp.png"
                          alt="dp"
                          title="Ruby Rhod"
                          width="48px"
                          height="48px"
                        />
                      </div>
                      <div className="participants-detail">
                        <p className="user-name">Lydia Vaccaro</p>
                        <p className="user-email">lydiavaccaro@example.com</p>
                      </div>
                    </div>
                    <div>
                      <ChatOutlinedIcon />
                    </div>
                  </div>
                </Paper>
              ))}
            </div>
            <Advertisement />
          </div>
        )}
        <SideBar onChange={handleChange} />
      </div>
      <FooterPage />
    </>
  );
}
