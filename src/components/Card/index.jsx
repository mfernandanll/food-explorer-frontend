import { useMediaQuery } from "react-responsive";
import { ButtonCounter, Container, Counter, Order, Title } from "./styles";
import { Button } from "../Button"

import { CaretRight, HeartStraight, Minus, PencilSimple, Plus } from "@phosphor-icons/react";
import dish1 from "../../assets/Dish1.png";
import { useState } from "react";


export function Card() {
  const [isAdmin, setIsAdmin] = useState(true);
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <Container>
      {
        isAdmin ? 
        <PencilSimple size={"1.5rem"}/> : <HeartStraight size={"1.5rem"}/>
      }
      

      <img src={dish1} alt="refeicao" />

      <Title>
        <h2>Salada Ravanello</h2>
        <CaretRight size={ isDesktop ? "1.5rem" : "0.875rem"}  />
      </Title>

      {isDesktop && <p>Presunto de parma e rúcula em um pão com fermentação natural</p>}
      <span>R$ {"49.99".toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>

      { 
        !isAdmin &&
        <Order>
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
        </Order>
      }
    </Container>
  )
}