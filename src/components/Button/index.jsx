import { Container } from "./styles";

export function Button({icon: Icon, title, loading = false, ...rest}){
  return (
    <Container 
      type="button"
      disabled={loading} 
      {...rest}
    >
      {Icon && <Icon size={"2rem"} />}
      {loading ? "Carregando..." : title}
    </Container>
  )
}