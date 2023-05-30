import "./LeftArrowButton.scss"
import LeftArrow from './../Arrows/LeftArrow';

const LeftArrowButton = (
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
            style=
            {
                {
                    width: `${widthValue}`,
                    height: `${heightValue}`,
                    position: `${positionValue}`,
                    zIndex: `${zIndexValue}`
                }
            }
            className="left arrows"
            onClick={onClickFunction}
        >
            <LeftArrow />
        </button >
    )
}

export default LeftArrowButton