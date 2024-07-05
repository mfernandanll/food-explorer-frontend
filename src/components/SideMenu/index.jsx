import { X } from "@phosphor-icons/react";
import { Button, Container, Content, Header, Nav } from "./styles";
import { Footer } from "../Footer";
import { Search } from "../Search";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

export function SideMenu({ menuIsOpen, onCloseMenu }) {
  const [isAdmin, setIsAdmin] = useState(true);

  const { signOut } = useAuth();
  const navigate = useNavigate();

  function handleNew() {
    navigate("/new");
  }

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  return (
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        {menuIsOpen && (
          <Button onClick={onCloseMenu}>
            <X />
            <span>Menu</span>
          </Button>
        )}
      </Header>
      <Content>
        <Search/>
        <Nav>
          {isAdmin && 
            <a href="#" onClick={handleNew}>
              Novo Prato
            </a>
          }
          <a href="#" onClick={handleSignOut}>
            Sair
          </a>
        </Nav>
      </Content>
      <Footer/>
    </Container>
  );
}
