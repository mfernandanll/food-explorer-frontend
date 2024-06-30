
import { Brand, Container, LogoIcon } from "./styles";

export function Logo({size, isAdmin}) {
  return (
    <Container $size={size}>
      <Brand $size={size}>
        <LogoIcon $size={size}/>

        <h1>food explorer</h1>
      </Brand>

      {isAdmin && <small>admin</small>}
    </Container>
  );
}
