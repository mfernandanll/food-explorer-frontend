import { HTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

interface SectionProps extends HTMLAttributes<HTMLDivElement>{
  title: string;
  children: ReactNode;
}

export function Section({ title, children, ...rest }: SectionProps) {
  return (
    <Container {...rest}>
      <h2>{title}</h2>
      {children}
    </Container>
  );
}