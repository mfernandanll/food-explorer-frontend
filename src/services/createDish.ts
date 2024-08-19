import { api } from './api';

interface CreateDishPayload {
  name: string;
  category: string;
  image: File;
  description: string;
  ingredients: string[];
  price: number;
}

export async function createDish({
  name,
  category,
  image,
  description,
  ingredients,
  price,
}: CreateDishPayload): Promise<void> {
  const formData = new FormData();
  formData.append("image", image);
  formData.append("name", name);
  formData.append("category", category);
  formData.append("price", price.toString());
  formData.append("description", description);
  formData.append("ingredients", JSON.stringify(ingredients));

  await api.post("/dishes", formData);
}