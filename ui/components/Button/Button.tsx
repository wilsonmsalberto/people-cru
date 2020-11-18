import React from 'react';

export type ButtonProps = {
  children: React.ReactElement | string;
  className?: string;
  onClick?: () => void;
  onSubmit?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

export const Button = ({
    children,
    className,
    onClick,
    onSubmit,
    type = 'button',
}: ButtonProps): React.ReactElement => {
    const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        if (event) {
            event.preventDefault();
        }

        if (type === 'submit' && onSubmit) {
            onSubmit();
        }

        if (onClick) {
            onClick();
        }
    };

    return (
        <button
            onClick={ handleOnClick }
            onSubmit={ handleOnClick }
            { ...{ type, className } }
        >
            { children }
        </button>
    );
};

export default Button;
