import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    cursor: pointer;
    background-color: var(--grey-700);
    color: white;
    border-radius: 5px;
    width: 170px;
    height: 40px;
    margin: 0rem 3rem;
    transition: 0.5s;
    align-self: center;
    text-decoration: none;

    &:hover {
        background-color: var(--green-200);
    }
`;

export const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    cursor: pointer;
    background-color: var(--grey-700);
    color: white;
    border-radius: 5px;
    width: 170px;
    height: 40px;
    margin: 0rem 3rem;
    transition: 0.5s;
    align-self: center;
    text-decoration: none;

    &:hover {
        background-color: var(--green-200);
    }
`;
