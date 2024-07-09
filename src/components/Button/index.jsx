import { Container } from "./styles";

export function Button({icon: Icon, title, loading = false, ...rest}){
  return (
    <Container 
      type="button"
      disabled={loading} 
      {...rest}
    >
      {Icon && <Icon size={21} />}
      {loading ? "Carregando..." : title}
    </Container>
  )
}