import styled from '@emotion/styled';

import { GlobalStyles } from 'ui/theme';

type StyledComponentProps = {
  color: string;
  bgColor: string;
};

export const StyledHeader = styled.header`
  width: 100%;
  height: 8rem;
  padding: 2rem;
  transition: 1s color linear, 1s background-color linear;
  color: ${(props: StyledComponentProps): string => props.color};
  background-color: ${(props: StyledComponentProps): string => props.bgColor};
`;

export const InnerWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${GlobalStyles.PageWrapper}
`;

export default StyledHeader;
