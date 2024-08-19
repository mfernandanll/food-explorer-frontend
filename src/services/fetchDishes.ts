import { Dish } from "../@types/types";
import { api } from "./api";

export async function fetchDishesBySearch(search: string) {
  const response = await api.get<Dish[]>(`/dishes?search=${search}`);
  const meals = response.data.filter((dish) => dish.category === "meal");
  const desserts = response.data.filter((dish) => dish.category === "dessert");
  const beverages = response.data.filter((dish) => dish.category === "beverage");

  return { meals, desserts, beverages };
}

export async function fetchDishById(id: string) {
  const response = await api.get(`/dishes/${id}`);
  return response.data;
}