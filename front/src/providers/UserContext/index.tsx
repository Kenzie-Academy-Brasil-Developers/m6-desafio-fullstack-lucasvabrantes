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
            await api.post("/users", formData);
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
            localStorage.setItem("@userId", data.id);
            toast.success("Login efetuado com sucesso!");
            navigate("/dashboard");
            const headers: object = {
                Authorization: `Bearer ${data.token}`,
            };

            const userData = await api.get<IUser>(`/users/${data.id}`, {
                headers,
            });
            setUser(userData.data);
        } catch (error) {
            toast.error(
                "Opa, algo deu errado, verifique seu login e senha estão corretos"
            );
        } finally {
            setLoading(false);
        }
    };

    const logoutUser = () => {
        toast.success("Logout efetuado com sucesso");
        localStorage.removeItem("@token");
        localStorage.removeItem("@userId");
        setUser(null);
        navigate("/");
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
                logoutUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
