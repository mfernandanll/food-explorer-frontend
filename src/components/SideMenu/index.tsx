import { Container, Content, Nav } from "./styles";
import { Footer } from "../Footer";
import { Search } from "../Search";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { Header } from "../Header";

interface SideMenuProps {
  isMenuOpen: boolean; 
  setIsMenuOpen: (value: boolean) => void;
  setSearch?: (value: string) => void;
}

export function SideMenu({ isMenuOpen, setIsMenuOpen, setSearch }: SideMenuProps) {
  const { signOut, checkIfUserIsAdmin } = useAuth();
  const navigate = useNavigate();

  const isAdmin = checkIfUserIsAdmin();

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
            <a href="#" onClickCapture={handleNew}>
              Novo Prato
            </a>
          }
          <a href="#" onClickCapture={handleSignOut}>
            Sair
          </a>
        </Nav>
      </Content>
      <Footer/>
    </Container>
  );
}
