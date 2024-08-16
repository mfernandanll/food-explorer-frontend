import { Container, Content, Nav } from "./styles";
import { Footer } from "../Footer";
import { Search } from "../Search";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { Header } from "../Header";

interface SideMenuProps {
  isAdmin: boolean; 
  isMenuOpen: boolean; 
  setIsMenuOpen: (value: boolean) => void;
  setSearch: (value: string) => void;
}

export function SideMenu({ isAdmin, isMenuOpen, setIsMenuOpen, setSearch }: SideMenuProps) {
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
