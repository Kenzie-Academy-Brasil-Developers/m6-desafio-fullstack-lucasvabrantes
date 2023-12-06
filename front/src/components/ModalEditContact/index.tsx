import { useContext } from "react";
import { StyledModalBox, StyledModalOverlay } from "./style";
import { UserContext } from "../../providers/UserContext";
import { StyledForm } from "../../styles/Form";
import { Input } from "../Input";
import {
    EditContactSchema,
    modalContactEditSchema,
} from "./modalContactEditSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IContactRegister } from "../../providers/UserContext/@types";

export const ModalEditContact = () => {
    const { setIsEditModalOpen, object, editContact } = useContext(UserContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<EditContactSchema>({
        resolver: zodResolver(modalContactEditSchema),
    });

    const submit: SubmitHandler<EditContactSchema> = (
        formData: IContactRegister
    ) => {
        editContact(formData);
    };
    return (
        <StyledModalOverlay role="dialog">
            <StyledModalBox>
                <div className="modalContent">
                    <StyledForm onSubmit={handleSubmit(submit)}>
                        <Input
                            type="text"
                            label="Nome"
                            defaultValue={object?.name}
                            {...register("name")}
                            error={errors.name}
                        />
                        <Input
                            label="E-mail"
                            type="email"
                            defaultValue={object?.email}
                            {...register("email")}
                            error={errors.email}
                        />
                        <Input
                            label="Telefone"
                            type="text"
                            defaultValue={object?.phone}
                            {...register("phone")}
                            error={errors.phone}
                        />
                        <div className="buttonContainer">
                            <button type="submit">Editar</button>
                            <button onClick={() => setIsEditModalOpen(false)}>
                                Fechar Modal
                            </button>
                        </div>
                    </StyledForm>
                </div>
            </StyledModalBox>
        </StyledModalOverlay>
    );
};
