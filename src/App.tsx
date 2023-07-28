import { Button, Container } from "@mui/material";

function App() {
  return (
    <Container maxWidth="xl">
      <h1>Hola mundo</h1>
      <Button variant="contained" onClick={() => console.log("hola")}>
        Enviar
      </Button>
    </Container>
  );
}

export default App;
