import { Container, Content, Form, Formfield } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import { Section } from "../../components/Section";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";

export function SignUp(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    setLoading(true);

    api.post("/users", {name, email, password})
       .then(() => {
        alert("Cadastro realizado com sucesso");
        navigate("/");
       }).catch(error => {
          if (error.response) {
            alert(error.response.data.message);
          } else {
            alert("Não foi possível cadastrar");
          }
       }).finally(() => setLoading(false));
  }

  return (
    <Container>
      <Content>
        <Logo size="lg"/>
        <Formfield>
          <Form>
            <h1>Crie sua conta</h1>

            <Section title="Seu nome" className="inputs">
              <Input
                placeholder="Exemplo: Maria da Silva"
                onChange={e => setName(e.target.value)}
              />
            </Section>

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
              title="Criar conta"
              loading={loading}
              onClick={handleSignUp}
            />

            <Link to="/">
              Já tenho uma conta
            </Link>
          </Form>  

        </Formfield>

      </Content>
      
    </Container>
  );
}