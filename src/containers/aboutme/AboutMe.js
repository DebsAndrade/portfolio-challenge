import React from "react";
import Programmer from "../../assets/image/programmer.svg";
import SocialMedias from "../../components/socialMedias/SocialMedias";
import * as S from "../../styles/AboutMeStyle";

function AboutMe() {
    return (
      <>
        <S.Container>
          <S.Main>
            <S.CardContainer>
              <S.Cover>
                <S.Stack src={Programmer} alt="Front end technologies" />
                <S.H1>Hi, I'm Débora Andrade</S.H1>
              </S.Cover>
              <S.Content>
                <S.H2>Front End Developer</S.H2>
                <S.Paragraph>
                I'm 27 years old, I'm Brazilian and I live in Lisbon/PT. Graduated in Nutrition Sciences in 2016 and at the beginning of 2022 I decided to make my career migration to the technology area. Come get to know me better on my social media.
                </S.Paragraph>
                <SocialMedias />
              </S.Content>
            </S.CardContainer>
          </S.Main>
        </S.Container>
      </>
    );
  }
  
  export default AboutMe;