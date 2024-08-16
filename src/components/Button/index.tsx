import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";
import { Icon } from "@phosphor-icons/react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement>{
  title: string;
  icon?: Icon;
  loading?: boolean;
}

export function Button({icon: Icon, title, loading = false, ...rest}: ButtonProps){
  return (
    <Container 
      type="button"
      disabled={loading} 
      {...rest}
    >
      {Icon && <Icon size={"2rem"} />}
      {loading ? "Carregando..." : title}
    </Container>
  )
}