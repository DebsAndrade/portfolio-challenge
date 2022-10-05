import React from "react";
import Email from "../../assets/image/email.svg";
import Discord from "../../assets/image/discord.svg";
import GitHub from "../../assets/image/github.svg";
import Instagram from "../../assets/image/instagram.svg";
import Linkedin from "../../assets/image/linkedin.svg";
import Resume from "../../assets/image/resume.svg";
import Technology from "../../assets/image/technology.svg";
import Header from "../../components/header/Header";
import * as S from "../../styles/HomeStyle";

function Home() {
    return(
        <S.Wrapper>
            <Header />
            <S.ContainerHome>
                <S.H1>Débora Andrade</S.H1>
                <S.H2>Front End Developer</S.H2>
                <S.TechnologyLogo src={Technology} alt="Front end Technologies" />
            </S.ContainerHome>
            <S.ContainerSocialMedia>
                <S.LinkSocialMedia href="mailto:deboraellenandrade@gmail.com" target="_blank" rel="noopener noreferrer">
                <S.ImageSocialMedia src={Email} alt="Email logo" />
                </S.LinkSocialMedia>
                <S.LinkSocialMedia href="https://discordapp.com/users/805006996838940682" target="_blank" rel="noopener noreferrer">
                <S.ImageSocialMedia src={Discord} alt="Discord logo" />
                </S.LinkSocialMedia>
                <S.LinkSocialMedia href="https://github.com/DebsAndrade" target="_blank" rel="noopener noreferrer">
                <S.ImageSocialMedia src={GitHub} alt="GitHub logo" />
                </S.LinkSocialMedia>
                <S.LinkSocialMedia href="https://www.instagram.com/deboraellenandrade/" target="_blank" rel="noopener noreferrer">
                <S.ImageSocialMedia src={Instagram} alt="Instagram logo" />
                </S.LinkSocialMedia>
                <S.LinkSocialMedia href="https://www.linkedin.com/in/deb-andrade/" target="_blank" rel="noopener noreferrer">
                <S.ImageSocialMedia src={Linkedin} alt="Linkedin logo" />
                </S.LinkSocialMedia>
                <S.LinkSocialMedia href="https://drive.google.com/file/d/1d_3_c1TxFZ93i3XXbh4Wifs2BBjt8ai7/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <S.ImageSocialMedia src={Resume} alt="Resume" />
                </S.LinkSocialMedia>
            </S.ContainerSocialMedia>
        </S.Wrapper>
    )
}

export default Home;