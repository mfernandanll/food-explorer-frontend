import { CaretLeft } from "@phosphor-icons/react";
import { Container } from "./styles";
import { ButtonHTMLAttributes } from "react";

interface ButtonTextProps extends ButtonHTMLAttributes<HTMLElement>{
  title: string;
  iconSize: number;
  onClick?: () => void;
}

export function ButtonText({title, iconSize, onClick, ...rest}: ButtonTextProps) {
  return (
    <Container 
      onClickCapture={onClick}
      {...rest}
      type="button"
    >
      <CaretLeft size={iconSize} />
      {title}
    </Container>
  )
}