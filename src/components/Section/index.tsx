import { HTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

interface InputFieldProps extends HTMLAttributes<HTMLDivElement>{
  title: string;
  children: ReactNode;
}

export function InputField({ title, children, ...rest }: InputFieldProps) {
  return (
    <Container {...rest}>
      <h2>{title}</h2>
      {children}
    </Container>
  );
}