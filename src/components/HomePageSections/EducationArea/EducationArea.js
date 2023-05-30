import "./EducationArea.scss"
import TextPart from './../../Normal/TextPart/TextPart';
import EducationAreaContainer from '../../Normal/EducationAreaContainer/EducationAreaContainer';
import decorGroup2 from "../../../images/Main/EducationArea/decorGroup2.png"

const EducationArea = () => {
    return (
        <div className='educationArea'>
            <img className="decorGroup2" src={decorGroup2} alt="sekil yoxdur" />
            <TextPart hValue="Tədris Sahələri"
                pValue="JED Academy-də siz proqramlaşdırma sahəsinin ən tələb edilən istiqamətləri üzrə təhsil ala bilərsiniz"
                hColorValue="#FF7A00"
                pColorValue="#FDFDFD"
                pWidth='40%'
                textPartHeight='150px'
            />
            <EducationAreaContainer />
        </div>
    )
}

export default EducationArea