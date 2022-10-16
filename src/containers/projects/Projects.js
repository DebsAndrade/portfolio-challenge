import React from "react";
import ProjectCard from "../../components/projectCard/ProjectCard";
import OnuOds from "../../assets/image/onu-ods.png";
import Recipes from "../../assets/image/recipes.png";
import StarWars from "../../assets/image/starwars.png";
import Beats from "../../assets/image/beat.png";
import AvengersProject from "../../assets/image/avengers.png";
import TimeOfDay from "../../assets/image/timeofday.png";
import FinnLogin from "../../assets/image/finnlogin.png";
import Pokedex from "../../assets/image/pokedex.png";
import HomeWork from "../../assets/image/home-work.png";
import AdaLovelace from "../../assets/image/adalovelace.png";
import styled from "styled-components";

const projectInfos = [

    {
        title: "ONU-ODS Project",
        description: "Sustainable Development Goals project, putting into practice positioning and responsiveness.",
        thumbnail: OnuOds,
        url: "https://debsandrade.github.io/onu-ods/",
        tags: ["HTML5", "CSS3", "JavaScript", "ReactJS"]
    },

    {
        title: "Recipes Project",
        description: "Project developed in partnership with a colleague to train pair-programming practices using GitHub repositories.",
        thumbnail: Recipes,
        url: "https://debsandrade.github.io/pair-programming/",
        tags: ["HTML5", "CSS3", "JavaScript", "ReactJS"]
    },

    {
        title: "Star Wars Project",
        description: "Website developed with a Star Wars theme to simulate the promotion of an online game of the franchise, with the objective of applying a positioning approach and practicing the responsiveness of a website.",
        thumbnail: StarWars,
        url: "https://debsandrade.github.io/final-star-wars-project/",
        tags: ["HTML5", "CSS3"]
    },

    {
        title: "Pokédex Project",
        description: "Web application developed on the Pokemon theme to simulate a pokedex, in order to apply an approach to some DOM events, positioning and also practicing the responsiveness of a website.",
        thumbnail: Pokedex,
        url: "https://debsandrade.github.io/my-pokedex/",
        tags: ["HTML5", "CSS3", "JavaScript"]
    },

    {
        title: "Beats Project",
        description: "Project in HTML5 and CSS3, putting into practice the positioning of images and sections.",
        thumbnail: Beats,
        url: "https://debsandrade.github.io/projeto-beat/",
        tags: ["HTML5", "CSS3"]
    },

    {
        title: "Avengers Website",
        description: "Project of an Avengers Website, showing about the characters using knowledge about positioning of boxes.",
        thumbnail: AvengersProject,
        url: "https://debsandrade.github.io/the-avengers/",
        tags: ["HTML5", "CSS3"]
    },

    {
        title: "Project Time of Day",
        description: "Designing a website to practice positioning and JavaScript technology, applying logic to know the time of day when we open the site.",
        thumbnail: TimeOfDay,
        url: "https://debsandrade.github.io/hora-do-dia/",
        tags: ["HTML5", "CSS3", "JavaScript"]
    },

    {
        title: "FINN login page",
        description: "A simple login page to study position using the face of FINN animated series, applying positioning approach.",
        thumbnail: FinnLogin,
        url: "https://debsandrade.github.io/projeto-finn/",
        tags: ["HTML5", "CSS3"]
    },

    {
        title: "Home Work",
        description: "Project in HTML5 and CSS3 for personal studies, putting into practice image positioning, use of animations, positioning of boxes and table/form construction.",
        thumbnail: HomeWork,
        url: "https://debsandrade.github.io/home-work-debora/",
        tags: ["HTML5", "CSS3"]
    },

    {
        title: "Ada Lovelace Website",
        description: "My first project to create a website about Ada Lovelace. In it I put into practice everything I learned initially about the main technologies of the front end.",
        thumbnail: AdaLovelace,
        url: "https://debsandrade.github.io/siteada-debora/",
        tags: ["HTML5", "CSS3", "JavaScript"]
    },

];

const ContainerProjects = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

const Projects = () => {
    return(
        <ContainerProjects>
            {projectInfos.map(project => 
                <ProjectCard
                    title={project.title}
                    description={project.description}
                    url={project.url}
                    thumbnail={project.thumbnail}
                    tags={project.tags}
                />
            )}
        </ContainerProjects>
    )
}

export default Projects;