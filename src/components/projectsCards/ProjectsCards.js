import React from "react";
import * as S from "../../styles/ProjectsCardsStyle";
import Pokedex from "../../assets/image/pokedex.png";
import FinnLogin from "../../assets/image/finnlogin.png";
import StarWars from "../../assets/image/starwars.png";
import AdaLovelace from "../../assets/image/adalovelace.png";
import TimeOfDay from "../../assets/image/timeofday.png";
import AvengersProject from "../../assets/image/avengers.png";

const ProjectsCards = () => {
    return(
        <S.ContainerCard>
            <S.Card>
                <a href="https://debsandrade.github.io/my-pokedex/" target="_blank" rel="noopener noreferrer">
                    <S.CardImage src={Pokedex} alt="Home screen of my Pokedex project."/>
                </a>
                <S.CardBody>
                    <S.TagBox>
                        <S.TagTech>HTML5</S.TagTech>
                        <S.TagTech>CSS3</S.TagTech>
                    </S.TagBox>
                    <S.H4>Pokédex Project</S.H4>
                    <S.CardParagraph>Web application developed on the Pokemon theme to simulate a pokedex (which would basically be a Pokemon Wikipedia), in order to apply an approach to some DOM events, positioning and also practicing the responsiveness of a website.</S.CardParagraph>  
                </S.CardBody>
            </S.Card>
            <S.Card>
                <a href="https://debsandrade.github.io/projeto-finn/" target="_blank" rel="noopener noreferrer">
                    <S.CardImage src={FinnLogin} alt="FINN login page."/>
                </a>
                <S.CardBody>
                    <S.TagBox>
                        <S.TagTech>HTML5</S.TagTech>
                        <S.TagTech>CSS3</S.TagTech>
                    </S.TagBox>
                    <S.H4>FINN login page</S.H4>
                    <S.CardParagraph>A simple login page to study position using the face of FINN animated series, applying positioning approach.</S.CardParagraph>  
                </S.CardBody>
            </S.Card>
            <S.Card>
                <a href="https://debsandrade.github.io/final-star-wars-project/" target="_blank" rel="noopener noreferrer">
                    <S.CardImage src={StarWars} alt="Star Wars website"/>
                </a>
                <S.CardBody>
                    <S.TagBox>
                        <S.TagTech>HTML5</S.TagTech>
                        <S.TagTech>CSS3</S.TagTech>
                    </S.TagBox>
                    <S.H4>Star Wars Project</S.H4>
                    <S.CardParagraph>Website developed with a Star Wars theme to simulate the promotion of an online game of the franchise, with the objective of applying a positioning approach and practicing the responsiveness of a website.</S.CardParagraph>  
                </S.CardBody>
            </S.Card>
            <S.Card>
                <a href="https://debsandrade.github.io/siteada-debora/" target="_blank" rel="noopener noreferrer">
                    <S.CardImage src={AdaLovelace} alt="Ada Lovelace website design"/>
                </a>
                <S.CardBody>
                    <S.TagBox>
                        <S.TagTech>HTML5</S.TagTech>
                        <S.TagTech>CSS3</S.TagTech>
                        <S.TagTech>JavaScript</S.TagTech>
                    </S.TagBox>
                    <S.H4>Ada Lovelace Website</S.H4>
                    <S.CardParagraph>My first project to create a website about Ada Lovelace. In it I put into practice everything I learned initially about the main technologies of the front end.</S.CardParagraph>  
                </S.CardBody>
            </S.Card>
            <S.Card>
                <a href="https://debsandrade.github.io/hora-do-dia/" target="_blank" rel="noopener noreferrer">
                    <S.CardImage src={TimeOfDay} alt="Project Time of Day"/>
                </a>
                <S.CardBody>
                    <S.TagBox>
                        <S.TagTech>HTML5</S.TagTech>
                        <S.TagTech>CSS3</S.TagTech>
                        <S.TagTech>JavaScript</S.TagTech>
                    </S.TagBox>
                    <S.H4>Project Time of Day</S.H4>
                    <S.CardParagraph>Designing a website to practice positioning and JavaScript technology, applying logic to know the time of day when we open the site.</S.CardParagraph>  
                </S.CardBody>
            </S.Card>
            <S.Card>
                <a href="https://debsandrade.github.io/the-avengers/" target="_blank" rel="noopener noreferrer">
                    <S.CardImage src={AvengersProject} alt="Avengers website design"/>
                </a>
                <S.CardBody>
                    <S.TagBox>
                        <S.TagTech>HTML5</S.TagTech>
                        <S.TagTech>CSS3</S.TagTech>
                    </S.TagBox>
                    <S.H4>Avengers Website</S.H4>
                    <S.CardParagraph>Project of an Avengers Website, showing about the characters using knowledge about positioning of boxes.</S.CardParagraph>  
                </S.CardBody>
            </S.Card>
        </S.ContainerCard>
    )
}

export default ProjectsCards;