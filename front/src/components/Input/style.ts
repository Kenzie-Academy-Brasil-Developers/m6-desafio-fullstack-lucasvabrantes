import styled from "styled-components";

export const StyledInput = styled.input`
    border: var(--green) 1px solid;
    border-radius: 8px;
    padding: 5px 10px;
    font-size: 1rem;
    font-weight: 400;
    height: 50px;
    width: 100%;

    ::placeholder {
        color: var(--grey-700);
    }
`;

export const StyledLabel = styled.label`
    font-size: 1rem;
    font-weight: 700;
    align-self: flex-start;
    padding: 5px 10px;
`;

export const Error = styled.p`
    font-size: 0.875rem;
    font-weight: 400;
    margin-left: 4px;
    color: var(--red-400);
`;
