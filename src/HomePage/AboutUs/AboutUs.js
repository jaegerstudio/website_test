import React, { useEffect, useState } from "react";
import parse from "html-react-parser";

//src
import "./AboutUs.scss";
import { getAboutUs } from "../action";

const AboutUs = () => {
  const [aboutUs, setAboutUs] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    getAboutUs({ callback: (res) => setAboutUs(res.items[0]) });
    setLoader(false);
  }, []);
  return (
    <>
      {loader && ""}
      {!loader && aboutUs !== undefined && aboutUs.length !== 0 && (
        <div className="abous-us-main">
          <div className="about-col-1">
            <p className="gradient-heading">ABOUT US</p>
            <svg
              className="about-svg"
              width="789"
              height="117"
              viewBox="0 0 789 117"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.936 114L43.212 2.928H75.036L116.844 114H84.396L53.352 19.62H64.584L32.76 114H0.936ZM28.392 95.28V70.944H90.48V95.28H28.392ZM151.019 114V91.536H171.455C175.407 91.536 178.579 90.496 180.971 88.416C183.363 86.232 184.559 83.268 184.559 79.524C184.559 77.028 183.987 74.896 182.843 73.128C181.803 71.256 180.295 69.852 178.319 68.916C176.447 67.98 174.159 67.512 171.455 67.512H151.019V45.984H170.051C173.379 45.984 176.135 45.152 178.319 43.488C180.503 41.824 181.595 39.224 181.595 35.688C181.595 32.152 180.503 29.552 178.319 27.888C176.135 26.224 173.379 25.392 170.051 25.392H151.019V2.928H178.787C185.547 2.928 191.423 4.228 196.415 6.82799C201.511 9.32399 205.463 12.808 208.271 17.28C211.079 21.648 212.483 26.692 212.483 32.412C212.483 40.316 209.675 46.764 204.059 51.756C198.443 56.748 190.227 59.608 179.411 60.336L179.099 49.572C190.851 50.3 199.847 53.524 206.087 59.244C212.327 64.964 215.447 72.296 215.447 81.24C215.447 87.688 213.835 93.408 210.611 98.4C207.387 103.288 202.863 107.136 197.039 109.944C191.319 112.648 184.611 114 176.915 114H151.019ZM125.747 114V2.928H156.323V114H125.747ZM283.491 116.184C274.755 116.184 266.695 114.728 259.311 111.816C252.031 108.904 245.635 104.848 240.123 99.648C234.715 94.448 230.503 88.312 227.487 81.24C224.471 74.168 222.963 66.524 222.963 58.308C222.963 49.988 224.419 42.344 227.331 35.376C230.347 28.408 234.559 22.324 239.967 17.124C245.375 11.924 251.719 7.92 258.999 5.112C266.383 2.2 274.443 0.743998 283.179 0.743998C291.915 0.743998 299.923 2.2 307.203 5.112C314.587 7.92 320.983 11.924 326.391 17.124C331.799 22.324 335.959 28.46 338.871 35.532C341.887 42.5 343.395 50.144 343.395 58.464C343.395 66.68 341.887 74.324 338.871 81.396C335.959 88.364 331.799 94.5 326.391 99.804C320.983 105.004 314.639 109.06 307.359 111.972C300.079 114.78 292.123 116.184 283.491 116.184ZM283.179 88.728C289.003 88.728 294.047 87.48 298.311 84.984C302.575 82.488 305.851 78.952 308.139 74.376C310.427 69.8 311.571 64.444 311.571 58.308C311.571 53.732 310.895 49.624 309.543 45.984C308.295 42.24 306.423 39.068 303.927 36.468C301.431 33.764 298.415 31.736 294.879 30.384C291.447 28.928 287.547 28.2 283.179 28.2C277.355 28.2 272.311 29.448 268.047 31.944C263.783 34.336 260.507 37.82 258.219 42.396C255.931 46.868 254.787 52.172 254.787 58.308C254.787 62.988 255.411 67.2 256.659 70.944C258.011 74.688 259.935 77.912 262.431 80.616C264.927 83.216 267.891 85.244 271.323 86.7C274.859 88.052 278.811 88.728 283.179 88.728ZM402.887 115.872C393.111 115.872 384.583 113.896 377.303 109.944C370.023 105.888 364.355 100.324 360.299 93.252C356.243 86.18 354.215 78.068 354.215 68.916V2.928H385.415V71.724C385.415 75.26 386.195 78.276 387.755 80.772C389.315 83.268 391.395 85.192 393.995 86.544C396.699 87.792 399.663 88.416 402.887 88.416C406.215 88.416 409.127 87.792 411.623 86.544C414.223 85.192 416.251 83.32 417.707 80.928C419.163 78.432 419.891 75.416 419.891 71.88V2.928H451.247V69.072C451.247 78.224 449.219 86.336 445.163 93.408C441.211 100.376 435.595 105.888 428.315 109.944C421.139 113.896 412.663 115.872 402.887 115.872ZM494.126 114V2.928H525.326V114H494.126ZM460.898 29.448V2.928H558.71V29.448H460.898ZM642.676 115.872C632.9 115.872 624.372 113.896 617.092 109.944C609.812 105.888 604.144 100.324 600.088 93.252C596.032 86.18 594.004 78.068 594.004 68.916V2.928H625.204V71.724C625.204 75.26 625.984 78.276 627.544 80.772C629.104 83.268 631.184 85.192 633.784 86.544C636.488 87.792 639.452 88.416 642.676 88.416C646.004 88.416 648.916 87.792 651.412 86.544C654.012 85.192 656.04 83.32 657.496 80.928C658.952 78.432 659.68 75.416 659.68 71.88V2.928H691.036V69.072C691.036 78.224 689.008 86.336 684.952 93.408C681 100.376 675.384 105.888 668.104 109.944C660.928 113.896 652.452 115.872 642.676 115.872ZM742.057 115.872C732.593 115.872 724.325 114.52 717.253 111.816C710.285 109.008 703.837 104.588 697.909 98.556L717.409 79.056C721.465 82.904 725.729 85.868 730.201 87.948C734.673 89.924 739.457 90.912 744.553 90.912C748.817 90.912 752.041 90.288 754.225 89.04C756.409 87.688 757.501 85.868 757.501 83.58C757.501 81.292 756.565 79.42 754.693 77.964C752.821 76.404 750.325 75.052 747.205 73.908C744.189 72.66 740.809 71.412 737.065 70.164C733.425 68.916 729.785 67.408 726.145 65.64C722.505 63.872 719.125 61.74 716.005 59.244C712.989 56.644 710.545 53.472 708.673 49.728C706.801 45.88 705.865 41.2 705.865 35.688C705.865 28.512 707.581 22.324 711.013 17.124C714.445 11.924 719.281 7.972 725.521 5.268C731.761 2.45999 739.093 1.05599 747.517 1.05599C755.837 1.05599 763.533 2.408 770.605 5.112C777.781 7.712 783.709 11.456 788.389 16.344L768.733 35.844C765.301 32.516 761.869 30.072 758.437 28.512C755.005 26.848 751.261 26.016 747.205 26.016C743.981 26.016 741.381 26.536 739.405 27.576C737.533 28.616 736.597 30.176 736.597 32.256C736.597 34.44 737.533 36.26 739.405 37.716C741.277 39.068 743.721 40.316 746.737 41.46C749.857 42.604 753.237 43.8 756.877 45.048C760.621 46.296 764.313 47.804 767.953 49.572C771.593 51.236 774.921 53.42 777.937 56.124C781.057 58.724 783.553 62 785.425 65.952C787.297 69.904 788.233 74.688 788.233 80.304C788.233 91.64 784.177 100.428 776.065 106.668C768.057 112.804 756.721 115.872 742.057 115.872Z"
                fill="#282828"
                fillOpacity="0.08"
              />
            </svg>

            <p className="main-heading">{aboutUs.title}</p>
            <p className="para">{}</p>
            <p className="para">{aboutUs.body[1].value.text}</p>
            <div className="para">{parse(aboutUs.body[2].value)}</div>
          </div>
          <div className="about-col-2">
            <img
              src={aboutUs.image.meta.download_url}
              alt="about-us"
              width="565px"
              height="329px"
            />
            <img
              src={aboutUs.image.meta.download_url}
              alt="about-us"
              width="565px"
              height="329px"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AboutUs;
