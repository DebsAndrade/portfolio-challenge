import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as S from "../../styles/NavigationStyle";
import AboutMe from "../../containers/aboutme/AboutMe"
import Projects from "../../containers/projects/Projects"
import Onu from "../../containers/onu/Onu"

const Navigation = () => {
    return(
        <BrowserRouter>
            <S.HeaderNavigation>
                <ul>
                    <S.ListItem>
                        <S.A to="/">About</S.A>
                    </S.ListItem>
                    <S.ListItem>
                        <S.A to="/projects">Projects</S.A>
                    </S.ListItem>
                    <S.ListItem>
                        <S.A to="/onu">ONU</S.A>
                    </S.ListItem>
                </ul>
            </S.HeaderNavigation>
            
            <Routes>
                <Route path="/" element={<AboutMe />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/onu" element={<Onu />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation;