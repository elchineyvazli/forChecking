import { Link } from "react-router-dom"
import "./GraduateCard.scss"
import facebookLogo from "../../../images/Main/Graduates/facebook.png"
import linkedinLogo from "../../../images/Main/Graduates/linkedin.png"
import commaImage from "../../../images/Main/Graduates/cardComma.png"

const GraduateCard = ({ infoValue, imageValue, nameValue, jobValue, hasfacebook = true, hasLinkedin = true, facebookUrl, linkedinUrl }) => {

    return (
        <div className="graduateCard">
            <img className="commaImage" src={commaImage} alt="sekil yoxdur" />
            <p className="graduatesInfo">{infoValue}</p>
            <div className="graduateCardBottom">
                <img className="graduateCardImage" src={imageValue} alt="sekil yoxdur" />
                <div className="infoCard">
                    <h3>{nameValue}</h3>
                    <p>{jobValue}</p>
                    <div className="urlCircles">
                        {
                            hasfacebook && <Link className="urlCircle" to={facebookUrl}>
                                <img className="facebookLogo" src={facebookLogo} alt="sekil yoxdur" />
                            </Link>
                        }
                        {
                            hasLinkedin && <Link className="urlCircle" to={linkedinUrl}>
                                <img className="linkedinLogo" src={linkedinLogo} alt="sekil yoxdur" />
                            </Link>
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default GraduateCard