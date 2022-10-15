import { Link } from "react-router-dom";
import styled from "styled-components";

export const UnorderedList = styled.ul`
    display: flex;
    align-items: center;
`

export const ListItem = styled.li`
    display: inline-block;
    font-size: 1.4vw;
    line-height: 4vw;
    padding-inline: 0.8vw;

    @media only screen and (min-width: 800px) {
        &:hover {
            transform: scale(1.3);
        }
    }

    @media only screen and (min-width: 300px) and (max-width: 800px) {
        font-size: 7vw;
        line-height: 12vw;
        padding-inline: 5.5vw;
    }
`

export const ToggleItem = styled.li`
    display: inline-block;
    padding-inline: 0.8vw;
`

export const A = styled(Link)`
    font-size: clamp(1em, 1.88em, 1.25em);
    color: ${({ theme }) => theme.text};
    padding-inline: 1.15vw;
`

export const HeaderNavigation = styled.nav`
    display: flex;
    justify-content: end;
    padding-inline: 1.5vw;
    margin-bottom: 4vw;

    @media only screen and (min-width: 300px) and (max-width: 800px) {
        padding-top: 1.5vw;
        justify-content: center;
        padding-bottom: 8vw
    }
`