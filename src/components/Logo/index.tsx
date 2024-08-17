
import { Brand, Container, LogoIcon } from "./styles";

interface LogoProps {
  size: 'sm' | 'md' | 'lg';
  isAdmin?: boolean;
}

export function Logo({size, isAdmin = false}: LogoProps) {
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
