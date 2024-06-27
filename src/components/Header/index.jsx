import { List, Receipt, SignOut } from "@phosphor-icons/react";
import { SignOutIcon, Container, HeaderSerachArea, Menu, OrderIcon } from "./styles";
import { Logo } from "../Logo";
import { Search } from "../Search";
import { Button } from "../Button";

import { useMediaQuery } from "react-responsive";

export function Header({ onOpenMenu }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

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
        {!isDesktop && <span>0</span>}
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