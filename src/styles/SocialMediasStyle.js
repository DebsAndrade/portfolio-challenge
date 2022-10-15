import styled  from "styled-components";

export const ContainerSocialMedia = styled.div`
    text-align: right;

    svg {
        height: auto;
        width: 2.5vw;
        transition: all 0.8s;
        fill: ${({ theme }) => theme.colorIcon};

        &:hover {
            -webkit-transform: rotateZ(360deg);
            transform: rotateZ(360deg);
        }

        @media only screen and (min-width: 300px) and (max-width: 800px) {
            width: 10vw;
        }
    }

    @media only screen and (min-width: 300px) and (max-width: 800px) {
        margin-top: 7vw;
        text-align: center;
    }
`

export const LinkSocialMedia = styled.a`
    margin-left: 0.7vw;

    @media only screen and (min-width: 300px) and (max-width: 800px) {
        margin-inline: 2.2vw;
    }
`