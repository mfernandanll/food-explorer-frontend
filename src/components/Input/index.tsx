import { InputHTMLAttributes } from "react";
import { Container } from "./styles";
import { Icon } from "@phosphor-icons/react";

interface InputProps extends InputHTMLAttributes<HTMLElement>{
  icon?: Icon | null;
}

export function Input({icon: Icon, ...rest}: InputProps) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </Container>
  )
}