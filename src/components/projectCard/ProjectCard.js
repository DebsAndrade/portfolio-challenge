import React from "react";
import * as S from "../../styles/ProjectsCardsStyle";

const ProjectsCards = () => {
    return(
        <S.ContainerCard>
            <S.Card>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <S.CardImage src="#" alt="#"/>
                </a>
                <S.CardBody>
                    <S.TagBox>
                        <S.TagTech></S.TagTech>
                        <S.TagTech></S.TagTech>
                        <S.TagTech></S.TagTech>
                    </S.TagBox>
                    <S.H4></S.H4>
                    <S.CardParagraph></S.CardParagraph>  
                </S.CardBody>
            </S.Card>
        </S.ContainerCard>
    )
}

export default ProjectsCards;