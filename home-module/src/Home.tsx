import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  height: 100px;
  width: 100%;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
`;

const Container = styled.section`
  margin-top: 100px;
  height: calc(100vh - 100px);
`;

const SideMenu = styled.aside`
  width: 200px;
  height: 100%;
  background-color: red;
`;

const Home: React.FC = () => {
  return (
    <>
      <Header>
        <h1>HEADER</h1>
      </Header>

      <Container>
        <SideMenu />
      </Container>
    </>
  );
};

export default Home;
