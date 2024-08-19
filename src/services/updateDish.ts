import { DishInfo } from '../@types/types';
import { api } from './api';

export async function updateDish(id: string, data: DishInfo, image?: File): Promise<void> {
  const { name, category, description, ingredients, price } = data;

  const updatedDish = {
    name,
    category,
    price,
    description,
    ingredients: JSON.stringify(ingredients),
  };

  if (image) {
    const formData = new FormData();
    formData.append('image', image);

    await api.patch(`/dishes/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }

  await api.patch(`/dishes/${id}`, updatedDish);
}