import styled from '@emotion/styled';
import { rgba } from 'emotion-rgba';

import { Button } from './Button';

type StyledComponentProps = {
  color: string;
  bgColor: string;
  borderColor: string;
};

export const StyledButton = styled(Button)`
  position: relative;
  width: 18rem;
  height: 4.5rem;
  padding: 0;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.9rem;
  border-radius: 5rem;
  appearance: none;
  outline: none;
  transition: 0.2s transform linear, 0.2s opacity linear;

  ${(props: StyledComponentProps): string => `
    box-shadow: 0 .6rem 1.2rem ${rgba(
      props.bgColor === 'transparent' ? '#ffffff' : props.bgColor || '#ffffff',
      0.3
    )};
    border: 2px solid ${rgba(
      props.borderColor === 'transparent' ? '#ffffff' : props.borderColor || '#ffffff',
      0.3
    )};
    color: ${props.color || ''};
    background-color: ${props.bgColor || ''};
    `}

  &:hover {
    transform: translateY(0.2rem);
    opacity: 0.85;
  }
`;

export default StyledButton;
