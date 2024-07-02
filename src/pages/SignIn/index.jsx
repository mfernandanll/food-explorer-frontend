import { Container, Content, Form, Formfield } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import { Section } from "../../components/Section";

export function SignIn(){
  return (
    <Container>
      <Content>
        <Logo />
        <Formfield>
          <Form>
            <h1>Faça login</h1>

            <Section title="Email" className="inputs">
              <Input
                placeholder="Exemplo: exemplo@exemplo.com.br"
              />
            </Section>

            <Section title="Senha" className="inputs">
              <Input
                placeholder="No mínimo 6 caracteres"
              />
            </Section>

            <Button
              title="Entrar"
            />

            <a href="">Criar uma conta</a>
          </Form>  

        </Formfield>

      </Content>
      
    </Container>
  );
}