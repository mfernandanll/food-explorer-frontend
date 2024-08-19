import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { ButtonCounter, Container, Counter, DishDetails, FixedContent, HeadContent, MainContent, Order, Tags } from "./styles";

import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";
import { Footer } from "../../components/Footer";

import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Minus, Plus, Receipt } from "@phosphor-icons/react";

import { useNavigate, useParams } from 'react-router-dom';
import { api } from "../../services/api";
import { Dish } from "../../@types/types";
import { fetchDishById } from "../../services/fetchDishes";
import { useAuth } from "../../hooks/auth";


export function Details() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [data, setData] = useState<Dish>();

  const isDesktop = useMediaQuery({ minWidth: 768 });

  const params = useParams();
  const navigate = useNavigate();

  const { checkIfUserIsAdmin } = useAuth();
  const isAdmin = checkIfUserIsAdmin();

  function handleBack() {
    navigate(-1);
  }

  function handleEdit() {
    navigate(`/edit/${params.id}`);
  }

  useEffect(() => {
    async function loadDish() {
      if (params.id) {
        const response = await fetchDishById(params.id);
        setData(response);
      }
    }

    loadDish();
  }, []);

  return (
    <Container>
      <SideMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen} 
      />

      <FixedContent>
        <Header 
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen} 
        />
        
        <HeadContent>
          <ButtonText iconSize={32} title="voltar" onClick={handleBack}/>       
        </HeadContent>
        {
          data &&

          <MainContent>   
            <img 
              src={`${api.defaults.baseURL}/files/${data.image}`} 
              alt="Imagem do prato." />
            
            <DishDetails>
              <h1>{data.name}</h1>
              <p>{data.description}</p>

              <Tags>
              { data.ingredients &&
                data.ingredients.map(ingredient => (
                  <Tag
                   key={String(ingredient.id)}
                   title={ingredient.name}
                  />
                ))
              }
              </Tags>
              
                {
                  isAdmin ?
                  <Button 
                    title="Editar prato" 
                    onClick={handleEdit}
                  />
                  :
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
                    <Button 
                      icon={isDesktop ? null : Receipt}
                      title={isDesktop ? `incluir - R$ ${data.price}` : `pedir - R$ ${data.price}`} 
                    />
                  </Order>
                }

            </DishDetails>
          </MainContent>
        }

        <Footer />
      </FixedContent>
    </Container>
  );
}