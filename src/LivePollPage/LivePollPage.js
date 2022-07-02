import React, { useState } from "react";
import FooterPage from "../FooterPage";
import HeaderPage from "../HeaderPage";
import SideBar from "../SideBar";
import Paper from "@mui/material/Paper";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import TextField from "@mui/material/TextField";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

//src
import "./LivePollPage.scss";

const LivePollPage = () => {
  const [showMenu, SetShowMenu] = useState(true);
  const [expanded, SetExpanded] = useState(true);
  const handleChange = (e) => {
    SetShowMenu(e);
  };
  return (
    <>
      <HeaderPage />
      <div className="livepoll-main">
        <img
          className="livepoll-page-logo-img"
          height="100%"
          width={showMenu ? "70%" : "95%"}
          src="./assets/video.png"
          alt="logo"
        />
        {showMenu && (
          <div className="livepoll-inside">
            <div className="livepoll-cards-main">
              <div className="livepoll-title-main">
                <div className="livepoll-title">
                  <p>Live Poll</p>
                  <CancelOutlinedIcon onClick={() => SetShowMenu(false)} />
                </div>
              </div>
              <div className="livepoll-search">
                <TextField
                  placeholder="Search Poll"
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
              <Paper elevation={0} style={{ backgroundColor: "#F3F4F8" }}>
                <Accordion expanded={expanded} onClick={() => SetExpanded(!expanded)}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Live Poll</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p style={{ fontWeight: "bold" }}>
                      On a scale of 1 to 10, how would you rate the polling
                      system?
                    </p>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="Excellent"
                        control={<Radio />}
                        label="Excellent"
                      />
                      <FormControlLabel
                        value="Average"
                        control={<Radio />}
                        label="Average"
                      />
                      <FormControlLabel
                        value="Bellow Average"
                        control={<Radio />}
                        label="Bellow Average"
                      />
                    </RadioGroup>
                  </AccordionDetails>
                </Accordion>
              </Paper>
            </div>
          </div>
        )}
        <SideBar onChange={handleChange} />
      </div>
      <FooterPage />
    </>
  );
};
export default LivePollPage;
