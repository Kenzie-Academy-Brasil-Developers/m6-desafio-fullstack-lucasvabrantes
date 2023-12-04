import styled from "styled-components";

export const StyledBody = styled.div`
    width: 100vw;
    height: 100vh;
    align-items: center;
    align-content: center;
    flex-direction: column;
    justify-content: center;

    .formContainer {
        display: flex;
        gap: 1rem;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;
        width: 100%;
        max-width: 400px;
        padding: 2rem;

        .formHeader {
            display: flex;
            justify-content: center;
            h1 {
                font-size: 1.5rem;
            }
        }

        form {
            button {
                margin-top: 1rem;
            }
        }
    }
`;
