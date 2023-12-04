import { z } from "zod";

export const registerFormSchema = z
    .object({
        name: z.string().min(3, "Digite seu nome"),
        email: z
            .string()
            .email("O e-mail fornecido é inválido.")
            .min(1, "O e-mail é obrigatório"),
        phone: z
            .string()
            .min(9, "O número de telefone precisa ter no mínimo 9 caracteres"),
        password: z
            .string()
            .min(1, "A senha é obrigatória")
            .min(8, "Insira no mínimo 8 caracteres")
            .regex(
                /(?=.*?[A-Z])/,
                "É necessário ter pelo menos uma letra maiúscula"
            )
            .regex(
                /(?=.*?[a-z])/,
                "É necessário ter pelo menos uma letra minúscula"
            )
            .regex(/(?=.*?[0-9])/, "É necessário ter pelo menos um número")
            .regex(
                /(?=.*?[#?!@$%^&*-])/,
                "É necessário ter pelo menos um caractere especial"
            ),
        confirm: z.string().min(1, "Confirmar a senha é obrigatório"),
    })
    .refine(({ password, confirm }) => password === confirm, {
        message: "As senhas não correspondem",
        path: ["confirm"],
    });

export type TRegisterFormSchema = z.infer<typeof registerFormSchema>;
