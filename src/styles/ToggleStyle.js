import styled from "styled-components";

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.toggleGradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: auto;
  overflow: hidden;
  padding: 0.2rem 0.3rem;
  position: relative;
  width: 4rem;
  height: 2rem;

  svg {
    height: auto;
    width: 1.5rem;
    transition: all 0.3s linear;
    
    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }
    
    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;

export default ToggleContainer;