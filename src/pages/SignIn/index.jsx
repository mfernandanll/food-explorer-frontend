import { Container, Form, Formfield, Logo } from "./styles";
import logo_polygon from "../../assets/logo_polygon.svg";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn(){
  return (
    <Container>
      <Logo>
        <img src={logo_polygon} />

        <h1>food explorer</h1>
      </Logo>

      <Formfield>
        <Form>
          <div className="inputs">
            <p>Email</p>

            <Input
              placeholder="Exemplo: exemplo@exemplo.com.br"
            />
          </div>

          <div className="inputs">
            <p>Senha</p>

            <Input
              placeholder="No mínimo 6 caracteres"
            />  
          </div>

          <Button
            title="Entrar"
          />

          <a href="">Criar uma conta</a>
        </Form>  
      </Formfield>
      
    </Container>
  );
}