import { useContext } from "react";
import { StyledBody, StyledHeader } from "./style";
import { UserContext } from "../../providers/UserContext";
import { StyledButton } from "../../styles/buttons";

export const Dashboard = () => {
    const { logoutUser, user } = useContext(UserContext);

    const userContacts = user?.contacts;

    return (
        <StyledBody>
            <StyledHeader>
                <div className="headerContainer">
                    <span>Olá, {user?.name}!</span>

                    <StyledButton onClick={logoutUser}>Sair</StyledButton>
                </div>
            </StyledHeader>
            <main>
                <section></section>
                <section>
                    <ul>
                        {userContacts?.map((contact) => (
                            <li>
                                <p>{contact.name}</p>
                                <p>{contact.email}</p>
                                <p>{contact.phone}</p>
                                <p>{contact.registerDate}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </StyledBody>
    );
};
