import { Container } from "@mui/material";
import MoviesContainer from "./Components/MoviesContainer";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <Container>
      <NavBar />
      <MoviesContainer />
    </Container>
  );
}

export default App;
