import { Container, Form, Formfield } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";

export function SignUp(){
  return (
    <Container>
      <Logo />

      <Formfield>
        <Form>
          <h1>Faça login</h1>
          <div className="inputs">
            <p>Seu nome</p>

            <Input
              placeholder="Exemplo: Maria da Silva"
            />
          </div>
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
            title="Criar conta"
          />

          <a href="">Já tenho uma conta</a>
        </Form>  
      </Formfield>
      
    </Container>
  );
}