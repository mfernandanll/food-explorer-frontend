import { useMediaQuery } from "react-responsive";
import { ButtonCounter, Container, Counter, Order, Title } from "./styles";
import { Button } from "../Button"

import { CaretRight, HeartStraight, Minus, PencilSimple, Plus } from "@phosphor-icons/react";

import { useNavigate } from 'react-router-dom';
import { api } from "../../services/api";


export function Card({ data, isAdmin, handleDetails }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const navigate = useNavigate();

  function handleEdit() {
    navigate(`/edit/${data.id}`);
  }

  return (
    <Container>
      {
        isAdmin ? 
        <PencilSimple size={"1.5rem"} onClick={handleEdit}/> : 
        <HeartStraight size={"1.5rem"}/>
      }
      
      <img 
        src={`${api.defaults.baseURL}/files/${data.image}`} 
        alt="Imagem do prato."
        onClick={() => handleDetails(data.id)}
      />

      <Title>
        <h2>{data.name}</h2>
        <CaretRight 
          size={ isDesktop ? "1.5rem" : "0.875rem"}
          onClick={() => handleDetails(data.id)}
        />
      </Title>

      {isDesktop && <p>Presunto de parma e rúcula em um pão com fermentação natural</p>}
      <span>R$ {data.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>

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