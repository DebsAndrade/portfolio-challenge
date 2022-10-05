import styled from "styled-components";

export const ListItem = styled.li`
    display: inline-block;
    font-size: 1.25vw;
    line-height: 4.22vw;
    padding-inline: 1.15vw;
`
export const A = styled.a`
    box-shadow: inset 0 0 0 0 #201C49;
    color: #201C49;
    padding-inline: 1.15vw;
    transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    border-radius: 20px;
    &:hover {
        box-shadow: inset 6vw 0 0 0 #201C49;
        color: white;
    }
`

export const HeaderNavigation = styled.nav`
    display: flex;
    float: right;
`