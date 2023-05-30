import './JedRecordsContainer.scss'
import image1 from "../../../images/Main/JedRecords/image1.png"
import image2 from "../../../images/Main/JedRecords/image2.png"
import image3 from "../../../images/Main/JedRecords/image3.png"
import image4 from "../../../images/Main/JedRecords/image4.png"
import image5 from "../../../images/Main/JedRecords/image5.png"
import image6 from "../../../images/Main/JedRecords/image6.png"
import image7 from "../../../images/Main/JedRecords/image7.png"
import image8 from "../../../images/Main/JedRecords/image8.png"

const JedRecordsContainer = () => {
    return (
        <div
            className='jedRecordsContainer'
        >
            <img className='firstImage' src={image1} alt="sekil yoxdur" />

            <div className="secondPart">
                <img src={image2} alt="sekil yoxdur" />
                <img src={image3} alt="sekil yoxdur" />
            </div>

            <div className="thirdPart">
                <img src={image4} alt="sekil yoxdur" />
                <img src={image5} alt="sekil yoxdur" />
            </div>

            <div className="fourthPart">
                <img src={image6} alt="sekil yoxdur" />
                <img src={image7} alt="sekil yoxdur" />
                <img src={image8} alt="sekil yoxdur" />
            </div>

        </div>
    )
}

export default JedRecordsContainer