import { List, Receipt, SignOut } from "@phosphor-icons/react";
import { SignOutIcon, Container, HeaderSerachArea, Menu, OrderIcon } from "./styles";
import { Logo } from "../Logo";
import { Search } from "../Search";
import { Button } from "../Button";

export function Header({ onOpenMenu }) {
  return (
    <Container>
      <Menu onClick={onOpenMenu}>
        <List />
      </Menu>

      <Logo size="md" />

      <HeaderSerachArea>
        <Search/>
      </HeaderSerachArea>

      <OrderIcon>
        <Receipt/>
      </OrderIcon>

      <Button 
        className="orders"
        icon={Receipt}
        title="Pedidos (0)"
      />
      
      <SignOutIcon>
        <SignOut/>
      </SignOutIcon>
    </Container>
  )
}