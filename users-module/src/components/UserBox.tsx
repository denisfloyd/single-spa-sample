import styled from "styled-components";

import { Users } from "../utils/users";

export const Box = styled.li`
  padding: 2rem;
  background-color: var(--color-primary);
  color: var(--color-text);
  cursor: pointer;

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
}

export const UserBox: React.FC<UserBox> = ({ user }) => {
  return (
    <Box>
      <h2>{user.name}</h2>
      <p>{user.age} years</p>
    </Box>
  );
};
