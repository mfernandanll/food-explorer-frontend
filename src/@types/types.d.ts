export interface Dish {
  id: string;
  name: string;
  description: string;
  category: 'meal' | 'dessert' | 'beverage';
  price: number;
  ingredients: Ingredient[];
  image: string | null;
  createdBy: string;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
}

interface Ingredient {
  id: string;
  name: string;
}

export interface FormattedDishes {
  meals: Dish[];
  desserts: Dish[];
  beverages: Dish[];
}

export type DishInfo = zod.infer<typeof dishSchema>

export type ZodIngredientsType = [{ value: string; }, ...{ value: string; }[]];