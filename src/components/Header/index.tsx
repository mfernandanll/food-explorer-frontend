import { List, Receipt, SignOut, X } from "@phosphor-icons/react";
import {
  SignOutIcon,
  Container,
  HeaderSerachArea,
  Menu,
  OrderIcon,
} from "./styles";
import { Logo } from "../Logo";
import { Search } from "../Search";
import { Button } from "../Button";

import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

interface HeaderProps {
  isAdmin?: boolean; 
  isMenuOpen: boolean; 
  setIsMenuOpen: (value: boolean) => void;
  setSearch?: (value: string) => void;
}

export function Header({
  isAdmin,
  isMenuOpen,
  setIsMenuOpen,
  setSearch,
}: HeaderProps) {
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
      {!isDesktop && (
        <Menu>
          {!isMenuOpen ? (
            <List className="fi-menu-icon" onClickCapture={() => setIsMenuOpen(true)} />
          ) : (
            <>
              <X size={"1.5rem"} onClickCapture={() => setIsMenuOpen(false)} />
              <span>Menu</span>
            </>
          )}
        </Menu>
      )}

      {(isDesktop || !isMenuOpen) && (
        <>
          <Logo size="md" isAdmin={isAdmin} />

          <HeaderSerachArea>
            <Search setSearch={setSearch} />
          </HeaderSerachArea>

          {!isAdmin && (
            <OrderIcon>
              <Receipt />
              {!isDesktop && <span>0</span>}
            </OrderIcon>
          )}

          {isAdmin ? (
            <Button className="orders" title="Novo Prato" onClick={handleNew} />
          ) : (
            <Button className="orders" icon={Receipt} title="Pedidos (0)" />
          )}

          <SignOutIcon onClickCapture={handleSignOut}>
            <SignOut />
          </SignOutIcon>
        </>
      )}
    </Container>
  );
}
