import { useState } from "react";
import styled from "styled-components";
import { Users } from "../utils/users";
import { UserBox } from "./UserBox";

const Container = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

interface User {
  id: number;
  name: string;
  age: number;
  checked: boolean;
}

const ListChooseUsers: React.FC = () => {
  const [users, setUser] = useState<User[]>(
    Users.map((user) => ({ ...user, checked: false }))
  );

  return (
    <Container>
      {users.map((user) => (
        <UserBox key={user.id} user={user} selected={user.checked} />
      ))}
    </Container>
  );
};

export default ListChooseUsers;
