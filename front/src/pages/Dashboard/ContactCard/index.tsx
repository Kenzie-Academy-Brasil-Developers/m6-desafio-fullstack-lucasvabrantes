import { IContact } from "../../../providers/UserContext/@types";
import moment from "moment";
import { StyledCard } from "./style";
import DelIcon from "../../../assets/delete.svg";
import EditIcon from "../../../assets/edit.svg";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";

interface IContactCardProps {
    contact: IContact;
}

export const ContactCard = ({ contact }: IContactCardProps) => {
    const { setIsEditModalOpen, setObject, deleteContact } =
        useContext(UserContext);
    const sendInformationAndOpenModal = (contact: IContact) => {
        setObject(contact);
        setIsEditModalOpen(true);
    };
    const formattedDate = moment(contact.registerDate).format("DD/MM/YYYY");
    return (
        <StyledCard>
            <div className="contactsInfo">
                <p>Nome: {contact.name}</p>
                <p>E-mail: {contact.email}</p>
                <p>Telefone: {contact.phone}</p>
                <p>Cadastrado em: {formattedDate}</p>
            </div>
            <div className="buttonsContainer">
                <button onClick={() => sendInformationAndOpenModal(contact)}>
                    <img src={EditIcon} alt="Ícone para editar contato" />
                </button>
                <button onClick={() => deleteContact(contact.id)}>
                    <img src={DelIcon} alt="Ícone para deletar contato" />
                </button>
            </div>
        </StyledCard>
    );
};
