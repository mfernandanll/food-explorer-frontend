
import { Container, LogoIcon } from "./styles";

export function Logo({size}) {
  return (
    <Container $size={size}>
      <LogoIcon $size={size}/>

      <h1>food explorer</h1>
    </Container>
  );
}
