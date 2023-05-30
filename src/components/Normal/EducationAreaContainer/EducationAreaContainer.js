import "./EducationAreaContainer.scss";
import LeftArrowButton from "./../LeftArrowButton/LeftArrowButton";
import RightArrowButton from "./../RightArrowButton/RightArrowButton";
import Button from "./../Button/Button";
import { useState, useRef } from "react";

const EducationAreaContainer = () => {
  const [isHover1, setIsHover1] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  const [isHover3, setIsHover3] = useState(false);

  const [isHover4, setIsHover4] = useState(false);
  const [isHover5, setIsHover5] = useState(false);
  const [isHover6, setIsHover6] = useState(false);

  const [isHover7, setIsHover7] = useState(false);
  const [isHover8, setIsHover8] = useState(false);
  const [isHover9, setIsHover9] = useState(false);

  const [isHover10, setIsHover10] = useState(false);
  const [isHover11, setIsHover11] = useState(false);
  const [isHover12, setIsHover12] = useState(false);

  const [isLeftClicked, setIsLeftClicked] = useState(true);
  const [isRightClicked, setIsRightClicked] = useState(true);

  const [transformValue, setTransformValue] = useState(0);

  const el = useRef();

  const handleMouseEnter1 = () => {
    setIsHover1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHover1(false);
  };

  //!--------------!\\
  const handleMouseEnter2 = () => {
    setIsHover2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHover2(false);
  };

  //!--------------!\\
  const handleMouseEnter3 = () => {
    setIsHover3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHover3(false);
  };

  //!--------------!\\
  const handleMouseEnter4 = () => {
    setIsHover4(true);
  };

  const handleMouseLeave4 = () => {
    setIsHover4(false);
  };

  //!--------------!\\
  const handleMouseEnter5 = () => {
    setIsHover5(true);
  };

  const handleMouseLeave5 = () => {
    setIsHover5(false);
  };

  //!--------------!\\
  const handleMouseEnter6 = () => {
    setIsHover6(true);
  };

  const handleMouseLeave6 = () => {
    setIsHover6(false);
  };

  //*-------------*\\
  const handleMouseEnter7 = () => {
    setIsHover7(true);
  };

  const handleMouseLeave7 = () => {
    setIsHover7(false);
  };

  //*--------------*\\
  const handleMouseEnter8 = () => {
    setIsHover8(true);
  };

  const handleMouseLeave8 = () => {
    setIsHover8(false);
  };

  //*--------------*\\
  const handleMouseEnter9 = () => {
    setIsHover9(true);
  };

  const handleMouseLeave9 = () => {
    setIsHover9(false);
  };

  //*--------------*\\
  const handleMouseEnter10 = () => {
    setIsHover10(true);
  };

  const handleMouseLeave10 = () => {
    setIsHover10(false);
  };

  //*--------------*\\
  const handleMouseEnter11 = () => {
    setIsHover11(true);
  };

  const handleMouseLeave11 = () => {
    setIsHover11(false);
  };

  //*--------------*\\
  const handleMouseEnter12 = () => {
    setIsHover12(true);
  };

  const handleMouseLeave12 = () => {
    setIsHover12(false);
  };

  //*--------------*\\

  const leftButtonFunction = () => {
    setIsLeftClicked(isLeftClicked);

    if (transformValue < 0) {
      isLeftClicked === true
        ? setTransformValue((prev) => prev + 420)
        : console.log("It doesnt work");
    }
  };

  const rightButtonFunction = () => {
    setIsRightClicked(isRightClicked);

    if (transformValue > -1260) {
      isRightClicked === true
        ? setTransformValue((prev) => prev - 420)
        : console.log("It doesnt work");
    }
  };

  return (
    <div className="educationAreaContainer">
      <div className="forButtons">
        <LeftArrowButton onClickFunction={leftButtonFunction} />
        <RightArrowButton onClickFunction={() => rightButtonFunction()} />
      </div>
      <div className="cardSliderEducation">
        <div className="insideEducation">
          {isRightClicked}
          <div
            className="inside"
            style={{
              transform: `translateX(${transformValue}px)`,
              transition: ".6s",
            }}
            ref={el}
          >
            <div className="cardEducation">
              <h1>Front- End Proqramlaşdırma Kursu</h1>
              <p>
                HTML, CSS, SASS, Bootstrap, Javascript, Typescript, ReactJS,
                Ajax, Git
              </p>
              <div className="infoEducation">
                <div className="time">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 18C14.4 18 18 14.4 18 10C18 5.6 14.4 2 10 2C5.6 2 2 5.6 2 10C2 14.4 5.6 18 10 18ZM10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10C0 4.5 4.5 0 10 0ZM13.3 14.2L12 15L9 9.8V5H10.5V9.4L13.3 14.2Z"
                      fill="#FF7A00"
                    />
                  </svg>
                  <p>6 ay / 280 saat</p>
                </div>
                <div className="type">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 2V9L6.5 7.5L9 9V2H4ZM15 21C13.6167 21 12.4377 20.5127 11.463 19.538C10.4877 18.5627 10 17.3833 10 16C10 14.6167 10.4877 13.4373 11.463 12.462C12.4377 11.4873 13.6167 11 15 11C16.3833 11 17.5627 11.4873 18.538 12.462C19.5127 13.4373 20 14.6167 20 16C20 17.3833 19.5127 18.5627 18.538 19.538C17.5627 20.5127 16.3833 21 15 21ZM13.75 18.5L17.75 16L13.75 13.5V18.5ZM8 16C8 16.7167 8.11267 17.4123 8.338 18.087C8.56267 18.7623 8.86667 19.4 9.25 20H2C1.45 20 0.979 19.8043 0.587 19.413C0.195667 19.021 0 18.55 0 18V2C0 1.45 0.195667 0.979 0.587 0.587C0.979 0.195667 1.45 0 2 0H14C14.55 0 15.021 0.195667 15.413 0.587C15.8043 0.979 16 1.45 16 2V9.05C15.8333 9.03333 15.6667 9.02067 15.5 9.012C15.3333 9.004 15.1667 9 15 9C13.05 9 11.396 9.679 10.038 11.037C8.67933 12.3957 8 14.05 8 16Z"
                      fill="#FF7A00"
                    />
                  </svg>
                  <p>Əyani</p>
                </div>
              </div>
              <hr />
              <div className="buttonsEducation">
                <Button
                  buttonBackgroundColor={isHover1 ? "#173D7A" : "white"}
                  buttonColor={isHover1 ? "white" : "#173D7A"}
                  buttonValue="Ətraflı"
                  buttonWidth="174px"
                  buttonHeight="40px"
                  buttonBorder="solid 1px #173D7A"
                  buttonBorderRadius="8px"
                  mouseEnterFunction={handleMouseEnter1}
                  mouseLeaveFunction={handleMouseLeave1}
                />
                <Button
                  buttonBackgroundColor={isHover7 ? "black" : "#FF7A00"}
                  buttonColor="white"
                  buttonValue="Müraciət et"
                  buttonWidth="174px"
                  buttonHeight="40px"
                  buttonBorder="none"
                  buttonBorderRadius="8px"
                  mouseEnterFunction={handleMouseEnter7}
                  mouseLeaveFunction={handleMouseLeave7}
                />
              </div>
            </div>
            <div className="cardEducation">
              <h1>Front- End Proqramlaşdırma Kursu</h1>
              <p>
                HTML, CSS, SASS, Bootstrap, Javascript, Typescript, ReactJS,
                Ajax, Git
              </p>
              <div className="infoEducation">
                <div className="time">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 18C14.4 18 18 14.4 18 10C18 5.6 14.4 2 10 2C5.6 2 2 5.6 2 10C2 14.4 5.6 18 10 18ZM10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10C0 4.5 4.5 0 10 0ZM13.3 14.2L12 15L9 9.8V5H10.5V9.4L13.3 14.2Z"
                      fill="#FF7A00"
                    />
                  </svg>
                  <p>6 ay / 280 saat</p>
                </div>
                <div className="type">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 2V9L6.5 7.5L9 9V2H4ZM15 21C13.6167 21 12.4377 20.5127 11.463 19.538C10.4877 18.5627 10 17.3833 10 16C10 14.6167 10.4877 13.4373 11.463 12.462C12.4377 11.4873 13.6167 11 15 11C16.3833 11 17.5627 11.4873 18.538 12.462C19.5127 13.4373 20 14.6167 20 16C20 17.3833 19.5127 18.5627 18.538 19.538C17.5627 20.5127 16.3833 21 15 21ZM13.75 18.5L17.75 16L13.75 13.5V18.5ZM8 16C8 16.7167 8.11267 17.4123 8.338 18.087C8.56267 18.7623 8.86667 19.4 9.25 20H2C1.45 20 0.979 19.8043 0.587 19.413C0.195667 19.021 0 18.55 0 18V2C0 1.45 0.195667 0.979 0.587 0.587C0.979 0.195667 1.45 0 2 0H14C14.55 0 15.021 0.195667 15.413 0.587C15.8043 0.979 16 1.45 16 2V9.05C15.8333 9.03333 15.6667 9.02067 15.5 9.012C15.3333 9.004 15.1667 9 15 9C13.05 9 11.396 9.679 10.038 11.037C8.67933 12.3957 8 14.05 8 16Z"
                      fill="#FF7A00"
                    />
                  </svg>
                  <p>Əyani</p>
                </div>
              </div>
              <hr />
              <div className="buttonsEducation">
                <Button
                  buttonBackgroundColor={isHover2 ? "#173D7A" : "white"}
                  buttonColor={isHover2 ? "white" : "#173D7A"}
                  buttonValue="Ətraflı"
                  buttonWidth="174px"
                  buttonHeight="40px"
                  buttonBorder="solid 1px #173D7A"
                  buttonBorderRadius="8px"
                  mouseEnterFunction={handleMouseEnter2}
                  mouseLeaveFunction={handleMouseLeave2}
                />
                <Button
                  buttonBackgroundColor={isHover8 ? "black" : "#FF7A00"}
                  buttonColor="white"
                  buttonValue="Müraciət et"
                  buttonWidth="174px"
                  buttonHeight="40px"
                  buttonBorder="none"
                  buttonBorderRadius="8px"
                  mouseEnterFunction={handleMouseEnter8}
                  mouseLeaveFunction={handleMouseLeave8}
                />
              </div>
            </div>
            <div className="cardEducation">
              <h1>Front- End Proqramlaşdırma Kursu</h1>
              <p>
                HTML, CSS, SASS, Bootstrap, Javascript, Typescript, ReactJS,
                Ajax, Git
              </p>
              <div className="infoEducation">
                <div className="time">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 18C14.4 18 18 14.4 18 10C18 5.6 14.4 2 10 2C5.6 2 2 5.6 2 10C2 14.4 5.6 18 10 18ZM10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10C0 4.5 4.5 0 10 0ZM13.3 14.2L12 15L9 9.8V5H10.5V9.4L13.3 14.2Z"
                      fill="#FF7A00"
                    />
                  </svg>
                  <p>6 ay / 280 saat</p>
                </div>
                <div className="type">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 2V9L6.5 7.5L9 9V2H4ZM15 21C13.6167 21 12.4377 20.5127 11.463 19.538C10.4877 18.5627 10 17.3833 10 16C10 14.6167 10.4877 13.4373 11.463 12.462C12.4377 11.4873 13.6167 11 15 11C16.3833 11 17.5627 11.4873 18.538 12.462C19.5127 13.4373 20 14.6167 20 16C20 17.3833 19.5127 18.5627 18.538 19.538C17.5627 20.5127 16.3833 21 15 21ZM13.75 18.5L17.75 16L13.75 13.5V18.5ZM8 16C8 16.7167 8.11267 17.4123 8.338 18.087C8.56267 18.7623 8.86667 19.4 9.25 20H2C1.45 20 0.979 19.8043 0.587 19.413C0.195667 19.021 0 18.55 0 18V2C0 1.45 0.195667 0.979 0.587 0.587C0.979 0.195667 1.45 0 2 0H14C14.55 0 15.021 0.195667 15.413 0.587C15.8043 0.979 16 1.45 16 2V9.05C15.8333 9.03333 15.6667 9.02067 15.5 9.012C15.3333 9.004 15.1667 9 15 9C13.05 9 11.396 9.679 10.038 11.037C8.67933 12.3957 8 14.05 8 16Z"
                      fill="#FF7A00"
                    />
                  </svg>
                  <p>Əyani</p>
                </div>
              </div>
              <hr />
              <div className="buttonsEducation">
                <Button
                  buttonBackgroundColor={isHover3 ? "#173D7A" : "white"}
                  buttonColor={isHover3 ? "white" : "#173D7A"}
                  buttonValue="Ətraflı"
                  buttonWidth="174px"
                  buttonHeight="40px"
                  buttonBorder="solid 1px #173D7A"
                  buttonBorderRadius="8px"
                  mouseEnterFunction={handleMouseEnter3}
                  mouseLeaveFunction={handleMouseLeave3}
                />
                <Button
                  buttonBackgroundColor={isHover9 ? "black" : "#FF7A00"}
                  buttonColor="white"
                  buttonValue="Müraciət et"
                  buttonWidth="174px"
                  buttonHeight="40px"
                  buttonBorder="none"
                  buttonBorderRadius="8px"
                  mouseEnterFunction={handleMouseEnter9}
                  mouseLeaveFunction={handleMouseLeave9}
                />
              </div>
            </div>

            <div className="cardEducation">
              <h1>Front- End Proqramlaşdırma Kursu</h1>
              <p>
                HTML, CSS, SASS, Bootstrap, Javascript, Typescript, ReactJS,
                Ajax, Git
              </p>
              <div className="infoEducation">
                <div className="time">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 18C14.4 18 18 14.4 18 10C18 5.6 14.4 2 10 2C5.6 2 2 5.6 2 10C2 14.4 5.6 18 10 18ZM10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10C0 4.5 4.5 0 10 0ZM13.3 14.2L12 15L9 9.8V5H10.5V9.4L13.3 14.2Z"
                      fill="#FF7A00"
                    />
                  </svg>
                  <p>6 ay / 280 saat</p>
                </div>
                <div className="type">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 2V9L6.5 7.5L9 9V2H4ZM15 21C13.6167 21 12.4377 20.5127 11.463 19.538C10.4877 18.5627 10 17.3833 10 16C10 14.6167 10.4877 13.4373 11.463 12.462C12.4377 11.4873 13.6167 11 15 11C16.3833 11 17.5627 11.4873 18.538 12.462C19.5127 13.4373 20 14.6167 20 16C20 17.3833 19.5127 18.5627 18.538 19.538C17.5627 20.5127 16.3833 21 15 21ZM13.75 18.5L17.75 16L13.75 13.5V18.5ZM8 16C8 16.7167 8.11267 17.4123 8.338 18.087C8.56267 18.7623 8.86667 19.4 9.25 20H2C1.45 20 0.979 19.8043 0.587 19.413C0.195667 19.021 0 18.55 0 18V2C0 1.45 0.195667 0.979 0.587 0.587C0.979 0.195667 1.45 0 2 0H14C14.55 0 15.021 0.195667 15.413 0.587C15.8043 0.979 16 1.45 16 2V9.05C15.8333 9.03333 15.6667 9.02067 15.5 9.012C15.3333 9.004 15.1667 9 15 9C13.05 9 11.396 9.679 10.038 11.037C8.67933 12.3957 8 14.05 8 16Z"
                      fill="#FF7A00"
                    />
                  </svg>
                  <p>Əyani</p>
                </div>
              </div>
              <hr />
              <div className="buttonsEducation">
                <Button
                  buttonBackgroundColor={isHover4 ? "#173D7A" : "white"}
                  buttonColor={isHover4 ? "white" : "#173D7A"}
                  buttonValue="Ətraflı"
                  buttonWidth="174px"
                  buttonHeight="40px"
                  buttonBorder="solid 1px #173D7A"
                  buttonBorderRadius="8px"
                  mouseEnterFunction={handleMouseEnter4}
                  mouseLeaveFunction={handleMouseLeave4}
                />
                <Button
                  buttonBackgroundColor={isHover10 ? "black" : "#FF7A00"}
                  buttonColor="white"
                  buttonValue="Müraciət et"
                  buttonWidth="174px"
                  buttonHeight="40px"
                  buttonBorder="none"
                  buttonBorderRadius="8px"
                  mouseEnterFunction={handleMouseEnter10}
                  mouseLeaveFunction={handleMouseLeave10}
                />
              </div>
            </div>
            <div className="cardEducation">
              <h1>Front- End Proqramlaşdırma Kursu</h1>
              <p>
                HTML, CSS, SASS, Bootstrap, Javascript, Typescript, ReactJS,
                Ajax, Git
              </p>
              <div className="infoEducation">
                <div className="time">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 18C14.4 18 18 14.4 18 10C18 5.6 14.4 2 10 2C5.6 2 2 5.6 2 10C2 14.4 5.6 18 10 18ZM10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10C0 4.5 4.5 0 10 0ZM13.3 14.2L12 15L9 9.8V5H10.5V9.4L13.3 14.2Z"
                      fill="#FF7A00"
                    />
                  </svg>
                  <p>6 ay / 280 saat</p>
                </div>
                <div className="type">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 2V9L6.5 7.5L9 9V2H4ZM15 21C13.6167 21 12.4377 20.5127 11.463 19.538C10.4877 18.5627 10 17.3833 10 16C10 14.6167 10.4877 13.4373 11.463 12.462C12.4377 11.4873 13.6167 11 15 11C16.3833 11 17.5627 11.4873 18.538 12.462C19.5127 13.4373 20 14.6167 20 16C20 17.3833 19.5127 18.5627 18.538 19.538C17.5627 20.5127 16.3833 21 15 21ZM13.75 18.5L17.75 16L13.75 13.5V18.5ZM8 16C8 16.7167 8.11267 17.4123 8.338 18.087C8.56267 18.7623 8.86667 19.4 9.25 20H2C1.45 20 0.979 19.8043 0.587 19.413C0.195667 19.021 0 18.55 0 18V2C0 1.45 0.195667 0.979 0.587 0.587C0.979 0.195667 1.45 0 2 0H14C14.55 0 15.021 0.195667 15.413 0.587C15.8043 0.979 16 1.45 16 2V9.05C15.8333 9.03333 15.6667 9.02067 15.5 9.012C15.3333 9.004 15.1667 9 15 9C13.05 9 11.396 9.679 10.038 11.037C8.67933 12.3957 8 14.05 8 16Z"
                      fill="#FF7A00"
                    />
                  </svg>
                  <p>Əyani</p>
                </div>
              </div>
              <hr />
              <div className="buttonsEducation">
                <Button
                  buttonBackgroundColor={isHover5 ? "#173D7A" : "white"}
                  buttonColor={isHover5 ? "white" : "#173D7A"}
                  buttonValue="Ətraflı"
                  buttonWidth="174px"
                  buttonHeight="40px"
                  buttonBorder="solid 1px #173D7A"
                  buttonBorderRadius="8px"
                  mouseEnterFunction={handleMouseEnter5}
                  mouseLeaveFunction={handleMouseLeave5}
                />
                <Button
                  buttonBackgroundColor={isHover11 ? "black" : "#FF7A00"}
                  buttonColor="white"
                  buttonValue="Müraciət et"
                  buttonWidth="174px"
                  buttonHeight="40px"
                  buttonBorder="none"
                  buttonBorderRadius="8px"
                  mouseEnterFunction={handleMouseEnter11}
                  mouseLeaveFunction={handleMouseLeave11}
                />
              </div>
            </div>
            <div className="cardEducation">
              <h1>Front- End Proqramlaşdırma Kursu</h1>
              <p>
                HTML, CSS, SASS, Bootstrap, Javascript, Typescript, ReactJS,
                Ajax, Git
              </p>
              <div className="infoEducation">
                <div className="time">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 18C14.4 18 18 14.4 18 10C18 5.6 14.4 2 10 2C5.6 2 2 5.6 2 10C2 14.4 5.6 18 10 18ZM10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10C0 4.5 4.5 0 10 0ZM13.3 14.2L12 15L9 9.8V5H10.5V9.4L13.3 14.2Z"
                      fill="#FF7A00"
                    />
                  </svg>
                  <p>6 ay / 280 saat</p>
                </div>
                <div className="type">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 2V9L6.5 7.5L9 9V2H4ZM15 21C13.6167 21 12.4377 20.5127 11.463 19.538C10.4877 18.5627 10 17.3833 10 16C10 14.6167 10.4877 13.4373 11.463 12.462C12.4377 11.4873 13.6167 11 15 11C16.3833 11 17.5627 11.4873 18.538 12.462C19.5127 13.4373 20 14.6167 20 16C20 17.3833 19.5127 18.5627 18.538 19.538C17.5627 20.5127 16.3833 21 15 21ZM13.75 18.5L17.75 16L13.75 13.5V18.5ZM8 16C8 16.7167 8.11267 17.4123 8.338 18.087C8.56267 18.7623 8.86667 19.4 9.25 20H2C1.45 20 0.979 19.8043 0.587 19.413C0.195667 19.021 0 18.55 0 18V2C0 1.45 0.195667 0.979 0.587 0.587C0.979 0.195667 1.45 0 2 0H14C14.55 0 15.021 0.195667 15.413 0.587C15.8043 0.979 16 1.45 16 2V9.05C15.8333 9.03333 15.6667 9.02067 15.5 9.012C15.3333 9.004 15.1667 9 15 9C13.05 9 11.396 9.679 10.038 11.037C8.67933 12.3957 8 14.05 8 16Z"
                      fill="#FF7A00"
                    />
                  </svg>
                  <p>Əyani</p>
                </div>
              </div>
              <hr />
              <div className="buttonsEducation">
                <Button
                  buttonBackgroundColor={isHover6 ? "#173D7A" : "white"}
                  buttonColor={isHover6 ? "white" : "#173D7A"}
                  buttonValue="Ətraflı"
                  buttonWidth="174px"
                  buttonHeight="40px"
                  buttonBorder="solid 1px #173D7A"
                  buttonBorderRadius="8px"
                  mouseEnterFunction={handleMouseEnter6}
                  mouseLeaveFunction={handleMouseLeave6}
                />
                <Button
                  buttonBackgroundColor={isHover12 ? "black" : "#FF7A00"}
                  buttonColor="white"
                  buttonValue="Müraciət et"
                  buttonWidth="174px"
                  buttonHeight="40px"
                  buttonBorder="none"
                  buttonBorderRadius="8px"
                  mouseEnterFunction={handleMouseEnter12}
                  mouseLeaveFunction={handleMouseLeave12}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationAreaContainer;
