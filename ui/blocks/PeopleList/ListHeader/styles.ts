import styled from '@emotion/styled';

export const TableHeader = styled.thead`
  th {
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 2rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.secondary};
  }
`;
