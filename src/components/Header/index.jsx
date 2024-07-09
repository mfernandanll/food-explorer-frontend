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

export function Header({
  isAdmin,
  setSearch,
  isMenuOpen,
  setIsMenuOpen,
}) {
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
            <List className="fi-menu-icon" onClick={() => setIsMenuOpen(true)} />
          ) : (
            <>
              <X size={"1.125rem"} onClick={() => setIsMenuOpen(false)} />
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

          <SignOutIcon onClick={handleSignOut}>
            <SignOut />
          </SignOutIcon>
        </>
      )}
    </Container>
  );
}
