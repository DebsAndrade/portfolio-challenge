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
                  There live the blind texts far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in bookmarksgrove there live the blind texts far from the countries.
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