import "./RightFreeConsulation.scss"
import homePhone from "../../../images/Main/FreeConsulation/homePhone.png"

const RightFreeConsulation = () => {
    return (
        <div className="rightFreeConsulation">
            <div className="inputsInFreeConsulation">
                <input className="inputLeft" type="text" placeholder="Adınız soyadınız" />
                <input className="inputLeft" type="text" placeholder="Əlaqə nömrəsi" />
            </div>
            <div className="buttonInFreeConsulation">
                <button className="callToUs">
                    Mənə zəng edin
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.385 15.4743C12.7564 17.1029 8.58569 15.5726 5.06939 12.0563C1.5531 8.54005 0.0228256 4.36929 1.65142 2.74069L2.72373 1.66838C3.464 0.928112 4.68379 0.94768 5.4482 1.71209L7.1091 3.373C7.87352 4.13741 7.89308 5.3572 7.15281 6.09747L6.92249 6.32779C6.52281 6.72747 6.48371 7.37224 6.85509 7.82229C7.21331 8.25639 7.5995 8.68877 8.01823 9.1075C8.43696 9.52623 8.86934 9.91243 9.30344 10.2706C9.75349 10.642 10.3983 10.6029 10.7979 10.2032L11.0283 9.97292C11.7685 9.23265 12.9883 9.25222 13.7527 10.0166L15.4136 11.6775C16.1781 12.4419 16.1976 13.6617 15.4573 14.402L14.385 15.4743Z" stroke="#FDFDFD" stroke-width="1.25" />
                        <path d="M13.1887 6.12551C12.9854 5.62952 12.6824 5.16484 12.2797 4.76211C11.8997 4.38213 11.4645 4.0909 11 3.88844" stroke="#FDFDFD" stroke-width="1.25" stroke-linecap="round" />
                        <path d="M11 1.05284C12.1122 1.45576 13.1557 2.10304 14.0474 2.9947C14.9614 3.90874 15.6187 4.98236 16.0191 6.12594" stroke="#FDFDFD" stroke-width="1.25" stroke-linecap="round" />
                    </svg>
                </button>
            </div>
            <div className="infoInFreeConsulation">
                <div className="leftInfo">
                    <h1>
                        Və ya siz
                        bizə zəng edin!
                    </h1>
                </div>
                <div className="rightInfo">
                    <div className="topRightInfo">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.32 1C11.92 1 14 3.08 14 5.68M9.32 3.6C10.36 3.6 11.4 4.64 11.4 5.68M1 1C1 9.84 5.16 14 14 14V9.84L10.36 8.8L9.32 10.36C7.24 10.36 4.64 7.76 4.64 5.68L6.2 4.64L5.16 1H1Z" stroke="#FF912B" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>+994 50 983 66 99 / +994 50 983 66 99</p>
                    </div>
                    <div className="bottomRightInfo">
                        <img className="homePhoneImage" src={homePhone} alt="sekil yoxdur" />
                        <p>+994 12 310 15 99</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightFreeConsulation