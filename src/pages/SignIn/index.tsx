import { Link } from "react-router-dom";
import { Container, Content, Form, Formfield } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import { Section } from "../../components/Section";
import { useAuth } from "../../hooks/auth";

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form";

const user = zod.object({
  email: zod.string().min(1, 'Informe o email').email('E-mail inválido'),
  password: zod.string().min(3, 'Informe a senha'),
})

export type UserInfo = zod.infer<typeof user>

export function SignIn(){
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<UserInfo>({
    resolver: zodResolver(user),
  })

  const { signIn } = useAuth();

  function handleSignIn(data: UserInfo) {
    const { email, password } = data;
    signIn( email, password );
    reset();
  }

  return (
    <Container>
      <Content>
        <Logo size="lg"/>
        <Formfield>
          <Form onSubmit={handleSubmit(handleSignIn)}>
            <h1>Faça login</h1>

            <Section title="Email" className="inputs">
              <Input
                type="text"
                placeholder="Exemplo: exemplo@exemplo.com.br"
                errorMessage={errors.email?.message}
                {...register('email')}
              />
            </Section>

            <Section title="Senha" className="inputs">
              <Input
                type="password"
                placeholder="No mínimo 6 caracteres"
                errorMessage={errors.password?.message}
                {...register('password')}
              />
            </Section>

            <Button
              type="submit"
              title="Entrar"
              loading={isSubmitting}
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