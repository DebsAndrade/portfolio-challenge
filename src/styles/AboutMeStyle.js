import styled from "styled-components";

export const Main = styled.main`
  width : 76.39vw;
  display : flex;
  align-items : center;
  justify-content : center;
  flex-warp : warp;
  padding : 2.08vw; 
`
export const Content = styled.div`
  position: relative;
  top: -9.72vw;
  padding: 0.69vw 1.04vw;
  color: #111111;
  text-align: center;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s ease-in-out;
`
export const CardContainer = styled.div`
  position: relative;
  width: 43.75vw;
  height: 22.92vw;
  background-color: #FFF;
  margin: 2.08vw 0.69vw;
  padding: 1.39vw 1.04vw;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0.35vw 1.39vw rgba(0,0,0,0.5);
  transition: 0.3s ease-in-out;
  border-radius: 1.04vw;

  &:hover {
    height: 32.64vw;
  }

  &:hover ${Content} {
    margin-top: 2.78vw;
    visibility: visible;
    opacity: 1;
    transition-delay: 0.2s;
  }
`
export const Cover = styled.div`
  position: relative;
  width: 38.89vw;
  height: 27.08vw;
  top: -25%;
  left: 1.39vw;
  box-shadow: 0 0.35vw 1.39vw rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: 1.04vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.69vw;
  padding-top: 0.69vw;
`
export const Stack = styled.img`
  max-width: 18.75vw;
  background-color: white;
`
export const H1 = styled.h1`
  text-align: center;
  font-size: clamp(2.23em, 0.65em, 3em);
`
export const H2 = styled.h2`
  font-size: 1.5em;
  margin-bottom: 0.69vw;
`
export const Paragraph = styled.p`
  font-size: 1em;
  text-align: justify;
  margin-bottom: 1.34vw;
`

export const Container = styled.div`
  height: calc(100vh - 4.1vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
`