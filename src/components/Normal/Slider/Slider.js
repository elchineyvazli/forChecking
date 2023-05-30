import { useContext } from "react";
import "./Slider.scss";
import img1 from "../../../images/Slider/sliderPhoto1.jpg";
import img2 from "../../../images/Slider/sliderPhoto2.jpg";
import img3 from "../../../images/Slider/sliderPhoto3.png";
import { SliderContext } from "./../../../useContext/SliderContext";
import LeftArrowButton from "./../LeftArrowButton/LeftArrowButton";
import RightArrowButton from "./../RightArrowButton/RightArrowButton";
const Slider = () => {
  const { rightButtonFunction, leftButtonFunction, whichSlide } =
    useContext(SliderContext);
  return (
    <div className="slider">
      <div className="inside">
        {whichSlide === 1 ? (
          <div className="slide slide1">
            <img src={img1} alt="sekil yoxdur" />
          </div>
        ) : whichSlide === 2 ? (
          <div className="slide slide2">
            <img src={img2} alt="sekil yoxdur" />
          </div>
        ) : (
          whichSlide === 3 && (
            <div className="slide slide3">
              <img src={img3} alt="sekil yoxdur" />
            </div>
          )
        )}
        <div className="arrowButtons">
          <LeftArrowButton onClickFunction={() => leftButtonFunction()} />
          <RightArrowButton onClickFunction={() => rightButtonFunction()} />
        </div>
        {whichSlide === 1 ? (
          <div className="switchButtons">
            <button
              className="active button1"
              style={{
                transition: ".5s",
              }}
            ></button>
            <div
              className="switchGroup"
              style={{
                justifyContent: "flex-start",
                gap: "17px",
              }}
            >
              <button
                className="button2"
                style={{
                  marginTop: "44px",
                  transition: ".6s",
                }}
              ></button>
              <button className="button3"></button>
            </div>
          </div>
        ) : whichSlide === 2 ? (
          <div className="switchButtons">
            <button
              className="active button1"
              style={{
                backgroundColor: "transparent",
                width: "12px",
                height: "12px",
              }}
            ></button>
            <div
              className="switchGroup"
              style={{
                justifyContent: "flex-end",
              }}
            >
              <button
                className="button2"
                style={{
                  backgroundColor: "#FF7A00",
                  width: "16px",
                  height: "16px",
                  marginBottom: "54px",
                  transition: ".5s",
                }}
              ></button>
              <button className="button3"></button>
            </div>
          </div>
        ) : (
          whichSlide === 3 && (
            <div className="switchButtons">
              <button
                className="active button1"
                style={{
                  backgroundColor: "transparent",
                  width: "12px",
                  height: "12px",
                }}
              ></button>
              <div
                className="switchGroup"
                style={{
                  justifyContent: "space-between",
                }}
              >
                <button
                  className="button2"
                  style={{
                    backgroundColor: "transparent",
                    width: "12px",
                    height: "12px",
                    transition: ".5s",
                  }}
                ></button>
                <button
                  className="button3"
                  style={{
                    backgroundColor: "#FF7A00",
                    width: "16px",
                    height: "16px",
                    transition: ".5s",
                    marginBottom: "40px",
                  }}
                ></button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Slider;
