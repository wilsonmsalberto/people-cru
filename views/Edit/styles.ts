import styled from '@emotion/styled';

type StyledComponentProps = {
  theme: Record<any, string>;
};

export const Wrapper = styled.section`
  margin-top: 4rem;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0.6rem 0.6rem 5.4rem rgba(0, 0, 0, 0.05);
  background-color: ${(props: StyledComponentProps): string => props.theme.tableRow};
`;

export const TitleWrapper = styled.div`
  padding: 3.6rem;
  border-bottom: 1px solid ${(props: StyledComponentProps): string => props.theme.separator};
`;

export const Title = styled.h1`
  margin-bottom: 0.6rem;
  font-weight: 500;
  font-size: 2.2rem;
  line-height: 2.7rem;
`;

export const SubTitle = styled.span`
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: ${(props: StyledComponentProps): string => props.theme.default};
`;
