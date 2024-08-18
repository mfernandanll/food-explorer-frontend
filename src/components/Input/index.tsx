import { forwardRef, InputHTMLAttributes, LegacyRef, useState } from "react";
import { Container, Content, ContentVariant, ErrorMessage } from "./styles";
import { Icon } from "@phosphor-icons/react";

interface InputProps extends InputHTMLAttributes<HTMLElement> {
  icon?: Icon | null;
  errorMessage?: string;
  variant?: ContentVariant;
}

export const Input = forwardRef(
  function Input(
    { icon: Icon, errorMessage, variant = 'primary', ...rest }: InputProps,
    ref: LegacyRef<HTMLInputElement>
  ) {
    const [focused, setFocused] = useState(false);  

    return (
      <Container>
        <Content 
          $variant={variant}
          $focused={focused} 
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)} 
        >
          {Icon && <Icon size={20} />}

          <input 
            ref={ref} 
            {...rest} 
          />
        </Content>

        {errorMessage ? (
          <ErrorMessage role="alert">{errorMessage}</ErrorMessage>
        ) : null}
      </Container>
    )
  }
)

