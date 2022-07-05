import { Box } from "@mui/material/Box"
import { Cross as Hamburger } from "hamburger-react";

const HamburgerMenu = ({ toggled, onToggled }) => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center">
        <Hamburger
            toggled={toggled}
            onToggled={onToggled}
            width={30}
            height={30}
            strokeWidth={3}
            strokeColor="#fff"
            animationDuration={0.5}
        />
        </Box>
    )
}

export default HamburgerMenu