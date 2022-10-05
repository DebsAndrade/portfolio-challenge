import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
    display: inline-block;
    font-size: 1.25vw;
    line-height: 4.22vw;
    padding-inline: 2.29vw;
`
const A = styled.a`
    color: #339081;
`

const HeaderNavigation = styled.nav`
    display: flex;
    float: right;
`

const Navigation = () => {
    return(
        <HeaderNavigation>
            <ul>
                <ListItem>
                    <A href="#">Home</A>
                </ListItem>
                <ListItem>
                    <A href="#">About</A>
                </ListItem>
                <ListItem>
                    <A href="#">Work</A>
                </ListItem>
                <ListItem>
                    <A href="#">ONU</A>
                </ListItem>
            </ul>
        </HeaderNavigation>
    )
}

export default Navigation;