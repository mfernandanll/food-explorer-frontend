import { Container } from "./styles";

export function Button({icon: Icon, title, isActive = true, ...rest}){
  return (
    <Container 
      type="button"
      $isActive={isActive}
      {...rest}
    >
      {Icon && <Icon size={21} />}
      {title}
    </Container>
  )
}