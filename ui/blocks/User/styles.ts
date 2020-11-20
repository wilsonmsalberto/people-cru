import styled from '@emotion/styled';

type StyledComponentProps = {
  bgColor?: string;
  color?: string;
  theme: Record<string, any>;
};

export const User = styled.aside`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 1.3rem;
  align-items: center;
  height: auto;
`;

export const UserImage = styled.div`
  grid-column: 1;
  grid-row: span 2;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background-color: ${({ bgColor, theme }: StyledComponentProps) => bgColor || theme.bgColor};
`;

export const UserName = styled.h2`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: ${({ color, theme }: StyledComponentProps) => color || theme.color};
`;

export const UserRole = styled.h3`
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 1.6rem;
  color: ${({ color, theme }: StyledComponentProps) => color || theme.color};
`;
