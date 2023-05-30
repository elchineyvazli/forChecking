import './PayTypesCard.scss'

const PayTypesCard = ({ imageValue, h1Value, widthValue }) => {
    return (
        <div className='payTypesCard'>
            <img style={{
                width: `${widthValue}`
            }}
                src={imageValue}
                alt="sekil yoxdur"
            />
            <h1>{h1Value}</h1>
        </div>
    )
}

export default PayTypesCard