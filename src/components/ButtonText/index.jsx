import { CaretLeft } from "@phosphor-icons/react";
import { Container } from "./styles";

export function ButtonText({title, iconSize, ...rest}) {
  return (
    <Container 
      {...rest}
      type="button"
    >
      <CaretLeft size={iconSize} />
      {title}
    </Container>
  )
}