import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
    display: inline-block;
    font-size: 1.25vw;
    line-height: 4.22vw;
    padding-inline: 2.29vw;
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
                    <a href="#">Home</a>
                </ListItem>
                <ListItem>
                    <a href="#">About</a>
                </ListItem>
                <ListItem>
                    <a href="#">Work</a>
                </ListItem>
                <ListItem>
                    <a href="#">ONU</a>
                </ListItem>
            </ul>
        </HeaderNavigation>
    )
}

export default Navigation;