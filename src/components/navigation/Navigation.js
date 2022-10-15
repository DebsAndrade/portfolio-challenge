import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import * as S from "../../styles/NavigationStyle";
import AboutMe from "../../containers/aboutme/AboutMe"
import Projects from "../../containers/projects/Projects"
import Toggle from "../toggle/Toggle";

const Navigation = ({theme, toggleTheme}) => {
    return(
        <HashRouter>
            <S.HeaderNavigation>
                <S.UnorderedList>
                    <S.ListItem>
                        <S.A to="/">About</S.A>
                    </S.ListItem>
                    <S.ListItem>
                        <S.A to="/projects">Projects</S.A>
                    </S.ListItem>
                    <S.ToggleItem>
                        <Toggle theme={theme} toggleTheme={toggleTheme} />
                    </S.ToggleItem>
                </S.UnorderedList>
            </S.HeaderNavigation>
            
            <Routes>
                <Route path="/" element={<AboutMe />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </HashRouter>
    )
}

export default Navigation;