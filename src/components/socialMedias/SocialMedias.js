import React from "react"
import Email from "../../assets/image/email.svg";
import Discord from "../../assets/image/discord.svg";
import GitHub from "../../assets/image/github.svg";
import Instagram from "../../assets/image/instagram.svg";
import Linkedin from "../../assets/image/linkedin.svg";
import Resume from "../../assets/image/resume.svg";
import * as S from "../../styles/SocialMediasStyle"

const hrefMap = Object.freeze({
    email: "mailto:deboraellenandrade@gmail.com",
    discord: "https://discordapp.com/users/805006996838940682",
    github: "https://github.com/DebsAndrade",
    instagram: "https://www.instagram.com/deboraellenandrade",
    linkedin: "https://www.linkedin.com/in/deb-andrade",
    resume: "https://drive.google.com/file/d/1d_3_c1TxFZ93i3XXbh4Wifs2BBjt8ai7/view?usp=sharing"
})

const SocialMedias = () => {
    return (
        <S.ContainerSocialMedia>
            <S.LinkSocialMedia href={hrefMap.email} target="_blank" rel="noopener noreferrer">
                <S.ImageSocialMedia src={Email} alt="Email logo" />
            </S.LinkSocialMedia>
            <S.LinkSocialMedia href={hrefMap.discord} target="_blank" rel="noopener noreferrer">
                <S.ImageSocialMedia src={Discord} alt="Discord logo" />
            </S.LinkSocialMedia>
            <S.LinkSocialMedia href={hrefMap.github} target="_blank" rel="noopener noreferrer">
                <S.ImageSocialMedia src={GitHub} alt="GitHub logo" />
            </S.LinkSocialMedia>
            <S.LinkSocialMedia href={hrefMap.instagram} target="_blank" rel="noopener noreferrer">
                <S.ImageSocialMedia src={Instagram} alt="Instagram logo" />
            </S.LinkSocialMedia>
            <S.LinkSocialMedia href={hrefMap.linkedin} target="_blank" rel="noopener noreferrer">
                <S.ImageSocialMedia src={Linkedin} alt="Linkedin logo" />
            </S.LinkSocialMedia>
            <S.LinkSocialMedia href={hrefMap.resume} target="_blank" rel="noopener noreferrer">
                <S.ImageSocialMedia src={Resume} alt="Resume" />
            </S.LinkSocialMedia>
        </S.ContainerSocialMedia>
    )
}

export default SocialMedias