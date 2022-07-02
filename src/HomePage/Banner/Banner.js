import React, { useEffect, useState } from "react";

//src
import "./Banner.scss";

const Banner = (bannerEvent) => {
  const [bannerDate, setBannerData] = useState(bannerEvent.bannerEvent);
  useEffect(() => {
    setBannerData(bannerEvent.bannerEvent);
  }, [bannerEvent]);
  return (
    <>
      {bannerDate.length !== 0 && (
        <div className="homepage-container">
          <img
            src={bannerDate.items[0].image.meta.download_url}
            width="100%"
            height="100%"
          />
          <div className="details-container">
            <div className="homepage-section-2-text">
              <button className="">
                {" "}
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="white" />
                </svg>
                LIVE NOW
              </button>
              <p className="heading">{bannerDate.items[0].title}</p>
              <p className="para">{bannerDate.items[0].hero_text}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Banner;
