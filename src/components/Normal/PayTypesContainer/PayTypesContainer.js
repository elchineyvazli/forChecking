import './PayTypesContainer.scss'
import PayTypesCard from './../PayTypesCard/PayTypesCard';
import image1 from '../../../images/Main/PayTypes/image1.png'
import image2 from '../../../images/Main/PayTypes/image2.png'
import image3 from '../../../images/Main/PayTypes/image3.png'

const PayTypesContainer = () => {
    return (
        <div className='payTypesContainer'>
            <PayTypesCard
                imageValue={image1}
                h1Value="MilliÖn və E-Manat ödəmə terinalları vasitəsilə"
                widthValue="178px"
            />
            <PayTypesCard
                imageValue={image2}
                h1Value="MilliÖn və E-Manat ödəmə terinalları vasitəsilə"
                widthValue="227px"
            />
            <PayTypesCard
                imageValue={image3}
                h1Value="MilliÖn və E-Manat ödəmə terinalları vasitəsilə"
                widthValue="88px"
            />

        </div>
    )
}

export default PayTypesContainer