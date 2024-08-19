import { ChangeEvent, useEffect, useState } from "react";
import { Category, Container, FixedContent, Form, HeadContent, Image, MainContent, Ingredients, Row, ButtonsRow, ErrorMessage } from "./styles";

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

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useFieldArray, useForm } from "react-hook-form";
import { dishSchema } from "../../utils/dishSchema";

export type DishInfo = zod.infer<typeof dishSchema>

interface EditProps {
  isAdmin: boolean;
}

export function Edit({ isAdmin }: EditProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [fileName, setFileName] = useState<string>("");

  const [dish, setDish] = useState<Dish | null>(null);

  const navigate = useNavigate();
  const params = useParams();

  const [newIngredient, setNewIngredient] = useState("");

  const {
    register,
    handleSubmit,
    control,
    setError,
    setValue,
    watch,
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

  async function handleEditDish(data: DishInfo) {
    const { name, category, image, description, ingredients, price } = data;

    if (newIngredient) {
      return setError('ingredients', 
        { message: 'Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.' });
    }

    const formattedIngredients = ingredients.map((ingredient) => ingredient.value)

    setLoading(true);

    try {
      const updatedDish = {
        name,
        category,
        price,
        description,
        ingredients: JSON.stringify(formattedIngredients)
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
      const allIngredients = dish.ingredients.map((ingredient) => ({value: ingredient.name}));
      type ExpectedType = [{ value: string; }, ...{ value: string; }[]];
      
      setFileName(dish.image ?? '');
      setValue('image', dish.image);
      setValue('name', dish.name);
      setValue('category', dish.category);
      setValue('price', dish.price);
      setValue('description', dish.description);
      setValue('ingredients', allIngredients as ExpectedType)
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

          <Form onSubmit={handleSubmit(handleEditDish)}>
            <Row>
              <Section title="Imagem do prato" className="image">
                <Image>
                  <label htmlFor="image">
                    <UploadSimple size={24} />

                    <span>{fileName || "Selecione imagem para alterá-la"}</span>

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
              </Section>

              <Section title="Nome" className="name">
                <Input
                  type="text"
                  variant="secondary"
                  placeholder="Salada Ceasar"
                  value={watch('name')}
                  errorMessage={errors.name?.message}
                  {...register('name')}
                />
              </Section>

              <Section title="Categoria" className="category">
                <Category>
                  <label htmlFor="category">
                    <select
                      id="category"
                      value={watch('category')}
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
              </Section>
            </Row>

            <Row>
              <Section title="Ingredientes" className="ingredients">
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
              </Section>

              <Section title="Preço" className="price">
                <Input
                  type="number"
                  variant="secondary"
                  placeholder="R$ 40,00"
                  value={watch('price')}
                  errorMessage={errors.price?.message}
                  {...register('price', { valueAsNumber: true })}
                />
              </Section>
            </Row>

            <Row>
              <Section title="Descrição" className="description">
                <Textarea
                  placeholder="A Salada César é uma opção refrescante para o verão."
                  defaultValue={watch('description')}
                  errorMessage={errors.description?.message}
                  {...register('description')}
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
                type="submit"
                title="Salvar alterações"
                loading={isSubmitting}
              />
            </ButtonsRow>
          </Form>
        </MainContent>

        <Footer />
      </FixedContent>
    </Container>
  );
}