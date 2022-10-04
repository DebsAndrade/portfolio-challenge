import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
    display: inline-block;
    line-height: 4.22vw;
    padding-inline: 2.29vw;
`

const Navigation = () => {
    return(
        <nav>
            <ul>
                <ListItem><a>Home</a></ListItem>
                <ListItem><a>About</a></ListItem>
                <ListItem><a>Work</a></ListItem>
                <ListItem><a>ONU</a></ListItem>
            </ul>
        </nav>
    )
}

export default Navigation;