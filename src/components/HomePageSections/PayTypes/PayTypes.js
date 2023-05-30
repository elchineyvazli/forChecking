import './PayTypes.scss'
import TextPart from './../../Normal/TextPart/TextPart';
import decorGroup from '../../../images/Main/PayTypes/decorGroup.png'
import PayTypesContainer from './../../Normal/PayTypesContainer/PayTypesContainer';

const PayTypes = () => {
    return (
        <section className="payTypes">
            <img className='decorGroup' src={decorGroup} alt="sekil yoxdur" />
            <TextPart hValue="Ödəmə üsulları"
                pValue="Artıq JedAcademy ödənişlərini FizzaPay ilə ödəmək mümkündür"
                hColorValue="#102B55"
                pColorValue="#FF7A00"
                pWidth="90%"
            />  
            <PayTypesContainer />

        </section>
    )
}

export default PayTypes