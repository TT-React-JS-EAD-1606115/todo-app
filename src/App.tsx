import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Body, Container } from "./styles";

function App() {
  return (
    <Container>
      <Header />

      <Body>
        <Home />
      </Body>
    </Container>
  );
}

export default App;
