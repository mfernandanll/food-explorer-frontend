import { TextareaHTMLAttributes } from "react";
import { Container } from "./styles";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{}

export function Textarea({ value, ...rest }: TextAreaProps) {
  return (
    <Container {...rest}>
    </Container>
  );
}