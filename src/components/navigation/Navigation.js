import React from "react";
import NavigationLogo from "../../assets/image/logo-navigation.svg";

function Navigation() {
    return(
        <>
            <img src={NavigationLogo} alt="Navigation logo" />
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Work</li>
                    <li>ONU</li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation;