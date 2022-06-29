import styled, { css } from "styled-components";

import { Users } from "../utils/users";

interface BoxProps {
  isSelected: boolean;
}

export const Box = styled.li<BoxProps>`
  padding: 2rem;
  background-color: var(--color-background);
  color: var(--color-text);
  cursor: pointer;

  ${(props) =>
    props.isSelected &&
    css`
      background-color: var(--color-primary);
    `}

  h2 {
    margin: 0;
  }

  p {
    margin-bottom: 0;
  }
`;

interface UserBox {
  user: typeof Users[0];
  selected: boolean;
  onClick: (userId: number) => void;
}

export const UserBox: React.FC<UserBox> = ({ user, selected, onClick }) => {
  return (
    <Box onClick={() => onClick(user.id)} isSelected={selected}>
      <h2>{user.name}</h2>
      <p>{user.age} years</p>
    </Box>
  );
};
