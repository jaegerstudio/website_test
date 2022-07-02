import React,{useState} from 'react'
import FooterPage from '../FooterPage/FooterPage'
import HeaderPage from '../HeaderPage'
import SideBar from '../SideBar/SideBar';
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

//src 
import './AskQuestion.scss'

const AskQuestion = () => {
  const [showMenu, SetShowMenu] = useState(true);
  const handleChange = (e) => {
    SetShowMenu(e);
  };
  return (
    <>
      <HeaderPage />
      <div className="question-main">
        <img
          className="question-page-logo-img"
          height="100%"
          width={showMenu ? "70%" : "95%"}
          src="./assets/video.png"
          alt="logo"
        />
         {showMenu && (
          <div className="question-inside">
            <div className="question-cards-main">
              <div className="question-title-main">
                <div className="question-title">
                  <p>Ask Questions</p>
                  <CancelOutlinedIcon onClick={() => SetShowMenu(false)} />
                </div>
              </div>
            </div>
          </div>
        )}
        <SideBar onChange={handleChange} />
      </div>
      <FooterPage />  
    </>
  )
}
export default AskQuestion