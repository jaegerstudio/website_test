import React,{useState} from "react";
import FooterPage from "../../FooterPage/FooterPage";
import HeaderPage from "../../HeaderPage";
import SideBar from "../../SideBar";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { useNavigate } from "react-router-dom";

//src
import "./ParticipantChat.scss";

export default function ParticipantChat() {
  const navigate = useNavigate();
  const [showMenu, SetShowMenu] = useState(true)
  const handleChange =(e) => {
    SetShowMenu(e)
  }

  return (
    <>
      <HeaderPage />
      <div className="participant-chat-main">
        <img
          className="participant-chat-page-img"
          height="100%"
          width="70%"
          src="./assets/video.png"
          alt="logo"
        />
        <div className="participant-chat-inside">
          <div className="participants-title-main">
            <div className="participants-title">
              <ArrowBackOutlinedIcon
                onClick={() => navigate("/participant-profile")}
              />
              <div className="participant-head">
                
                <img
                  src="./assets/dp.png"
                  alt="dp"
                  title="Ruby Rhod"
                  width="50px"
                  height="50px"
                />
                {/* <img src="./assets/dot.png" width='20px' height='20px' /> */}
                <div>
                  <div>
                    <p>Lydia Vaccaro</p>
                    <p> Online</p>
                  </div>
                  <p>lydiavaccaro@example.com</p>
                </div>
              </div>
              <MoreVertOutlinedIcon onClick={() => console.log("side")} />
            </div>
          </div>
        </div>
        <SideBar onChange={handleChange} />
      </div>
      <FooterPage />
    </>
  );
}
