import { X } from "@phosphor-icons/react";
import { Button, Container, Content, Header, Nav } from "./styles";
import { Footer } from "../Footer";
import { Search } from "../Search";

export function SideMenu({ menuIsOpen, onCloseMenu }) {
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
          <a href="#">
            Sair
          </a>
        </Nav>
      </Content>
      <Footer/>
    </Container>
  );
}
