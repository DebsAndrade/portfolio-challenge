import styled from "styled-components";

export const ContainerCard = styled.div`
    display: flex;

    @media only screen and (min-width: 300px) and (max-width: 800px) {
        width: 90vw;
    }
`

export const Card = styled.div`
    margin: 15px;
    background-color: ${({ theme }) => theme.backgroundCards};
    border-radius: 10px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    width: 600px;
    transition: all 0.2s;
    border: ${({ theme }) => theme.borderCard};

    &:hover {
        box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
        transform: scale(1.01);
    }
`

export const CardImage = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
    display: block;
`

export const CardBody = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 30px 15px 15px 15px;
`

export const TagBox = styled.div`
    display: flex;
    gap: 5px;
`

export const H4 = styled.h4`
    margin-block: 10px;

    @media only screen and (min-width: 300px) and (max-width: 800px) {
        font-size: 1.6em;
    }
`

export const CardParagraph = styled.p`
    font-size: 1.3vw;

    @media only screen and (min-width: 300px) and (max-width: 800px) {
        font-size: 1.3em;
        text-align: justify;
    }
`