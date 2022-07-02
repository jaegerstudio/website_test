import React, { useState } from "react";
import FooterPage from "../FooterPage/FooterPage";
import HeaderPage from "../HeaderPage";
import SideBar from "../SideBar/SideBar";
import Paper from "@mui/material/Paper";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

//src
import "./EventAgenda.scss";
export default function EventAgenda() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [showMenu, SetShowMenu] = useState(true)
  const handleChange =(e) => {
    SetShowMenu(e)
  }
  return (
    <>
      <HeaderPage />
      <div className="event-agenda-main">
        <img
          className="event-agenda-page-img"
          height="100%"
          width={showMenu ? "70%" : "95%"}
          src="./assets/video.png"
          alt="logo"
        />
        {showMenu && 
        <div className="event-agenda-inside">
          <div className="event-agenda-cards-main">
            <div className="event-agenda-title-main">
              <div className="event-agenda-title">
                <p>Event Agenda</p>
                <CancelOutlinedIcon onClick={()=>SetShowMenu(false)} />
              </div>
            </div>
            {arr.map((r) => (
              <Paper elevation={0} style={{ backgroundColor: "#F3F4F8" }}>
                <div className="event-agenda-card">
                  <div>12:00 AM</div>
                  <div className="event-agenda-detail">
                    <p style={{ fontWeight: "bold" }}>
                      Importance of Marketing
                    </p>
                    <p>
                      Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per ...
                    </p>
                    <img
                      src="https://bucketeer-93d34dbe-fe93-44d9-8d72-c2ba8bb0b1dd.s3.amazonaws.com/bucketeer-93d34dbe-fe93-44d9-8d72-c2ba8bb0b1dd/media/private/original_images/ruby-rhod.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAX7CRDYXPWZAQGVIN%2F20220625%2Feu-west-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20220625T152139Z&amp;X-Amz-Expires=3600&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=bda100cadd33cbc39437bcfa9b72b89cd0fc27f43e81cb1d1549b3b62a95b75d"
                      alt="speaker"
                      title="Ruby Rhod"
                      width="36px"
                      height="36px"
                    ></img>
                  </div>
                </div>
              </Paper>
            ))}
          </div>
        </div>
        }
        <SideBar onChange={handleChange} />
      </div>
      <FooterPage />
    </>
  );
}
