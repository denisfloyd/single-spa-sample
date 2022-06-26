import styled from "styled-components";

const Container = styled.ul`
  list-style: none;
`;

const Box = styled.li``;

const ListChooseTeam: React.FC = () => {
  return (
    <Container>
      <Box>Team 1</Box>
      <Box>Team 2</Box>
      <Box>Team 3</Box>
    </Container>
  );
};

export default ListChooseTeam;
