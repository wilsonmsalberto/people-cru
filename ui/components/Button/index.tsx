import React, { SFC } from 'react';
import { useTheme } from 'emotion-theming';

import StyledButton from './styles';

import { ButtonProps } from './Button';

interface StyledProps extends ButtonProps {
  btnStyle?: 'primary' | 'secondary';
}

export const Button: SFC<StyledProps> = ({
  btnStyle = 'primary',
  ...props
}): React.ReactElement => {
  const { buttonBgColor, buttonTextColor } = useTheme();

  const buttonTypes = {
    primary: {
      color: buttonTextColor,
      bgColor: buttonBgColor,
      borderColor: buttonBgColor,
    },
    secondary: {
      color: buttonBgColor,
      bgColor: buttonTextColor,
      borderColor: buttonBgColor,
    },
  };

  const selectedStyle = buttonTypes[btnStyle];

  return (
    <StyledButton
      borderColor={selectedStyle.borderColor}
      bgColor={selectedStyle.bgColor}
      color={selectedStyle.color}
      {...props}
    />
  );
};

export default Button;
