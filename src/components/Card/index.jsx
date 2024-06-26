import { ButtonCounter, Container, Counter } from "./styles";
import dish1 from "../../assets/Dish1.png";
import { HeartStraight, Minus, Plus } from "@phosphor-icons/react";
import { Button } from "../Button"

export function Card() {
  return (
    <Container>
      <HeartStraight />
      <img src={dish1} alt="refeicao" />
      <a href="#">
        <h2>Salada Ravanello</h2>
      </a>
      <h2>R$ 49,99</h2>
      <Counter>
        <ButtonCounter>
          <Minus />
        </ButtonCounter>
        <span>01</span>
        <ButtonCounter>
          <Plus />
        </ButtonCounter>
      </Counter>
      <Button title="incluir"/>
    </Container>
  )
}