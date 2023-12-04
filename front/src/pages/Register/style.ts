import styled from "styled-components";

export const StyledBody = styled.div`
    width: 100vw;
    align-items: center;
    align-content: center;
    flex-direction: column;
    justify-content: center;

    .registerFormContainer {
        display: flex;
        gap: 1rem;
        flex-direction: column;
        justify-content: center;
        margin: 2rem auto;
        width: 100%;
        max-width: 400px;
        padding: 1rem;

        form {
            button {
                margin-top: 1rem;
            }
            .loginText {
                align-self: center;
            }
        }
    }
`;
