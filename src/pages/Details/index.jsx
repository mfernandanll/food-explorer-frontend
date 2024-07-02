import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import { ButtonCounter, Container, Counter, DishDetails, FixedContent, HeadContent, MainContent, Order, Tags } from "./styles";

import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";
import { Footer } from "../../components/Footer";

import dish1 from "../../assets/Dish1.png";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Minus, Plus, Receipt } from "@phosphor-icons/react";

import { useNavigate } from 'react-router-dom';

export function Details({ isAdmin }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const isDesktop = useMediaQuery({ minWidth: 768 });

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <FixedContent>
        <Header 
          onOpenMenu={() => setMenuIsOpen(true)} 
          isAdmin={isAdmin} 
        />
        
        <HeadContent>
          <ButtonText iconSize={32} title="voltar" onClick={handleBack}/>       
        </HeadContent>

        <MainContent>   

          <img src={dish1} alt="imagem do prato" />
          
          <DishDetails>
            <h1>Salada Ravanello</h1>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>

            <Tags>
              <Tag title="tomate" />
              <Tag title="alface"/>
              <Tag title="cebola"/>
              <Tag title="couve"/>
              <Tag title="páprica"/>
            </Tags>
            
              {
                isAdmin ?
                <Button 
                  title="Editar prato" 
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
                    title={isDesktop ? "incluir - R$ 25,00" : "pedir - R$ 25,00"} 
                  />
                </Order>
              }

          </DishDetails>
        </MainContent>

        <Footer />
      </FixedContent>
    </Container>
  );
}