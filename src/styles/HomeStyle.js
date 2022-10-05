import styled  from "styled-components";

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
`

export const ContainerHome = styled.div`
    width: 80vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
`

export const H1 = styled.h1`
    font-size: 4.5vw;
`

export const H2 = styled.h2`
    font-size: 2.5vw;
`

export const TechnologyLogo = styled.img`
    width: 40vw;
    padding-top: 1.8vw;
`

export const ContainerSocialMedia = styled.div`
    position: absolute;
    bottom: 1.5vw;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
`

export const LinkSocialMedia = styled.a`
    padding: 0 0.5vw 1.5vw 0.5vw;
`

export const ImageSocialMedia = styled.img`
    width: 3vw;
    transition: all 0.8s;
    &:hover {
        -webkit-transform: rotateZ(360deg);
        transform: rotateZ(360deg);
    }
`