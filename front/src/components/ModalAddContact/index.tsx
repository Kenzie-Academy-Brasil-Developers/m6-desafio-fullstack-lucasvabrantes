import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { modalContactEditSchema } from "../ModalEditContact/modalContactEditSchema";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { AddContactSchema } from "./modalAddContactSchema";
import { IContactRegister } from "../../providers/UserContext/@types";
import { StyledModalBox, StyledModalOverlay } from "./style";
import { Input } from "../Input";
import { StyledForm } from "../../styles/Form";

export const ModalAddContact = () => {
    const { setIsAddModalOpen, addContact } = useContext(UserContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AddContactSchema>({
        resolver: zodResolver(modalContactEditSchema),
    });

    const submit: SubmitHandler<AddContactSchema> = (
        formData: IContactRegister
    ) => {
        addContact(formData);
    };

    return (
        <StyledModalOverlay role="dialog">
            <StyledModalBox>
                <div className="modalContent">
                    <StyledForm onSubmit={handleSubmit(submit)}>
                        <Input
                            type="text"
                            label="Nome"
                            placeholder="Digite um nome"
                            {...register("name")}
                            error={errors.name}
                        />
                        <Input
                            label="E-mail"
                            type="email"
                            placeholder="Digite um e-mail"
                            {...register("email")}
                            error={errors.email}
                        />
                        <Input
                            label="Telefone"
                            type="text"
                            placeholder="Digite um número de telefone"
                            {...register("phone")}
                            error={errors.phone}
                        />
                        <div className="buttonContainer">
                            <button type="submit">Adicionar</button>
                            <button onClick={() => setIsAddModalOpen(false)}>
                                Fechar Modal
                            </button>
                        </div>
                    </StyledForm>
                </div>
            </StyledModalBox>
        </StyledModalOverlay>
    );
};
