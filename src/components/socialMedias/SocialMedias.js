import React from "react"
import { ReactComponent as Email } from "../../assets/image/email.svg";
import { ReactComponent as Discord } from "../../assets/image/discord.svg";
import { ReactComponent as GitHub } from "../../assets/image/github.svg";
import { ReactComponent as Instagram } from "../../assets/image/instagram.svg";
import { ReactComponent as Linkedin } from "../../assets/image/linkedin.svg";
import { ReactComponent as Resume } from "../../assets/image/resume.svg";
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
                <Email />
            </S.LinkSocialMedia>
            <S.LinkSocialMedia href={hrefMap.discord} target="_blank" rel="noopener noreferrer">
                <Discord />
            </S.LinkSocialMedia>
            <S.LinkSocialMedia href={hrefMap.github} target="_blank" rel="noopener noreferrer">
                <GitHub />
            </S.LinkSocialMedia>
            <S.LinkSocialMedia href={hrefMap.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram />
            </S.LinkSocialMedia>
            <S.LinkSocialMedia href={hrefMap.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin />
            </S.LinkSocialMedia>
            <S.LinkSocialMedia href={hrefMap.resume} target="_blank" rel="noopener noreferrer">
                <Resume />
            </S.LinkSocialMedia>
        </S.ContainerSocialMedia>
    )
}

export default SocialMedias