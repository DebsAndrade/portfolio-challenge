import React from "react";
import styled, { css } from "styled-components";

const Tag = styled.span`
    border-radius: 50px;
    font-size: 0.8em;
    font-weight: 600;
    margin: 0;
    color: #fff;
    padding: 2px 8px;
    text-transform: uppercase;
    cursor: pointer;

    ${(props) => {
        switch (props.skill) {
            case "HTML5":
              return css`background-color: #E55233;`;
            case "CSS3":
              return css`background-color: #2473B8;`;
            case "JavaScript":
              return css`background-color: #E5A33D;`;
            case "ReactJS":
              return css`background-color: #62DAFA;`;
            default:
              return css`background-color: #AAA;`;
        }
    }}
`

const Badge = ({ skill }) => {
    return (<Tag skill={skill}>{skill}</Tag>)
};

export default Badge;