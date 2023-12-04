export interface IUserContext {
    user: IUser | null;
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    registerUser: (formData: IRegisterUser) => Promise<void>;
    loginUser: (FormData: IUserLogin) => Promise<void>;
}

export interface IUserProviderProps {
    children: React.ReactNode;
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    phone: string;
    registerDate: Date;
}

export interface IRegisterUser {
    name: string;
    email: string;
    phone: string;
    password: string;
}

export interface IUserLogin {
    email: string;
    password: string;
}

export interface IUserLoginResponse {
    token: string;
}
