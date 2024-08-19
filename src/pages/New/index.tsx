import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Category, Container, FixedContent, Form, HeadContent, Image, MainContent, Ingredients, Row, ErrorMessage } from "./styles";

import { ButtonText } from "../../components/ButtonText";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";
import { Button } from "../../components/Button";
import { InputField } from "../../components/Section";
import { Input } from "../../components/Input";
import { FoodItem } from "../../components/FoodItem";
import { Textarea } from "../../components/Textarea";

import { CaretDown, UploadSimple } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useFieldArray, useForm } from "react-hook-form";
import { dishSchema } from "../../utils/dishSchema";
import { createDish } from "../../services/createDish";

export type DishInfo = zod.infer<typeof dishSchema>


export function New() {
  const [newIngredient, setNewIngredient] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [fileName, setFileName] = useState<string>("");

  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    setError,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm<DishInfo>({
    resolver: zodResolver(dishSchema),
    defaultValues: {
      ingredients: [],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'ingredients',
    rules: {
      required: "Campo obrigatório",
      maxLength: { value: 9, message: "Número máximo de ingredientes é 9" },
    }
  });

  function handleBack() {
    navigate(-1);
  }

  function handleRemoveTag(index: number) {
    remove(index)
  }

  function handleAddTag() {
    if (newIngredient.length == 0) {
      return setError('ingredients', { message: 'Digite o nome do ingrediente' });
    };

    if (newIngredient.length > 20) {
      return setError('ingredients', { message: 'Ingrediente excedeu número de 20 caracteres' });
    };

    if (newIngredient.length > 0 && newIngredient.length <= 255) {
      append({ value: newIngredient });
      setNewIngredient("");
    };
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (file) {
      setValue('image', file);
      setFileName(file.name);
    }
  }

  async function handleNewDish(data: DishInfo) {
    const { name, category, image, description, ingredients, price } = data;

    if (newIngredient) {
      return setError('ingredients', 
        { message: 'Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.' });
    }
  
    const formattedIngredients = ingredients.map((ingredient) => ingredient.value);
  
    try {
      await createDish({
        name,
        category,
        image,
        description,
        ingredients: formattedIngredients,
        price,
      });
      alert("Prato cadastrado com sucesso!");
      navigate("/");
    } catch (error: unknown) {
      if (error instanceof Error && 'response' in error && error.response) {
        alert((error.response as any).data.message);
      } else {
        alert("Não foi possível cadastrar");
      }
    }
  }

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
          <ButtonText title="voltar" iconSize={22} onClickCapture={handleBack} />
        </HeadContent>

        <MainContent>
          <h1>{isDesktop ? "Adicionar prato" : "Novo Prato"} </h1>

          <Form onSubmit={handleSubmit(handleNewDish)}>
            <Row>
              <InputField title="Imagem do prato" className="image">
                <Image>
                  <label htmlFor="image">
                    <UploadSimple size={24} />

                    <span>{fileName || "Selecione imagem"}</span>

                    <input
                      id="image"
                      type="file"
                      onChange={(e) => handleImageChange(e)}
                    />
                  </label>

                </Image>

                {errors.image && errors.image.message && typeof errors.image.message === 'string' ? (
                  <ErrorMessage role="alert">{errors.image?.message}</ErrorMessage>
                ) : null}
              </InputField>

              <InputField title="Nome" className="name">
                <Input
                  variant="secondary"
                  type="text"
                  placeholder="Ex.: Salada Ceasar"
                  errorMessage={errors.name?.message}
                  {...register('name')}
                />
              </InputField>

              <InputField title="Categoria" className="category">
                <Category>
                  <label htmlFor="category">
                    <select
                      id="category"
                      {...register('category')}
                    >
                      <option value="">Selecionar</option>
                      <option value="meal">Refeição</option>
                      <option value="dessert">Sobremesa</option>
                      <option value="beverage">Bebida</option>
                    </select>

                    <CaretDown size={"1.5rem"} />
                  </label>
                </Category>

                {errors.category?.message ? (
                  <ErrorMessage role="alert">{errors.category?.message}</ErrorMessage>
                ) : null}

              </InputField>
            </Row>

            <Row>
              <InputField title="Ingredientes" className="ingredients">
                <Ingredients>
                  {
                    fields?.map((ingredient, index) => (
                      <FoodItem
                        key={ingredient.id}
                        value={ingredient.value}
                        onClick={() => handleRemoveTag(index)}
                      />
                    ))
                  }

                  <FoodItem
                    isNew
                    placeholder="Adicionar"
                    value={newIngredient}
                    onChange={(event) => setNewIngredient(event.target.value)}
                    onClick={handleAddTag}
                  />
                </Ingredients>

                {errors.ingredients?.message ? (
                  <ErrorMessage role="alert">{errors.ingredients?.message}</ErrorMessage>
                ) : null}

              </InputField>

              <InputField title="Preço" className="price">
                <Input
                  variant="secondary"
                  type="number"
                  placeholder="R$ 00,00"
                  errorMessage={errors.price?.message}
                  {...register('price', { valueAsNumber: true })}
                />
              </InputField>
            </Row>

            <Row>
              <InputField title="Descrição" className="description">
                <Textarea
                  placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                  errorMessage={errors.description?.message}
                  {...register('description')}
                />
              </InputField>
            </Row>

            <Button
              type="submit"
              title="Salvar alterações"
              loading={isSubmitting}
            />
          </Form>
        </MainContent>

        <Footer />
      </FixedContent>
    </Container>
  );
}