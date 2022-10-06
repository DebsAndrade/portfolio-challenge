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
                I am 27 years old, I am from Brazil and I have been living in Lisbon since 2019. With a degree in Nutritional Sciences in 2016, I decided to make my professional migration in the field of technology at the beginning of 2022. 
                </S.Paragraph>
                <S.Paragraph>
                Find out more about me on my social media.
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