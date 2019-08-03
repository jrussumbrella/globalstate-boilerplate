import React, { useContext } from "react";
import { ThemeContext } from "../globalState";
import styled from "styled-components";

const Nav = styled.nav`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${props => (props.isDark ? "#000" : "#FFF")}
  border-bottom: 1px solid #eee;
`;

const Header = () => {
  const { changeTheme, isDark } = useContext(ThemeContext);

  return (
    <Nav isDark={isDark}>
      <a href="#"> Home </a>
      <button onClick={() => changeTheme()}> Change Theme </button>
    </Nav>
  );
};

export default Header;
