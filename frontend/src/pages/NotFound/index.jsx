import { Link } from "react-router-dom";
import { Container } from "./styles";

function NotFound() {
  return (
    <Container>
      <h1>Página indisponível</h1>
      <Link to="/">voltar para o início</Link>
    </Container>
  )
}

export default NotFound