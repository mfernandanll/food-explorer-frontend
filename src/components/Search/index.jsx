import { MagnifyingGlass } from "@phosphor-icons/react";
import { Input } from "../Input";
import { Container } from "./styles";

export function Search({ setSearch }) {
  return (
    <Container>
      <Input 
        icon={MagnifyingGlass} 
        placeholder="Busque por pratos ou ingredientes"
        onChange={e => setSearch(e.target.value)}
      />
    </Container>
  )
}