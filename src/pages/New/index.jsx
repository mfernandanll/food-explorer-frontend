import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Category, Container, FixedContent, Form, HeadContent, Image, MainContent, Ingredients, Row } from "./styles";

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
import { useNavigate } from "react-router-dom";

export function New({ isAdmin }){
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
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
          <ButtonText title="voltar" iconSize={22} onClick={handleBack}/>       
        </HeadContent>

        <MainContent>   
          <h1>{ isDesktop ? "Adicionar prato" : "Novo Prato"} </h1>

          <Form>
            <Row>
              <Section title="Imagem do prato" className="image">
                <Image>
                  <label htmlFor="image">
                    <UploadSimple size={24} />

                    <span>Selecione imagem</span>

                    <input id="image" type="file" />
                  </label>
                </Image>
              </Section>

              <Section title="Nome" className="name">
                <Input type="text" placeholder="Ex.: Salada Ceasar"/>
              </Section>

              <Section title="Categoria" className="category">
                <Category>
                  <label htmlFor="category">
                    <select id="category">
                      <option value="">Selecionar</option>
                      <option value="meal">Refeição</option>
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
                  {
                    tags.map((tag, index) => (
                      <FoodItem 
                        key={String(index)}
                        value={tag}
                        onClick={() => handleRemoveTag(tag)}
                      />
                    ))
                  }

                  <FoodItem 
                    isNew 
                    placeholder="Adicionar"
                    onChange={(e) => setNewTag(e.target.value)}
                    value={newTag} 
                    onClick={handleAddTag}
                  />                  
                </Ingredients>
              </Section>

              <Section title="Preço" className="price">
                <Input type="number" placeholder="R$ 00,00"/>
              </Section>
            </Row>

            <Row>
              <Section title="Descrição" className="description">
                <Textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
              </Section>
            </Row>

            <Button isActive={false} title="Salvar alterações"/>
          </Form>
        </MainContent>

        <Footer />
      </FixedContent>
    </Container>
  );
}