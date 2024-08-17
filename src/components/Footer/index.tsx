import { Logo } from "../Logo";
import { Container } from "./styles";

export function Footer(){
  return (
    <Container>
      <Logo size="sm" />
      <small>© 2023 - Todos os direitos reservados</small>
    </Container>
  )
}