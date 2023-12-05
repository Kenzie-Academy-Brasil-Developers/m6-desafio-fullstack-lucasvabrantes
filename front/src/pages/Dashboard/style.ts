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
        max-width: 970px;
        width: 100%;

        span {
            color: var(--grey-700);
        }

        h1 {
            color: var(--grey-700);
        }

        button {
            margin: 0;
            width: 70px;
            font-family: var(--font-family);
            &:hover {
                background-color: var(--red-400);
            }
        }
    }
`;

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    max-width: 970px;
    margin: 0 auto;

    .profileInfo {
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-content: center;
        width: 100%;
        margin: 1rem 0rem;
    }

    section {
        margin-top: 1rem;
        display: flex;
        width: 100%;
        border: 2px solid var(--grey-700);
        ul {
            display: flex;
            flex-wrap: wrap;
            padding: 1rem;
            gap: 1rem;
            width: 100%;
        }
    }
`;
