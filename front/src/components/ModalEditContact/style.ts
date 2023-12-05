import styled from "styled-components";

export const StyledModalOverlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;
    background-color: rgba(18, 18, 20, 0.5);
`;

export const StyledModalBox = styled.div`
    width: 100%;
    max-width: 370px;
    margin: 10px;
    height: 342px;
    background-color: var(--gray-3);
    border-radius: 4px;

    .modalContent {
        background-color: var(--grey-100);

        form {
            .buttonContainer {
                margin-top: 1rem;
                display: flex;
                justify-content: space-between;

                button:first-child {
                    background-color: var(--grey-700);
                    color: var(--grey-100);
                    padding: 10px;
                    border-radius: 5px;

                    &:hover {
                        background-color: var(--green-200);
                    }
                }

                button:last-child {
                    background-color: var(--grey-700);
                    color: var(--grey-100);
                    padding: 10px;
                    border-radius: 5px;

                    &:hover {
                        background-color: var(--red-400);
                    }
                }
            }
        }
    }
`;
