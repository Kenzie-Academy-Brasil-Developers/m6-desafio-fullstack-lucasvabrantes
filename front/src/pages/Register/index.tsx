import { useContext } from "react";
import { IRegisterUser } from "../../providers/UserContext/@types";
import { UserContext } from "../../providers/UserContext";
import { TRegisterFormSchema, registerFormSchema } from "./registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { StyledForm } from "../../styles/Form";
import { StyledButton, StyledLink } from "../../styles/buttons";
import { StyledBody } from "./style";

export const RegisterPage = () => {
    const { registerUser } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TRegisterFormSchema>({
        resolver: zodResolver(registerFormSchema),
    });

    const submit = (formData: IRegisterUser) => {
        console.log(formData);
        registerUser(formData);
    };

    return (
        <StyledBody>
            <div className="registerFormContainer">
                <StyledForm onSubmit={handleSubmit(submit)}>
                    <Input
                        label="Nome"
                        type="text"
                        placeholder="Nome"
                        {...register("name")}
                        error={errors.name}
                    />
                    <Input
                        label="E-mail"
                        type="email"
                        placeholder="E-mail"
                        {...register("email")}
                        error={errors.email}
                    />
                    <Input
                        label="Telefone"
                        type="text"
                        placeholder="Telefone"
                        {...register("phone")}
                        error={errors.phone}
                    />

                    <Input
                        label="Senha"
                        type="password"
                        placeholder="Senha"
                        {...register("password")}
                        error={errors.password}
                    />
                    <Input
                        label="Repita sua senha"
                        type="password"
                        placeholder="Senha"
                        {...register("confirm")}
                        error={errors.confirm}
                    />
                    <StyledButton type="submit">Cadastrar-se</StyledButton>
                    <span className="loginText">Já é cadastrado?</span>
                    <StyledLink to="/">Página de Login</StyledLink>
                </StyledForm>
            </div>
        </StyledBody>
    );
};
