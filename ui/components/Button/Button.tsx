import React from 'react';

// Theme
import { StyledButton } from './styles';

export type ButtonProps = {
  children: React.ReactElement | string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
};

export const Button = ({
    children,
    className,
    type = 'button',
    variant = 'primary',
    ...otherProps
}: ButtonProps): React.ReactElement => (
    <StyledButton
        data-testid="button"
        { ...{
            type,
            className,
            variant,
            ...otherProps,
        } }
    >
        { children }
    </StyledButton>
);

export default Button;
