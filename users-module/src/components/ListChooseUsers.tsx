import { useCallback, useState } from "react";
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
  const [users, setUsers] = useState<User[]>(
    Users.map((user) => ({ ...user, checked: false }))
  );

  const handleClickUser = (userId: number) => {
    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, checked: !user.checked } : user
      )
    );
  };

  return (
    <Container>
      {users.map((user) => (
        <UserBox
          key={user.id}
          user={user}
          selected={user.checked}
          onClick={handleClickUser}
        />
      ))}
    </Container>
  );
};

export default ListChooseUsers;
