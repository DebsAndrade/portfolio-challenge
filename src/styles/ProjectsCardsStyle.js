import styled from "styled-components";

export const ContainerCard = styled.div`
    display: flex;
    width: calc(100vw - (100vw - 100%));
    gap: 30px;
    justify-content: space-evenly;
    flex-wrap: wrap;

    @media only screen and (min-width: 300px) and (max-width: 800px) {
        width: 100vw;
    }
`

export const Card = styled.div`
    margin: 15px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    width: 600px;
    transition: all 0.2s;

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
    padding: 5px 20px;
    height: 150px;

    @media only screen and (min-width: 300px) and (max-width: 800px) {
        height: 200px;
    }
`

export const TagBox = styled.div`
    display: flex;
    gap: 5px;
`

export const TagTech = styled.span`
    background: red;
    border-radius: 50px;
    font-size: 10px;
    font-weight: 600;
    margin: 0;
    color: #fff;
    padding: 2px 8px;
    text-transform: uppercase;
    cursor: pointer;
`

export const H4 = styled.h4`
    margin-block: 10px;
`

export const CardParagraph = styled.p`
    font-size: 13px;
`