import './NavbarRight.scss'

const NavbarRight = (
    {
        onClickFunction
    }
) => {
    return (
        <div className="navbarRight">
            <button className="hMenu" onClick={onClickFunction}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </button>
        </div>
    )
}

export default NavbarRight