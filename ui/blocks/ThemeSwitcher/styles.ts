import styled from '@emotion/styled';

type StyledComponentProps = {
  color: string;
  bgColor: string;
};

export const ThemeSwitcherButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: ${(props: StyledComponentProps): string => props.color};
  background-color: ${(props: StyledComponentProps): string => props.bgColor};

  svg {
    width: 3rem;
    height: 3rem;
    position: relative;
    top: 1px;
    fill: ${(props: StyledComponentProps): string => props.color};
  }
`;

export default ThemeSwitcherButton;
