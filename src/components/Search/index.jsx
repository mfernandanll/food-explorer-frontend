import { MagnifyingGlass } from "@phosphor-icons/react";
import { Input } from "../Input";
import { Container } from "./styles";

export function Search() {
  return (
    <Container>
      <Input 
        icon={MagnifyingGlass} 
        placeholder="Busque por pratos ou ingredientes"
      />
    </Container>
  )
}