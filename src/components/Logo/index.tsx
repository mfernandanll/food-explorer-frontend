
import { useAuth } from "../../hooks/auth";
import { Brand, Container, LogoIcon } from "./styles";

interface LogoProps {
  size: 'sm' | 'md' | 'lg';
}

export function Logo({size}: LogoProps) {
  const { checkIfUserIsAdmin } = useAuth();
  const isAdmin = checkIfUserIsAdmin();

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
