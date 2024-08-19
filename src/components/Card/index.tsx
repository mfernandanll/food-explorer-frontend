import { useMediaQuery } from "react-responsive";
import { ButtonCounter, Container, Counter, Order, Title } from "./styles";
import { Button } from "../Button"

import { CaretRight, HeartStraight, Minus, PencilSimple, Plus } from "@phosphor-icons/react";

import { useNavigate } from 'react-router-dom';
import { api } from "../../services/api";
import { Dish } from "../../pages/Home";

interface CardProps {
  data: Dish;
  isAdmin: boolean;
  handleDetails: (id: string) => void;
}


export function Card({ data, isAdmin, handleDetails }: CardProps) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const navigate = useNavigate();

  function handleEdit() {
    navigate(`/edit/${data.id}`);
  }

  return (
    <Container>
      {
        isAdmin ? 
        <PencilSimple size={"1.5rem"} onClickCapture={handleEdit} /> : 
        <HeartStraight size={"1.5rem"}/>
      }
      
      <img 
        src={`${api.defaults.baseURL}/files/${data.image}`} 
        alt="Imagem do prato."
        onClickCapture={() => handleDetails(data.id)}
      />

      <Title>
        <h2>{data.name}</h2>
        <CaretRight 
          size={ isDesktop ? "1.5rem" : "0.875rem"}
          onClickCapture={() => handleDetails(data.id)}
        />
      </Title>

      {isDesktop && <p>{data.description}</p>}
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