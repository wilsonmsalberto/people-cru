import styled from '@emotion/styled';

import { Button } from 'ui/components/Button';

type StyledComponentProps = {
  theme: Record<any, string>;
};
export const FormInnerWrapper = styled.fieldset`
  padding: 5rem;

  /* stylelint-disable unit-allowed-list */
  @media only screen and (min-width: 1024px) {
    padding: 4.8rem 10rem;
  }

  @media only screen and (min-width: 1024px) {
    padding: 4.8rem 24rem;
  }
`;

export const FormFooter = styled.fieldset`
  padding: 3.6rem 0;
  text-align: center;
  background-color: ${(props: StyledComponentProps): string => props.theme.tableFooter};
`;

export const SubmitButton = styled(Button)`
  width: 14.5rem;
  margin: 0 0.8rem;
  box-shadow: none;
`;
