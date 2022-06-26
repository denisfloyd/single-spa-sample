import { Link } from "@reach/router";
import styled from "styled-components";

const Title = styled.li`
  color: var(--color-text);
  font-size: 1.5rem;
  font-weight: 500;
  transition: 0.2s color ease-in-out;

  &:hover {
    color: var(--color-secundary);
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }
`;

interface NavLinkProps {
  pathTo: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ pathTo, children }) => {
  return (
    <Title>
      <Link to={pathTo}>{children}</Link>
    </Title>
  );
};
