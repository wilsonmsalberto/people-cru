import styled from '@emotion/styled';

type StyledComponentProps = {
  theme: Record<any, string>;
};

export const TableHeader = styled.thead`
  th {
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 2rem;
    text-transform: uppercase;
    color: ${(props: StyledComponentProps): string => props.theme.secondary};
  }
`;

export default TableHeader;
