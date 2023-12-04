import styled from "styled-components";

export const StyledBody = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
`;

export const StyledHeader = styled.header`
    display: flex;
    width: 100%;
    padding: 1rem;
    justify-content: center;

    .headerContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-content: center;
        max-width: 900px;
        width: 100%;
        span {
            color: var(--grey-700);
        }

        button {
            width: 80px;
            &:hover {
                background-color: var(--red-400);
            }
        }
    }
`;
