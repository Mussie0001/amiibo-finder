/**
 * NavBar component renders a navigation bar with links to different routes.
 *
 * The navigation bar has a gray background, white text, and uses Comic Sans MS font.
 * It contains four links: Home, Amiibo List, Search, and About.
 *
 * @component
 */

import styled from "styled-components";

// Christian Rudder ---------------------------
// Navigation bar
import { Pill } from "./styles/amiibo-styled";
import { Link } from "react-router-dom";

const NavCard = styled.div`
  background-color: black;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 2rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  width: 100%;
  height: 45px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: gray;
    background-color: #3b82f6;
    color: white;
  }
`;

const NavBar = () => {
  return (
    <NavCard>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/list">Amiibo List</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/about">About</NavLink>
      </Nav>
    </NavCard>
  );
};

export default NavBar;
// Christian Rudder ---------------------------
