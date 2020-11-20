import styled from '@emotion/styled';

export const Wrapper = styled.section`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Title = styled.h1`
  margin-right: 0.8rem;
  font-weight: 500;
  font-size: 2.6rem;
  line-height: 3.1rem;
`;

export const SubTitle = styled.span`
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 2.1rem;
  color: ${({ theme }) => theme.secondary};
`;
