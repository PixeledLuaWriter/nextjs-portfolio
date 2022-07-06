import { Cross as Hamburger } from "hamburger-react";

const HamburgerMenu = ({ toggled, toggle }) => {
    return (
        <Hamburger
            toggled={toggled}
            toggle={toggle}
            width={30}
            height={30}
            strokeWidth={3}
            strokeColor="#fff"
            animationDuration={0.5}
        />
    )
}

export default HamburgerMenu
