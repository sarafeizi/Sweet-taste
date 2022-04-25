import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components";
import {BsFillBrightnessHighFill} from 'react-icons/bs';
import {BsFillMoonStarsFill} from 'react-icons/bs';
const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  font-size:20px;
  padding: 0.6rem 1rem;
  position: fixed;
  
  position: relative;
  position :fixed;
  right: 20px;
  top: 85px;
  z-index: 4;
  
  }
`;
const Toggle = ({theme,  toggleTheme }) => {
    return (
      <Button onClick={toggleTheme}   >
      {theme==='light' ?  <BsFillMoonStarsFill/>  :   <BsFillBrightnessHighFill/>}
     </Button>
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;