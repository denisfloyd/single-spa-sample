import styled from "styled-components";
import { NavLink } from "./components/NavLink";

const Header = styled.header`
  position: fixed;
  top: 0;
  height: 100px;
  width: 100%;
  background-color: var(--color-background);
  display: flex;
  align-items: center;

  ul {
    list-style: none;

    display: flex;
    gap: 2rem;
  }
`;

const Navbar: React.FC = () => {
  return (
    <Header>
      <ul>
        <NavLink pathTo="/teams">Teams</NavLink>
        <NavLink pathTo="/users">Users</NavLink>
      </ul>
    </Header>
  );
};

export default Navbar;
