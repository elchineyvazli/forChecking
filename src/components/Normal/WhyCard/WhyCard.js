import "./WhyCard.scss";
const WhyCard = ({ logoColor, imageValue, h1Value, pValue }) => {
    return (
        <div className="whyCard">
            <div
                className="whyLogo"
                style={{
                    backgroundColor: `${logoColor}`,
                }}
            >
                <img src={imageValue} alt="sekil yoxdur" />
            </div>
            <h1>{h1Value}</h1>
            <p>{pValue}</p>
        </div>
    );
};

export default WhyCard;
