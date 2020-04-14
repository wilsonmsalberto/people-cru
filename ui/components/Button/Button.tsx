import React, { SFC } from 'react';

export type ButtonProps = {
  children: React.ReactElement | string;
  className?: string;
  onClick?: Function;
  type?: 'button' | 'submit' | 'reset';
};

export const Button: SFC<ButtonProps> = ({
  children,
  onClick,
  className,
  type = 'button',
}): React.ReactElement => {
  const handleOnClick = (event?: MouseEvent): void => {
    if (event) {
      event.preventDefault();
    }

    if (!onClick) return;

    onClick();
  };

  return (
    <button className={className} onClick={(): void => handleOnClick()} type={type}>
      {children}
    </button>
  );
};

export default Button;
