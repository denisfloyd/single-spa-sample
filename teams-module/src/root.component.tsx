import styled from "styled-components";
import { ListUsers } from "@df/users-module";

export const Select = styled.select`
  height: 40px;
  width: 10rem;
`;

export default function Root() {
  return (
    <section>
      <h1>Teams</h1>

      <Select>
        <option value="">Select a teams</option>
        <option value="team-1">Team 1</option>
        <option value="team-2">Team 2</option>
      </Select>

      <ListUsers />
    </section>
  );
}
