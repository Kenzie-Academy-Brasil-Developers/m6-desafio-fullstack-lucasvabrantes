export interface IUserContext {
    user: IUser | null;
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    registerUser: (formData: IRegisterUser) => Promise<void>;
    loginUser: (formData: IUserLogin) => Promise<void>;
    logoutUser: () => void;
    addContact: (formData: IContactRegister) => Promise<void>;
    editContact: (formData: IContactRegister) => Promise<void>;
    deleteContact: (contactId: string) => Promise<void>;
    contactsList: IContact[] | [];
    setContactsList: React.Dispatch<React.SetStateAction<[] | IContact[]>>;
    isAddModalOpen: boolean;
    isEditModalOpen: boolean;
    setIsAddModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    object: IContact | null;
    setObject: React.Dispatch<React.SetStateAction<IContact | null>>;
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
    contacts: [];
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
    id: string;
}

export interface IContact {
    id: string;
    name: string;
    email: string;
    phone: string;
    registerDate: Date;
    userId: string;
}

export interface IContactRegister {
    name: string;
    email: string;
    phone: string;
}
