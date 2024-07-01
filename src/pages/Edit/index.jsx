import { useState } from "react";
import { Category, Container, FixedContent, Form, HeadContent, Image, MainContent, Ingredients, Row, ButtonsRow } from "./styles";

import { ButtonText } from "../../components/ButtonText";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Input } from "../../components/Input";
import { FoodItem } from "../../components/FoodItem";
import { Textarea } from "../../components/Textarea";

import { CaretDown, UploadSimple } from "@phosphor-icons/react";

export function Edit(){
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);

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
          <ButtonText title="voltar" iconSize={22}/>       
        </HeadContent>

        <MainContent>   
          <h1>Editar prato</h1>

          <Form>
            <Row>
              <Section title="Imagem do prato" className="image">
                <Image>
                  <label htmlFor="image">
                    <UploadSimple size={24} />

                    <span>Selecione imagem para alterá-la</span>

                    <input id="image" type="file" />
                  </label>
                </Image>
              </Section>

              <Section title="Nome" className="name">
                <Input type="text" placeholder="Salada Ceasar"/>
              </Section>

              <Section title="Categoria" className="category">
                <Category>
                  <label htmlFor="category">
                    <select id="category">
                      <option value="">Selecionar</option>
                      <option selected value="meal">Refeição</option>
                      <option value="dessert">Sobremesa</option>
                      <option value="beverage">Bebida</option>
                    </select>

                    <CaretDown size={"1.5rem"} />
                  </label>
                </Category>
              </Section>
            </Row>

            <Row>
              <Section title="Ingredientes" className="ingredients">
                <Ingredients>
                  <FoodItem value="Pão Francês"/>
                  <FoodItem 
                    value="Adicionar" 
                    isNew 
                    placeholder="Adicionar"
                  />
                </Ingredients>
              </Section>

              <Section title="Preço" className="price">
                <Input type="number" placeholder="R$ 40,00"/>
              </Section>
            </Row>

            <Row>
              <Section title="Descrição" className="description">
                <Textarea placeholder="A Salada César é uma opção refrescante para o verão."/>
              </Section>
            </Row>

            <ButtonsRow>
              <Button className="delete" isActive title="Excluir prato"/>
              <Button isActive={false} title="Salvar alterações"/>
            </ButtonsRow>
          </Form>
        </MainContent>

        <Footer />
      </FixedContent>
    </Container>
  );
}