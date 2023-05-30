import "./RightArrowButton.scss"
import RightArrow from './../Arrows/RightArrow';

const RightArrowButton = (
    {
        onClickFunction,
        widthValue = "26px",
        heightValue = "26px",
        positionValue,
        zIndexValue
    }
) => {
    return (
        <button
            style={
                {
                    width: `${widthValue}`,
                    height: `${heightValue}`,
                    position: `${positionValue}`,
                    zIndex: `${zIndexValue}`
                }
            }
            className="right arrows"
            onClick={onClickFunction}
        >
            <RightArrow />
        </button>
    )
}

export default RightArrowButton