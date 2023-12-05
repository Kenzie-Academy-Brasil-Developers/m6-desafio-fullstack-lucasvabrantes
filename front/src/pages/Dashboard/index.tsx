import { useContext } from "react";
import { MainContainer, StyledBody, StyledHeader } from "./style";
import { UserContext } from "../../providers/UserContext";
import { StyledButton } from "../../styles/buttons";
import { ContactCard } from "./ContactCard";
import { ModalAddContact } from "../../components/ModalAddContact";
import { ModalEditContact } from "../../components/ModalEditContact";

export const Dashboard = () => {
    const {
        logoutUser,
        user,
        isEditModalOpen,
        isAddModalOpen,
        setIsAddModalOpen,
        contactsList,
    } = useContext(UserContext);

    return (
        <StyledBody>
            {isAddModalOpen && <ModalAddContact />}
            {isEditModalOpen && <ModalEditContact />}
            <StyledHeader>
                <div className="headerContainer">
                    <span>Olá, {user?.name}!</span>
                    <h1>My Contacts</h1>
                    <StyledButton onClick={logoutUser}>Sair</StyledButton>
                </div>
            </StyledHeader>
            <MainContainer>
                <div className="profileInfo">
                    <span>Meu telefone: {user?.phone}</span>
                    <StyledButton onClick={() => setIsAddModalOpen(true)}>
                        Adicionar Contato
                    </StyledButton>
                    <span>Meu e-mail: {user?.email}</span>
                </div>
                <section>
                    <ul>
                        {contactsList.length > 0 ? (
                            contactsList?.map((contact) => (
                                <ContactCard
                                    key={contact.id}
                                    contact={contact}
                                />
                            ))
                        ) : (
                            <p>
                                Você não tem contatos ainda, deseja adicionar?
                            </p>
                        )}
                    </ul>
                </section>
            </MainContainer>
        </StyledBody>
    );
};
