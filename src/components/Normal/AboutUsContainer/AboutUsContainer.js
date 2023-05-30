import './AboutUsContainer.scss'
import image1 from '../../../images/Main/AboutUs/aboutUsImage1.png'
import image2 from '../../../images/Main/AboutUs/aboutUsImage2.png'
import Button from './../Button/Button';
import { useState } from 'react';

const AboutUsContainer = () => {
    const [isHover, setIsHover] = useState(false)

    const handleMouseEnter = () => {
        setIsHover(true)
    }

    const handleMouseLeave = () => {
        setIsHover(false)
    }

    return (
        <div className='aboutUsContainer'>
            <img className='leftAbout' src={image1} alt="sekil yoxdur" />
            <div className="middleAbout">
                <h1>JED Academy Proqramlaşdırma və İT kursları</h1>

                <p>
                    Lorem ipsum dolor sit amet consectetur.
                    Scelerisque mauris tellus velit donec.
                    Aliquet lacus sit tortor facilisis.
                    Cras diam vulputate non in imperdiet ac in suspendisse eget.
                    Orci sapien molestie massa sem elementum duis eget.
                    Maecenas eu purus non risus lobortis.
                    Dolor cras feugiat arcu nullam viverra nisi proin penatibus tortor.
                    Tortor mattis diam sagittis consequat enim.
                </p>

                <Button
                    buttonWidth='179px'
                    buttonHeight="44px"
                    buttonColor="white"
                    buttonValue="Ətraflı ->"
                    buttonBackgroundColor={isHover ? "#173D7A" : '#FF7A00'}
                    buttonBorder={isHover && `solid 2px #FF7A00`}
                    mouseEnterFunction={handleMouseEnter}
                    mouseLeaveFunction={handleMouseLeave}
                />
            </div>
            <div className="rightAbout">
                <img src={image2} alt="sekil yoxdur" />
            </div>
        </div>
    )
}

export default AboutUsContainer