import styled from "styled-components";
import { Users } from "./utils/users";

const Container = styled.section``;

const ListUser = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export default function Root(props) {
  return (
    <Container>
      <h1>Users</h1>
      <ListUser>
        {Users.map((user) => (
          <li key={user.id}>
            <h2>Name: {user.name}</h2>
            <p>Age: {user.age} years</p>
            <hr />
          </li>
        ))}
      </ListUser>
    </Container>
  );
}
