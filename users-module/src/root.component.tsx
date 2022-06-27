import styled from "styled-components";
import { ListTeams } from "@df/teams-module";

import { Users } from "./utils/users";

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export default function Root(props) {
  return (
    <>
      <ListTeams />

      <Container>
        {Users.map((user) => (
          <span>{user.name}</span>
        ))}
      </Container>
    </>
  );
}
