import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";
import { Icon } from "@phosphor-icons/react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement>{
  title: string;
  icon?: Icon | null;
  loading?: boolean;
  onClick?: () => void;
}

export function Button({icon: Icon, title, loading = false, onClick, ...rest}: ButtonProps){
  return (
    <Container 
      type="button"
      onClickCapture={onClick}
      disabled={loading} 
      {...rest}
    >
      {Icon && <Icon size={"2rem"} />}
      {loading ? "Carregando..." : title}
    </Container>
  )
}