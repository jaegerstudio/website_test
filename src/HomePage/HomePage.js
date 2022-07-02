import React, { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import CircularProgress from '@mui/material/CircularProgress';
import FooterPage from "../FooterPage";
import HeaderPage from "../HeaderPage";
import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import RecentEvents from "./RecentEvents/RecentEvents";
import UpcomingEvents from "./UpcomingEvents/UpcomingEvents";

//src
import "./HomePage.scss";
import { getBannerEvents, getUpcommingEvents, getRecentEvents } from "./action";

const HomePage = () => {
  const [bannerEvent, setBannerEvent] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [recentEvents, setRecentEvents] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    getBannerEvents({ callback: (res) => setBannerEvent(res) });
    getUpcommingEvents({ callback: (res) => setUpcomingEvents(res) });
    getRecentEvents({ callback: (res) => setRecentEvents(res) });
   setTimeout(() => {
    setLoader(false);
   }, 500);
    
  }, []);
  return (
    <>
      {loader &&  <CircularProgress />}
      {!loader && 
        <>
          <HeaderPage />
          <Banner bannerEvent={bannerEvent} />
          <AboutUs />
          <UpcomingEvents upcomingEvents={upcomingEvents} />
          <RecentEvents recentEvents={recentEvents} />
          <FooterPage />
        </>
      }
    </>
  );
};

export default HomePage;
