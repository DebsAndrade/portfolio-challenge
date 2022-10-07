import styled from "styled-components";

export const ListItem = styled.li`
    display: inline-block;
    font-size: 1.25vw;
    line-height: 4vw;
    padding-inline: 0.8vw;

    &:hover {
        -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.3);
    }

    @media only screen and (min-width: 300px) and (max-width: 800px) {
        font-size: 5vw;
        line-height: 12vw;
        padding-inline: 4.5vw;
    }
`
export const A = styled.a`
    font-size: clamp(1em, 1.88em, 1.25em);
    color: #003049;
    padding-inline: 1.15vw;
`

export const HeaderNavigation = styled.nav`
    display: flex;
    justify-content: end;

    @media only screen and (min-width: 300px) and (max-width: 800px) {
        padding-top: 1.5vw;
        justify-content: center;
        padding-bottom: 8vw
    }
`