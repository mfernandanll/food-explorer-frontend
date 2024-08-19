
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { Brand, Container, LogoIcon } from "./styles";

interface LogoProps {
  size: 'sm' | 'md' | 'lg';
}

export function Logo({size}: LogoProps) {
  const { checkIfUserIsAdmin } = useAuth();
  const isAdmin = checkIfUserIsAdmin();

  const navigate = useNavigate();

  function handleNavigate(){
    navigate('/');
  }

  return (
    <Container $size={size} onClickCapture={handleNavigate}>
      <Brand $size={size}>
        <LogoIcon $size={size}/>

        <h1>food explorer</h1>
      </Brand>

      {isAdmin && <small>admin</small>}
    </Container>
  );
}
