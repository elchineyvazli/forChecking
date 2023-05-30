import './Button.scss'

const Button = (
    {
        buttonValue,
        buttonWidth,
        buttonHeight,
        buttonColor,
        buttonBackgroundColor,
        buttonBorderRadius,
        buttonBorder,
        mouseLeaveFunction,
        mouseEnterFunction
    }
) => {
    // const [isHover, setIsHover] = useState(false)

    // const handleMouseEnter = () => {
    //     setIsHover(true)
    // }

    // const handleMouseLeave = () => {
    //     setIsHover(false)
    // }

    return (
        <button
            className='totalButton'
            style={{
                width: `${buttonWidth}`,
                height: `${buttonHeight}`,
                backgroundColor: `${buttonBackgroundColor}`,
                color: `${buttonColor}`,
                borderRadius: `${buttonBorderRadius}`,
                border: `${buttonBorder}`
            }}
            onMouseEnter={mouseEnterFunction}
            onMouseLeave={mouseLeaveFunction}
        >{buttonValue}</button>
    )
}

export default Button