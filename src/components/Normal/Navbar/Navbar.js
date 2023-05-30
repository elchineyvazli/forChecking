import "./Navbar.scss"
import NavbarLeft from './../NavbarLeft/NavbarLeft';
import NavbarMiddle from '../NavbarMiddle/NavbarMiddle';
import NavbarRight from './../NavbarRight/NavbarRight';
import { useState } from "react";

const Navbar = () => {
    const [clicked, setClicked] = useState(false)
    const [close, setClose] = useState(false)
    let value = 100;

    const hMenuFunction = () => {
        setClicked(!clicked)
        setClose(!close)

        // console.log(clicked);
        // console.log(close);
    }

    const closeButtonFunction = () => {
        setClose(!close)
        setClicked(!clicked)

        // console.log(clicked);
        // console.log(close);
    }

    return (
        <nav>
            <NavbarLeft />

            <NavbarMiddle translateXValue={clicked ? value : "0"}
                closeFunction={() => closeButtonFunction()}
            />

            <NavbarRight onClickFunction={() => hMenuFunction()} />
        </nav>
    )
}

export default Navbar