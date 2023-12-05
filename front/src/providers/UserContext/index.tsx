import { createContext, useEffect, useState } from "react";
import {
    IContact,
    IContactRegister,
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
    const [contactsList, setContactsList] = useState<IContact[] | []>([]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [object, setObject] = useState<IContact | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("@token");
        const userId = localStorage.getItem("@userId");
        const loadUserData = async () => {
            if (token && userId) {
                const headers: object = {
                    Authorization: `Bearer ${token}`,
                };
                const userData = await api.get<IUser>(`/users/${userId}`, {
                    headers,
                });
                setUser(userData.data);
                setContactsList(userData.data.contacts);
            }
        };
        loadUserData();
    }, []);

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

    const addContact = async (formData: IContactRegister) => {
        const token = localStorage.getItem("@token");
        try {
            const { data } = await api.post("/contacts", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.success("Contato adicionado com sucesso!");
            setContactsList([...contactsList, data]);
            setIsAddModalOpen(false);
        } catch (error) {
            toast.error("Erro!");
        }
    };

    const editContact = async (formData: IContactRegister) => {
        const token = localStorage.getItem("@token");
        const contactId = object?.id;

        try {
            const { data } = await api.patch(
                `/contacts/${contactId}`,
                formData,
                { headers: { Authorization: `Bearer ${token}` } }
            );

            const newContactsList = contactsList.map((contact) => {
                if (contact.id === contactId) {
                    return data;
                } else {
                    return contact;
                }
            });

            toast.success("Contato atualizado com sucesso");
            setContactsList(newContactsList);
            setIsEditModalOpen(false);
        } catch (error) {
            toast.error("Erro!");
        }
    };

    const deleteContact = async (contactId: string) => {
        const token = localStorage.getItem("@token");

        try {
            await api.delete(`/contacts/${contactId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const newContactsList = contactsList.filter(
                ({ id }) => id !== contactId
            );
            setContactsList(newContactsList);
            toast.success("Contato deletado com sucesso");
        } catch (error) {
            console.log(error);
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
                logoutUser,
                addContact,
                editContact,
                deleteContact,
                contactsList,
                setContactsList,
                isAddModalOpen,
                isEditModalOpen,
                setIsAddModalOpen,
                setIsEditModalOpen,
                object,
                setObject,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
