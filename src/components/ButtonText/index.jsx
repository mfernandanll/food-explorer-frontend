import { CaretLeft } from "@phosphor-icons/react";
import { Container } from "./styles";

export function ButtonText({title, ...rest}) {
  return (
    <Container 
      {...rest}
      type="button"
    >
      <CaretLeft size={32} />
      {title}
    </Container>
  )
}