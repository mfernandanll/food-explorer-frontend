import { forwardRef, LegacyRef, TextareaHTMLAttributes } from "react";
import { Container, Content, ErrorMessage } from "./styles";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  errorMessage?: string;
}

export const Textarea = forwardRef(
  function Textarea(
    { errorMessage, ...rest }: TextAreaProps,
    ref: LegacyRef<HTMLTextAreaElement>
  ) {
    return (
      <Container>
        <Content ref={ref} {...rest}/>
        {errorMessage ? (
          <ErrorMessage role="alert">{errorMessage}</ErrorMessage>
        ) : null}
      </Container>
    );
  }
)
