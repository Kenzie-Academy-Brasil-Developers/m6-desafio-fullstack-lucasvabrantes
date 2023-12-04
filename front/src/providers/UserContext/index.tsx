import { createContext, useState } from "react";
import {
    IRegisterUser,
    IUser,
    IUserContext,
    IUserLogin,
    IUserLoginResponse,
    IUserProviderProps,
} from "./@types";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
    const navigate = useNavigate();
    const [user, setUser] = useState<IUser | null>(null);
    const [loading, setLoading] = useState(false);

    const registerUser = async (formData: IRegisterUser) => {
        try {
            setLoading(true);
            const { data } = await api.post("/users", formData);
            toast.success("Cadastro efetuado com sucesso!");
            navigate("/");
        } catch (error) {
            toast.error(
                "Oops, algo deu errado, verifique o erro abaixo dos campos"
            );
        } finally {
            setLoading(false);
        }
    };

    const loginUser = async (formData: IUserLogin) => {
        try {
            setLoading(true);
            const { data } = await api.post<IUserLoginResponse>(
                "/login",
                formData
            );
            localStorage.setItem("@token", data.token);
            toast.success("Login efetuado com sucesso!");
            navigate("/dashboard");
            
            const userContacts = await api.get("")
        } catch (error) {
            toast.error(
                "Opa, algo deu errado, verifique seu login e senha estão corretos"
            );
        } finally {
            setLoading(false);
        }
    };
    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                loading,
                setLoading,
                registerUser,
                loginUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
