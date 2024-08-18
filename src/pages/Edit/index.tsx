import { ChangeEvent, useEffect, useState } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Dish } from "../Home";

interface EditProps {
  isAdmin: boolean;
}

export function Edit({ isAdmin }: EditProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState("");

  const [image, setImage] = useState<File | null | string>(null);
  const [fileName, setFileName] = useState<string>("");

  const [dish, setDish] = useState<Dish | null>(null);

  const navigate = useNavigate();
  const params = useParams();

  function handleBack() {
    navigate(-1);
  }

  function handleRemoveTag(deleted: string) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (file) {
      setImage(file);
      setFileName(file.name);
    }
  }

  async function handleEditDish() {
    if (!image) {
      return alert("Selecione a imagem do prato")
    }

    if (!name) {
      return alert("Digite o nome do prato")
    }

    if (!category) {
      return alert("Selecione a categoria do prato")
    }

    if (tags.length === 0) {
      return alert("Informe ao menos um ingrediente do prato")
    }

    if (newTag) {
      return alert(
        "Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio."
      );
    }

    if (!price) {
      return alert("Informe o preço do prato")
    }

    if (!description) {
      return alert("Digite a descrição do prato")
    }

    setLoading(true);

    try {
      const updatedDish = {
        name,
        category,
        price,
        description,
        ingredients: JSON.stringify(tags)
      };

      if (image) {
        const formData = new FormData();
        formData.append("image", image);

        await api.patch(`/dishes/${params.id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      await api.patch(`/dishes/${params.id}`, updatedDish);
      alert("Prato atualizado com sucesso!");
      navigate("/");

    } catch (error: unknown) {
      if (error instanceof Error && 'response' in error && error.response) {
        alert((error.response as any).data.message);
      } else {
        alert("Não foi possível atualizar o prato.");
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleRemoveDish() {
    const confirm = window.confirm("Você tem certeza que deseja excluir esse prato?");

    if (confirm) {
      setLoading(true);

      try {
        await api.delete(`/dishes/${params.id}`);
        navigate("/");
      } catch (error: unknown) {
        if (error instanceof Error && 'response' in error && error.response) {
          alert((error.response as any).data.message);
        } else {
          alert("Não foi possível excluir o prato.");
        }
      } finally {
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    async function fetchDish() {
      try {
        const response = await api.get(`/dishes/${params.id}`);
        setDish(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchDish();
    
  }, [params.id])

  useEffect(() => {
    if (dish) {      
      setFileName(dish.image ?? '');
      setImage(dish.image);
      setName(dish.name);
      setCategory(dish.category);
      setPrice(dish.price);
      setDescription(dish.description);

      const allIngredients = dish.ingredients.map((ingredient) => ingredient.name);
      setTags(allIngredients);
    }
  }, [dish])

  return (
    <Container>
      <SideMenu
        isAdmin={isAdmin}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen} 
      />
      <FixedContent>
        <Header
          isAdmin={isAdmin}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen} 
        />

        <HeadContent>
          <ButtonText title="voltar" iconSize={22} onClick={handleBack} />
        </HeadContent>

        <MainContent>
          <h1>Editar prato</h1>

          <Form>
            <Row>
              <Section title="Imagem do prato" className="image">
                <Image>
                  <label htmlFor="image">
                    <UploadSimple size={24} />

                    <span>{fileName || "Selecione imagem para alterá-la"}</span>

                    <input
                      id="image"
                      type="file"
                      onChange={handleImageChange}
                    />
                  </label>
                </Image>
              </Section>

              <Section title="Nome" className="name">
                <Input
                  type="text"
                  variant="secondary"
                  placeholder="Salada Ceasar"
                  value={name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                />
              </Section>

              <Section title="Categoria" className="category">
                <Category>
                  <label htmlFor="category">
                    <select
                      id="category"
                      value={category}
                      onChange={e => setCategory(e.target.value)}
                    >
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
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setNewTag(e.target.value)}
                    value={newTag}
                    onClick={handleAddTag}
                  />

                </Ingredients>
              </Section>

              <Section title="Preço" className="price">
                <Input
                  type="number"
                  variant="secondary"
                  placeholder="R$ 40,00"
                  value={price}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setPrice(Number(e.target.value))}
                />
              </Section>
            </Row>

            <Row>
              <Section title="Descrição" className="description">
                <Textarea
                  placeholder="A Salada César é uma opção refrescante para o verão."
                  defaultValue={description}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
                />
              </Section>
            </Row>

            <ButtonsRow>
              <Button
                className="delete"
                title="Excluir prato"
                loading={loading}
                onClick={handleRemoveDish}
              />
              <Button
                title="Salvar alterações"
                loading={loading}
                onClick={handleEditDish}
              />
            </ButtonsRow>
          </Form>
        </MainContent>

        <Footer />
      </FixedContent>
    </Container>
  );
}