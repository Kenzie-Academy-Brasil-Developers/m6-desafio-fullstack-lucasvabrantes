import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { StyledFormContainer, StyledBody } from "./style";
import { TLoginFormSchema, loginFormSchema } from "./loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TLoginFormSchema>({
        resolver: zodResolver(loginFormSchema),
    });

    const submit = () => {
        
    }
    return (
        <StyledBody>
            <StyledFormContainer>
                <div className="formHeader">
                    <h1>Login</h1>
                </div>
                <form>
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
                </form>
            </StyledFormContainer>
        </StyledBody>
    );
};
