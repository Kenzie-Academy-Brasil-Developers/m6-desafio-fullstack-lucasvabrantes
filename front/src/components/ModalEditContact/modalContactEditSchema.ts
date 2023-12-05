import { z } from "zod";

export const modalContactEditSchema = z.object({
    name: z.string().min(1, "Digite um nome"),
    email: z.string().email(),
    phone: z.string().min(1, "Preencha um número de telefone"),
});

export type EditContactSchema = z.infer<typeof modalContactEditSchema>;
