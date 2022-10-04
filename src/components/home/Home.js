import React from "react";
import Navigation from "../navigation/Navigation";
import Email from "../../assets/image/email.svg";
import Discord from "../../assets/image/discord.svg";
import GitHub from "../../assets/image/github.svg";
import Instagram from "../../assets/image/instagram.svg";
import Linkedin from "../../assets/image/linkedin.svg";
import Resume from "../../assets/image/resume.svg";

function Home() {
    return(
        <>
            <Navigation />
            <div>
                <h1>Débora Andrade</h1>
                <h2>Front End Developer</h2>
                <a href="mailto:deboraellenandrade@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src={Email} alt="Email logo" />
                </a>
                <a href="https://discordapp.com/users/805006996838940682" target="_blank" rel="noopener noreferrer">
                <img src={Discord} alt="Discord logo" />
                </a>
                <a href="https://github.com/DebsAndrade" target="_blank" rel="noopener noreferrer">
                <img src={GitHub} alt="GitHub logo" />
                </a>
                <a href="https://www.instagram.com/deboraellenandrade/" target="_blank" rel="noopener noreferrer">
                <img src={Instagram} alt="Instagram logo" />
                </a>
                <a href="https://www.linkedin.com/in/deb-andrade/" target="_blank" rel="noopener noreferrer">
                <img src={Linkedin} alt="Linkedin logo" />
                </a>
                <a href="https://drive.google.com/file/d/1d_3_c1TxFZ93i3XXbh4Wifs2BBjt8ai7/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <img src={Resume} alt="Resume" />
                </a>
            </div>
        </>
    )
}

export default Home;