import "./Teachers.scss"
import TextPart from './../../Normal/TextPart/TextPart';
import TeachersContainer from './../../Normal/TeachersContainer/TeachersContainer';
import ShowAllOfThem from "../../Normal/ShowAllOfThem/ShowAllOfThem";

const Teachers = () => {


    return (
        <section className="teachers">
            <TextPart hValue="Müəllimlərimiz"
                pValue="Lorem ipsum dolor sit amet consectetur. Aliquet id tincidunt sit magna. Lorem ipsum dolor sit amet consectetur.Aliquet id tincidunt"
                hColorValue="#102B55"
                pColorValue="#FF7A00"
            />
            <TeachersContainer />
            <ShowAllOfThem
                whereValue="/"
            />
        </section>
    )
}

export default Teachers