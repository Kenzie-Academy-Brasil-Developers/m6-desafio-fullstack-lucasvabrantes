import styled from "styled-components";

export const StyledInput = styled.input`
    border: var(--green) 1px solid;
    border-radius: 8px;
    padding: 10px 16px;

    font-size: 1rem;
    font-weight: 400;
    height: 50px;
    width: 100%;

    ::placeholder {
        color: #00000050;
    }
`;

export const StyledLabel = styled.label`
    font-size: 21px;
    font-weight: 700;
    line-height: 25px;
    align-self: flex-start;
`;

export const Error = styled.p`
    font-family: "Roboto";
    font-size: 14px;
    font-weight: 500;
    color: #900;
`;
