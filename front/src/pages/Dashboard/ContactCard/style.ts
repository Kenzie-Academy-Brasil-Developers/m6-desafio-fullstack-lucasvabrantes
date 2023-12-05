import styled from "styled-components";

export const StyledCard = styled.li`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--red-400);
    border-radius: 5px;
    padding: 8px;
    width: 100%;
    max-width: 300px;
    gap: 1rem;
    box-shadow: 8px 8px 30px 2px rgba(0, 0, 0, 0.3);

    .contactsInfo {
    }

    .buttonsContainer {
        display: flex;
        justify-content: space-between;

        button {
            transition: 0.5s;
            img {
                background-color: white;
            }
            &:hover {
                transform: scale(1.1);
            }
        }
    }
`;
