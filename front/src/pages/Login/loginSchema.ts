import { z } from "zod";

export const loginFormSchema = z.object({
    email: z
        .string()
        .min(1, "O e-mail é obrigatório")
        .email("O e-mail fornecido é inválido."),
    password: z.string().min(1, "A senha é obrigatória"),
});

export type TLoginFormSchema = z.infer<typeof loginFormSchema>;
