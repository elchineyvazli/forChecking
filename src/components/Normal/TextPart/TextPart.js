import "./TextPart.scss"

const TextPart = ({
    hValue,
    pValue,
    hColorValue,
    pColorValue,
    pWidth,
    textPartMarginTop,
    textPartHeight,
    classNameTextPart = "",
    textPartClassName = "textPartClassName"
}) => {
    return (
        <section
            className={`textPart ${classNameTextPart}`}
            style={{
                marginTop: `${textPartMarginTop} `,
                height: `${textPartHeight} `
            }}>
            <h1
                style={{
                    color: `${hColorValue} `
                }}
            >{hValue}</h1>
            <p
                className={`textPartClassName, ${textPartClassName}`}
                style={{
                    color: `${pColorValue} `,
                    width: `${pWidth} `
                }}
            >{pValue}</p>
        </section>
    )
}

export default TextPart