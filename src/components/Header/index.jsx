import { List, Receipt } from "@phosphor-icons/react";
import { Button, Container, Menu } from "./styles";
import { Logo } from "../Logo";

export function Header({ onOpenMenu }) {
  return (
    <Container>
      <Menu onClick={onOpenMenu}>
        <List />
      </Menu>

      <Logo size="md" />

      <Button type="button">
        <Receipt/>
      </Button>
    </Container>
  )
}