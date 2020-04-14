import styled from '@emotion/styled';

type StyledComponentProps = {
  color: string;
  bgColor: string;
};

export const ThemeSwitcherButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 0;
  appearance: none;
  color: ${(props: StyledComponentProps): string => props.color};
  background-color: transparent;

  svg {
    width: 3rem;
    height: 3rem;
    position: relative;
    top: 0.1rem;
    fill: ${(props: StyledComponentProps): string => props.bgColor};
    transition: 0.2s transform linear, 0.2s opacity linear;
  }

  &:hover {
    svg {
      transform: scale(1.1);
      opacity: 0.85;
    }
  }
`;

export default ThemeSwitcherButton;
