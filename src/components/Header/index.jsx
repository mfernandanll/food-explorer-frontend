import { List, Receipt, SignOut } from "@phosphor-icons/react";
import { SignOutIcon, Container, HeaderSerachArea, Menu, OrderIcon } from "./styles";
import { Logo } from "../Logo";
import { Search } from "../Search";
import { Button } from "../Button";

import { useMediaQuery } from "react-responsive";
import { useNavigate } from 'react-router-dom';

export function Header({ onOpenMenu, isAdmin }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const navigate = useNavigate();
  
  function handleSignOut() {
    navigate("/");
  }

  return (
    <Container>
      <Menu onClick={onOpenMenu}>
        <List />
      </Menu>

      <Logo size="md" isAdmin={isAdmin} />

      <HeaderSerachArea>
        <Search/>
      </HeaderSerachArea>

      {
        !isAdmin && 
        <OrderIcon>
          <Receipt/>
          {!isDesktop && <span>0</span>}
        </OrderIcon>
      }

      <Button 
        className="orders"
        icon={Receipt}
        title="Pedidos (0)"
      />
      
      <SignOutIcon onClick={handleSignOut}>
        <SignOut/>
      </SignOutIcon>
    </Container>
  )
}