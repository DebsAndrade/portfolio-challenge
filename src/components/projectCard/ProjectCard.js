import React from "react";
import * as S from "../../styles/ProjectsCardsStyle";
import Badge from "../badge/Badge";

const ProjectsCards = ({ title, description, url, thumbnail, tags}) => {
    return(
        <S.ContainerCard>
            <S.Card>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <S.CardImage src={thumbnail} alt="Project Thumbnail"/>
                </a>
                <S.CardBody>
                    <S.TagBox>
                        {tags.map(tag => <Badge skill={tag} />)}
                    </S.TagBox>
                    <S.H4>{title}</S.H4>
                    <S.CardParagraph>{description}</S.CardParagraph>  
                </S.CardBody>
            </S.Card>
        </S.ContainerCard>
    )
}

export default ProjectsCards;