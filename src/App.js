import { Header } from "./componentes/Header";
import styled from "styled-components";
import { Body } from "./componentes/Body";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 200px;
  background-color: hsl(36, 100%, 99%);


  @media (max-width: 1000px) {
    padding: 0;
  }
`
function App() {
  return (
    <AppContainer>
      <Header/>
      <Body/>
    </AppContainer>
  );
}

export default App;
