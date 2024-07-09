import { Container, Content, Nav } from "./styles";
import { Footer } from "../Footer";
import { Search } from "../Search";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { Header } from "../Header";

export function SideMenu({ isAdmin, isMenuOpen, setIsMenuOpen, onCloseMenu, setSearch }) {
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
    <Container $isMenuOpen={isMenuOpen}>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <Content>
        <Search setSearch={setSearch}/>
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
