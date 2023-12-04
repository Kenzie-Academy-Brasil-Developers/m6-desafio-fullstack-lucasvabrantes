import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { Error, StyledInput, StyledLabel } from "./style";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: FieldError;
}

export const Input = forwardRef(
    (
        { label, error, ...rest }: IInputProps,
        ref: ForwardedRef<HTMLInputElement>
    ) => {
        return (
            <>
                {label ? (
                    <StyledLabel htmlFor={rest.name}>{label}</StyledLabel>
                ) : null}
                <StyledInput {...rest} ref={ref} />
                {error ? <Error>{error.message}</Error> : null}
            </>
        );
    }
);