import styled  from "styled-components";

export const ContainerSocialMedia = styled.div`
    text-align: right;
`

export const LinkSocialMedia = styled.a`
    margin-left: 0.7vw;
`

export const ImageSocialMedia = styled.img`
    width: 2.5vw;
    transition: all 0.8s;

    &:hover {
        -webkit-transform: rotateZ(360deg);
        transform: rotateZ(360deg);
    }
`