import { List, Receipt, SignOut } from "@phosphor-icons/react";
import { SignOutIcon, Container, HeaderSerachArea, Menu, OrderIcon } from "./styles";
import { Logo } from "../Logo";
import { Search } from "../Search";
import { Button } from "../Button";

import { useMediaQuery } from "react-responsive";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../hooks/auth";

export function Header({ onOpenMenu, isAdmin }) {
  const { signOut } = useAuth();
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const navigate = useNavigate();
  
  function handleSignOut() {
    navigate("/");
    signOut();
  }

  function handleNew() {
    navigate("/new");
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

      {
        isAdmin ? 
        <Button 
          className="orders"
          title="Novo Prato"
          onClick={handleNew}
        />
        : 
        <Button 
          className="orders"
          icon={Receipt}
          title="Pedidos (0)"
        />

      }
      
      <SignOutIcon onClick={handleSignOut}>
        <SignOut/>
      </SignOutIcon>
    </Container>
  )
}