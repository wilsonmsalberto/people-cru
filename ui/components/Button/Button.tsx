import React, { SFC } from 'react';

export type ButtonProps = {
  children: React.ReactElement | string;
  className?: string;
  onClick?: Function;
  onSubmit?: Function;
  type?: 'button' | 'submit' | 'reset';
};

export const Button: SFC<ButtonProps> = ({
    children,
    className,
    onClick,
    onSubmit,
    type = 'button',
}): React.ReactElement => {
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
            className={ className }
            onClick={ handleOnClick }
            onSubmit={ handleOnClick }
            type={ type }
        >
            { children }
        </button>
    );
};

export default Button;
