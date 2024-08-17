import { MagnifyingGlass } from "@phosphor-icons/react";
import { Input } from "../Input";
import { Container } from "./styles";
import { ChangeEvent } from "react";

interface SearchProps {
  setSearch?: (value: string) => void;
}

export function Search({ setSearch }: SearchProps) {
  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    if (setSearch) {
      setSearch(e.target.value);
    }
  }

  return (
    <Container>
      <Input
        icon={MagnifyingGlass}
        placeholder="Busque por pratos ou ingredientes"
        onChange={handleSearch}
      />
    </Container>
  )
}