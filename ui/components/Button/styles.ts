import styled from '@emotion/styled';
import { rgba } from 'emotion-rgba';

import { Button } from './Button';

type StyledComponentProps = {
  color: string;
  bgColor: string;
  borderColor: string;
};

export const StyledButton = styled(Button)`
  padding: 1.3rem 2.3rem;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.9rem;
  border-radius: 5rem;
  appearance: none;
  outline: none;
  ${(props: StyledComponentProps): string => `
    box-shadow: 0 .6rem 1.2rem ${rgba(
      props.bgColor === 'transparent' ? '#ffffff' : props.bgColor,
      0.3
    )};
    border: 2px solid ${rgba(
      props.borderColor === 'transparent' ? '#ffffff' : props.borderColor,
      0.3
    )};
    color: ${props.color || ''};
    background-color: ${props.bgColor || ''};
    `}
`;

export default StyledButton;
