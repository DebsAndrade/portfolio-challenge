import React from "react";
import NavigationLogo from "../../assets/image/logo-navigation.svg";
import Navigation from "../navigation/Navigation";
import styled from "styled-components";

const ImgHeader = styled.img`
    width: 3.8vw;
    padding: 1vw;
`

function Header() {
    return(
        <>
            <ImgHeader src={NavigationLogo} alt="Navigation logo" />
            <Navigation />
        </>
    )
}

export default Header;