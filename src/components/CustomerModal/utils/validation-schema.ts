import { z } from 'zod';

export const inputSchema = z.object({
  name: z.string().min(1, { message: 'Nome inválido' }),
  email: z.string().email({ message: 'E-mail inválido' }),
  city: z.string().min(1, { message: 'Digite o nome da cidade' }),
  street: z.string().min(1, { message: 'Digite o nome da rua' }),
  number: z
    .string()
    .min(1, { message: 'Digite um número válido' })
    .refine((value) => /^\d+$/.test(value), {
      message: 'O número deve conter apenas caracteres numéricos'
    })
});

export type Inputs = z.infer<typeof inputSchema>;
