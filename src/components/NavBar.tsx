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

  background-color: white;
  border-radius: 3rem;
  padding: 0 1rem 1rem 2rem;
  margin: 0 2rem; 0 2rem;
  margin-top: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  border: 2px solid black;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  margin: 0 1rem;

  &:hover {
    color: gray;
    text-decoration: underline;
  }
`;

const NavBar = () => {
  return (
    <NavCard>
      <Nav>
        <NavLink to="/">
          <Pill>Home</Pill>
        </NavLink>
        <NavLink to="/list">
          <Pill>Amiibo List</Pill>
        </NavLink>
        <NavLink to="/search">
          <Pill>Search</Pill>
        </NavLink>
        <NavLink to="/about">
          <Pill>About</Pill>
        </NavLink>
      </Nav>
    </NavCard>
  );
};

export default NavBar;
// Christian Rudder ---------------------------
