import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import styled from "styled-components";
import Programmer from "./assets/image/programmer.svg";
import Navigation from "./components/navigation/Navigation";
import SocialMedias from "./components/socialMedias/SocialMedias";

const Main = styled.main`
  width : 1100px;
  display : flex;
  align-items : center;
  justify-content : center;
  flex-warp : warp;
  padding : 30px; 
`
const Content = styled.div`
  position: relative;
  top: -140px;
  padding: 10px 15px;
  color: #111111;
  text-align: center;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s ease-in-out;
`
const CardContainer = styled.div`
  position: relative;
  width: 630px;
  height: 330px;
  background-color: #FFF;
  margin: 30px 10x;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 20px rgba(0,0,0,0.5);
  transition: 0.3s ease-in-out;
  border-radius: 15px;

  &:hover {
    height: 470px;
  }

  &:hover ${Content} {
    margin-top: 40px;
    visibility: visible;
    opacity: 1;
    transition-delay: 0.2s;
  }
`
const Cover = styled.div`
  position: relative;
  width: 560px;
  height: 390px;
  top: -25%;
  left: 20px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: 15px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: 10px;
`
const Stack = styled.img`
  max-width: 270px;
  background-color: white;
`
const H1 = styled.h1`
  text-align: center;
  font-size: clamp(2.23em, 2.5vw, 3em);
`
const H2 = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`
const Paragraph = styled.p`
  font-size: 1em;
  text-align: justify;
  margin-bottom: 25px;
`

const Container = styled.div`
  height: calc(100vh - 4.1vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
`

function App() {
  return (
    <>
      <GlobalStyle />
        <Navigation />
        <Container>
          <Main>
          <CardContainer>
            <Cover>
              <Stack src={Programmer} alt="Front end technologies" />
              <H1>Hi, I'm Débora Andrade</H1>
            </Cover>
            <Content>
              <H2>Front End Developer</H2>
              <Paragraph>
                There live the blind texts far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in bookmarksgrove there live the blind texts far from the countries.
              </Paragraph>
              <SocialMedias />
            </Content>
          </CardContainer>
        </Main>
      </Container>
    </>
  );
}

export default App;
