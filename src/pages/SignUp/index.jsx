import { Container, Content, Form, Formfield } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import { Section } from "../../components/Section";

export function SignUp(){
  return (
    <Container>
      <Content>
        <Logo />
        <Formfield>
          <Form>
            <h1>Crie sua conta</h1>

            <Section title="Seu nome" className="inputs">
              <Input
                placeholder="Exemplo: Maria da Silva"
              />
            </Section>

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
              title="Criar conta"
            />

            <a href="">Já tenho uma conta</a>
          </Form>  

        </Formfield>

      </Content>
      
    </Container>
  );
}