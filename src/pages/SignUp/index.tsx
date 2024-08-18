import { Container, Content, Form, Formfield } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import { Section } from "../../components/Section";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form";

const user = zod.object({
  name: zod.string().min(1, 'Informe o nome'),
  email: zod.string().min(1, 'Informe o email').email('E-mail inválido'),
  password: zod.string().min(3, 'Informe a senha'),
})

export type UserInfo = zod.infer<typeof user>

export function SignUp(){
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<UserInfo>({
    resolver: zodResolver(user),
  })

  const navigate = useNavigate();

  function handleSignUp(data: UserInfo) {
    const { name, email, password } = data;

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
       })
    
    reset();
  }

  return (
    <Container>
      <Content>
        <Logo size="lg"/>
        <Formfield>
          <Form onSubmit={handleSubmit(handleSignUp)}>
            <h1>Crie sua conta</h1>

            <Section title="Seu nome" className="inputs">
              <Input
                placeholder="Exemplo: Maria da Silva"
                errorMessage={errors.name?.message}
                {...register('name')}
              />
            </Section>

            <Section title="Email" className="inputs">
              <Input
                placeholder="Exemplo: exemplo@exemplo.com.br"
                errorMessage={errors.email?.message}
                {...register('email')}
              />
            </Section>

            <Section title="Senha" className="inputs">
              <Input
                placeholder="No mínimo 3 caracteres"
                errorMessage={errors.password?.message}
                {...register('password')}
              />
            </Section>

            <Button
              type="submit"
              title="Criar conta"
              loading={isSubmitting}
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