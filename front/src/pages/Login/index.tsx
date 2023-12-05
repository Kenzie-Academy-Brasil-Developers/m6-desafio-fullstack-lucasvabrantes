import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";

import { TLoginFormSchema, loginFormSchema } from "./loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { IUserLogin } from "../../providers/UserContext/@types";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { StyledForm } from "../../styles/Form";
import { StyledBody } from "./style";
import { StyledButton, StyledLink } from "../../styles/buttons";

export const Login = () => {
    const { loginUser } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TLoginFormSchema>({
        resolver: zodResolver(loginFormSchema),
    });

    const submit = (formData: IUserLogin) => {
        loginUser(formData);
    };

    return (
        <StyledBody>
            <div className="formContainer">
                <div className="formHeader">
                    <h1>Login</h1>
                </div>
                <StyledForm onSubmit={handleSubmit(submit)}>
                    <Input
                        label="E-mail"
                        type="email"
                        placeholder="E-mail"
                        {...register("email")}
                        error={errors.email}
                    />
                    <Input
                        label="Senha"
                        type="password"
                        placeholder="Senha"
                        {...register("password")}
                        error={errors.email}
                    />
                    <StyledButton type="submit">Logar</StyledButton>
                    <StyledLink to="/register">Cadastrar-se</StyledLink>
                </StyledForm>
            </div>
        </StyledBody>
    );
};
