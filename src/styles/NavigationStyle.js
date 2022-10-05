import styled from "styled-components";

export const ListItem = styled.li`
    display: inline-block;
    font-size: 1.25vw;
    line-height: 4vw;
    padding-inline: 0.8vw;
`
export const A = styled.a`
    font-size: clamp(1em, 30px, 1.25em);
    box-shadow: inset 0 0 0 0 #003049;
    color: #003049;
    padding-inline: 1.15vw;
    transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    border-radius: 20px;
    &:hover {
        box-shadow: inset 6.5vw 0 0 0 #003049;
        color: white;
    }
`

export const HeaderNavigation = styled.nav`
    display: flex;
    justify-content: end;
`