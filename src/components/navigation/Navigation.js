import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import * as S from "../../styles/NavigationStyle";
import AboutMe from "../../containers/aboutme/AboutMe"
import Projects from "../../containers/projects/Projects"

const Navigation = () => {
    return(
        <HashRouter>
            <S.HeaderNavigation>
                <ul>
                    <S.ListItem>
                        <S.A to="/">About</S.A>
                    </S.ListItem>
                    <S.ListItem>
                        <S.A to="/projects">Projects</S.A>
                    </S.ListItem>
                </ul>
            </S.HeaderNavigation>
            
            <Routes>
                <Route path="/" element={<AboutMe />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </HashRouter>
    )
}

export default Navigation;