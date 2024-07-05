import { Link } from "react-router-dom";
import { Container, Content, Form, Formfield } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import { Section } from "../../components/Section";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SignIn(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();
  
  function handleSignIn() {
    signIn({ email, password });
  }

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
                onChange={e => setEmail(e.target.value)}
              />
            </Section>

            <Section title="Senha" className="inputs">
              <Input
                placeholder="No mínimo 6 caracteres"
                onChange={e => setPassword(e.target.value)}
              />
            </Section>

            <Button
              title="Entrar"
              onClick={handleSignIn}
            />
            
            <Link to="/register">
              Criar uma conta
            </Link>
          </Form>  

        </Formfield>

      </Content>
      
    </Container>
  );
}