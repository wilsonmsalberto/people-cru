import styled from '@emotion/styled';

type StyledComponentProps = {
  theme: Record<any, string>;
};

export const StyledTable = styled.table`
  border: none;
  border-collapse: separate;
  width: 100%;
  margin-top: 5.6rem;
  text-align: left;
  border-spacing: 0 1rem;

  tbody > tr {
    box-shadow: 0.6rem 0.6rem 5.4rem rgba(0, 0, 0, 0.05);
  }

  th,
  td {
    border: 0;
    padding-left: 2.6rem;
  }

  td {
    background-color: ${(props: StyledComponentProps): string => props.theme.primary};

    &:first-of-type {
      border-top-left-radius: 1rem;
      border-bottom-left-radius: 1rem;
    }

    &:last-of-type {
      padding-right: 2.6rem;
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
    }
  }
`;

export default StyledTable;
