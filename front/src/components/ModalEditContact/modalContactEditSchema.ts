import { z } from "zod";

export const modalContactEditSchema = z.object({
    name: z.string().min(1, "Digite um nome"),
    email: z.string().email(),
    phone: z.string().min(8, "O número precisa ter no mínimo 8 caracteres"),
});

export type EditContactSchema = z.infer<typeof modalContactEditSchema>;
