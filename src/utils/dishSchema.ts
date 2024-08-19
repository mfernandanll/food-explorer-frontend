import * as zod from 'zod'

const MAX_FILE_SIZE = 1000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const imageSchema = zod
  .any()
  .refine((file: File) => file?.size <= MAX_FILE_SIZE, `O tamanho máximo do arquivo é 10MB.`)
  .refine(
    (file: File) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
    "Apenas arquivos de extensão .jpg, .jpeg, .png e .webp são aceitos"
  )

export const dishSchema = zod.object({
  image: imageSchema,
  name: zod.string().min(1, 'Informe o nome do prato'),
  category: zod.enum(['meal', 'dessert', 'beverage'], {
    errorMap: (issue) => {
      if (issue.code === 'invalid_enum_value') {
        return { message: 'Selecione ao menos uma categoria' }
      }
      return { message: issue.message ?? '' }
    },
  }),
  price: zod.number({
    invalid_type_error: "Digite apenas números",
  })
    .min(0, 'Informe o preço')
    .nonnegative(),
  description: zod.string().min(1, 'Digite a descrição do prato'),
  ingredients: zod.array(zod.object({
    value: zod.string()
  })).nonempty('Adicione pelo menos um ingrediente ao prato'),
})