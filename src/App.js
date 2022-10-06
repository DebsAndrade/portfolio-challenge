import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import Navigation from "./components/navigation/Navigation";
import AboutMe from "./containers/aboutme/AboutMe";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <AboutMe />
    </>
  );
}

export default App;
