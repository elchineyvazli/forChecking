import "./Graduates.scss"
import TextPart from './../../Normal/TextPart/TextPart';
import GraduatesContainer from './../../Normal/GraduatesContainer/GraduatesContainer';
import decorGroup from "../../../images/Main/Graduates/decorGroup.png"
import ShowAllOfThem from './../../Normal/ShowAllOfThem/ShowAllOfThem';

const Graduates = () => {
    return (
        <section
            className="graduates"
        >
            <img
                className="decorGroupGraduate"
                src={decorGroup}
                alt="sekil yoxdur"
            />
            <TextPart
                hValue="Məzunlarımız"
                pValue="Lorem ipsum dolor sit amet consectetur. Aliquet id tincidunt sit magna. Lorem ipsum dolor sit amet consectetur.Aliquet id tincidunt"
                hColorValue="#102B55" pColorValue="#FF7A00"
                textPartHeight="123px"
                classNameTextPart="graduatesTextPart"
            />
            <GraduatesContainer
                classNameValue="containerGraduate"
            />
            <ShowAllOfThem
                whereValue="/"
            />
        </section>
    )
}

export default Graduates