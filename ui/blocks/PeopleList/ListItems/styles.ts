import styled from '@emotion/styled';

type StyledComponentProps = {
  theme: Record<any, string>;
};

import { Button } from 'ui/components/Button';

export const PersonLine = styled.tr`
  font-size: 1.6rem;
  line-height: 2.6rem;
  color: ${(props: StyledComponentProps): string => props.theme.default};
`;

export const PersonName = styled.p`
  margin-bottom: 0.4rem;
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.2rem;
  color: ${(props: StyledComponentProps): string => props.theme.textColor};
`;

export const PersonBirth = styled.span`
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: ${(props: StyledComponentProps): string => props.theme.secondary};
`;

export const SalaryCell = styled.td`
  span {
    font-size: 1.3rem;
    line-height: 1.8rem;
    margin-left: 0.4rem;
    color: ${(props: StyledComponentProps): string => props.theme.secondary};
  }
`;

export const ButtonCell = styled.td`
  text-align: right;
`;

export const EditButton = styled(Button)`
  width: 14.5rem;
  height: 4rem;
  background-color: ${(props: StyledComponentProps): string => props.theme.white};
`;
