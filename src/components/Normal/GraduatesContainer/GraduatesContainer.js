import "./GraduatesContainer.scss"
import GraduateCard from './../GraduateCard/GraduateCard';
import personimage1 from "../../../images/Main/Graduates/personImage1.png"
import LeftArrowButton from './../LeftArrowButton/LeftArrowButton';
import RightArrowButton from './../RightArrowButton/RightArrowButton';
import { useState } from "react";

const GraduatesContainer = ({ classNameValue = "graduatesContainer" }) => {

    const [translateX, setTranslateX] = useState(0)
    const sliderFunctionForLeft = () => {
        if (translateX < 0) {
            setTranslateX(prev => prev + 525)
            console.log(translateX);
        }
    }
    const sliderFunctionForRight = () => {
        if (translateX > -1100) {
            setTranslateX(prev => prev - 525)
            console.log(translateX);
        }
    }

    return (
        <div className={"graduatesContainer"}>
            <LeftArrowButton
                heightValue="45px"
                widthValue="45px"
                positionValue="relative"
                zIndexValue="1"
                onClickFunction={() => sliderFunctionForLeft()}
            />
            <div className="sliderGraduate">
                <div className="insideSliderGraduate"
                    style={{
                        transform: `translateX(${translateX}px)`,
                        transition: ".6s"
                    }}
                >
                    <GraduateCard
                        facebookUrl="https://www.facebook.com"
                        imageValue={personimage1}
                        infoValue="
                        Lorem ipsum dolor sit amet consectetur.
                        Aliquet id tincidunt sit magna.
                        Lorem ipsum dolor sit amet consectetur.
                        Aliquet id dolor sit amet consectetur..."
                        jobValue="Frontend developer"
                        linkedinUrl="https://www.linkedin.com"
                        nameValue="Nazənin Xıdırova"
                        hasLinkedin={true}
                        hasfacebook={true}
                    />
                    <GraduateCard
                        facebookUrl="https://www.facebook.com"
                        imageValue={personimage1}
                        infoValue="
                        Lorem ipsum dolor sit amet consectetur.
                        Aliquet id tincidunt sit magna.
                        Lorem ipsum dolor sit amet consectetur.
                        Aliquet id dolor sit amet consectetur..."
                        jobValue="Frontend developer"
                        linkedinUrl="https://www.linkedin.com"
                        nameValue="Nazənin Xıdırova"
                        hasLinkedin={true}
                        hasfacebook={true}
                    />
                    <GraduateCard
                        facebookUrl="https://www.facebook.com"
                        imageValue={personimage1}
                        infoValue="
                        Lorem ipsum dolor sit amet consectetur.
                        Aliquet id tincidunt sit magna.
                        Lorem ipsum dolor sit amet consectetur.
                        Aliquet id dolor sit amet consectetur..."
                        jobValue="Frontend developer"
                        linkedinUrl="https://www.linkedin.com"
                        nameValue="Nazənin Xıdırova"
                        hasLinkedin={true}
                        hasfacebook={true}
                    />
                    <GraduateCard
                        facebookUrl="https://www.facebook.com"
                        imageValue={personimage1}
                        infoValue="
                        Lorem ipsum dolor sit amet consectetur.
                        Aliquet id tincidunt sit magna.
                        Lorem ipsum dolor sit amet consectetur.
                        Aliquet id dolor sit amet consectetur..."
                        jobValue="Frontend developer"
                        linkedinUrl="https://www.linkedin.com"
                        nameValue="Nazənin Xıdırova"
                        hasLinkedin={true}
                        hasfacebook={true}
                    />
                    <GraduateCard
                        facebookUrl="https://www.facebook.com"
                        imageValue={personimage1}
                        infoValue="
                        Lorem ipsum dolor sit amet consectetur.
                        Aliquet id tincidunt sit magna.
                        Lorem ipsum dolor sit amet consectetur.
                        Aliquet id dolor sit amet consectetur..."
                        jobValue="Frontend developer"
                        linkedinUrl="https://www.linkedin.com"
                        nameValue="Nazənin Xıdırova"
                        hasLinkedin={true}
                        hasfacebook={true}
                    />
                </div>
            </div>
            <RightArrowButton
                heightValue="45px"
                widthValue="45px"
                positionValue="relative"
                zIndexValue="1"
                onClickFunction={() => sliderFunctionForRight()}
            />
        </div>
    )
}

export default GraduatesContainer