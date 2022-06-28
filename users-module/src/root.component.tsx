import styled from "styled-components";
import { ListTeams } from "@df/teams-module";

import ListChooseUsers from "./components/ListChooseUsers";

const Container = styled.section``;

export default function Root(props) {
  return (
    <>
      <ListTeams />

      <Container>
        <ListChooseUsers />
      </Container>
    </>
  );
}
