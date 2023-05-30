import "./TeachersCard.scss"

const TeachersCard = ({ imageValue, nameValue, whichJob }) => {
    return (
        <div className='teachersCard'>
            <img src={imageValue} alt="sekil yoxdur" />
            <div className="teachersCardBottom">
                <h1>{nameValue}</h1>
                <p>{whichJob}</p>
            </div>
        </div>
    )
}

export default TeachersCard