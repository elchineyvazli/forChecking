import "./TeachersContainer.scss"
import LeftArrowButton from './../LeftArrowButton/LeftArrowButton';
import RightArrowButton from './../RightArrowButton/RightArrowButton';
import { useState } from "react";
import TeachersCard from './../TeachersCard/TeachersCard';

//! Images

import image1 from '../../../images/Main/Teachers/person1.png'
import image2 from '../../../images/Main/Teachers/person2.png'
import image3 from '../../../images/Main/Teachers/person3.png'
import image4 from '../../../images/Main/Teachers/person4.png'

const TeachersContainer = () => {

    const [translateX, setTranslateX] = useState(0)

    const sliderFunctionForLeft = () => {
        if (translateX < 0) {
            setTranslateX(prev => prev + 315)
            console.log(translateX);
        }
    }

    const sliderFunctionForRight = () => {
        if (translateX > -1240) {
            setTranslateX(prev => prev - 315)
            console.log(translateX);
        }
    }

    return (
        <div className="teachersContainer">
            <div className="buttonPart">
                <LeftArrowButton
                    onClickFunction={() => sliderFunctionForLeft()}
                    widthValue="27px"
                    heightValue="27px"
                    positionValue="static"
                    zIndexValue={null}
                />
                <RightArrowButton
                    onClickFunction={() => sliderFunctionForRight()}
                    widthValue="27px"
                    heightValue="27px"
                    positionValue="static"
                    zIndexValue={null}
                />
            </div>
            <div className="containerforSlider">
                <div className="sliderGraduate">
                    <div className="insideSliderGraduate"
                        style={{
                            transform: `translateX(${translateX}px)`,
                            transition: ".6s"
                        }}
                    >
                        <TeachersCard
                            imageValue={image1}
                            nameValue="Leslie Alexander"
                            whichJob="Frontend developer"
                        />
                        <TeachersCard
                            imageValue={image2}
                            nameValue="Robert Fox"
                            whichJob="Frontend developer"
                        />
                        <TeachersCard
                            imageValue={image3}
                            nameValue="Devon Lane"
                            whichJob="Frontend developer"
                        />
                        <TeachersCard
                            imageValue={image4}
                            nameValue="Kathryn Murphy"
                            whichJob="Frontend developer"
                        />
                        <TeachersCard
                            imageValue={image1}
                            nameValue="Leslie Alexander"
                            whichJob="Frontend developer"
                        />
                        <TeachersCard
                            imageValue={image2}
                            nameValue="Robert Fox"
                            whichJob="Frontend developer"
                        />
                        <TeachersCard
                            imageValue={image3}
                            nameValue="Devon Lane"
                            whichJob="Frontend developer"
                        />
                        <TeachersCard
                            imageValue={image4}
                            nameValue="Kathryn Murphy"
                            whichJob="Frontend developer"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeachersContainer