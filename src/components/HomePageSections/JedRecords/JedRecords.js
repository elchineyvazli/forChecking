import './JedRecords.scss'
import TextPart from './../../Normal/TextPart/TextPart';
import JedRecordsContainer from './../../Normal/JedRecordsContainer/JedRecordsContainer';
import decorGroup from '../../../images/Main/JedRecords/decorGroup.png'

const JedRecords = () => {
    return (
        <section
            className="jedRecords"
        >
            <img className='decorGroupJedRecords' src={decorGroup} alt="sekil yoxdur" />
            <TextPart
                hValue="JED Academydən görüntülər"
                pValue="Lorem ipsum dolor sit amet consectetur. Aliquet id tincidunt sit magna. Lorem ipsum dolor sit amet consectetur.Aliquet id tincidunt"
                hColorValue="#102B55"
                pColorValue="#FF7A00"
            />

            <JedRecordsContainer />
        </section>
    )
}

export default JedRecords