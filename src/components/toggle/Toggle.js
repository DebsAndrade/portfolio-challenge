import React from 'react'
import { func, string } from 'prop-types';
import ToggleContainer from "../../styles/ToggleStyle";
import { ReactComponent as MoonIcon } from '../../assets/image/moon.svg';
import { ReactComponent as SunIcon } from '../../assets/image/sun.svg';

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme} >
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;