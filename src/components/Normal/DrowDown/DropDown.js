import "./DropDown.scss"
import { useState } from "react"

const DropDown = ({ h1Value, pValue }) => {
    const [isOpen, setIsOpen] = useState(false)
    const clickedButton = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div
            className="dropDown"
        >
            <div
                className="topDropDown"
            >
                <h1>{h1Value}</h1>
                <button onClick={() => clickedButton()}>

                    {
                        isOpen ?
                            <svg
                                width="18"
                                height="8"
                                viewBox="0 0 18 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.81238 1.0625L8.42012 6.72628C8.89759 7.13554 9.60216 7.13554 10.0796 6.72628L16.6874 1.0625"
                                    stroke="#FF7A00"
                                    stroke-width="1.5"
                                    stroke-miterlimit="16"
                                    stroke-linecap="square"
                                />
                            </svg> :
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16 6.57534H9.5V0H6.5V6.57534H0V9.46119H6.5V16H9.5V9.46119H16V6.57534Z"
                                    fill="#FF7A00"
                                />
                            </svg>
                    }
                </button>
            </div>
            <div
                className="bottomDropDown"
                style={{
                    height: `${isOpen ? "70px" : "0"}`,
                    overflow: `${isOpen ? "visible" : "hidden"}`
                }}
            >
                <p>{pValue}</p>
            </div>
            <hr />
        </div>
    )
}

export default DropDown