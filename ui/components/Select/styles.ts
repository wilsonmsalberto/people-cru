import styled from '@emotion/styled';

type EmotionProps = {
  theme: Theme;
  isFocused?: boolean;
};

export const SelectWrapper = styled.div`
  margin-bottom: 3rem;
`;

export const StyledLabel = styled.label`
  display: block;
  width: 100%;
  color: ${({ isFocused, theme }: EmotionProps) => isFocused ? theme.highlight : theme.secondary};
  transition: 0.3s color linear;
`;

export const StyledSpan = styled.span`
  display: block;
  margin-top: 0.8rem;
  width: 100%;
  font-size: 1.3rem;
  line-height: 1.6rem;
  color: ${({ theme }) => theme.secondary};
  transition: 0.3s color linear;
`;

export const SelectInnerWrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;

  &:before {
    content: '⌄';
    display: block;
    position: absolute;
    font-size: 2.5rem;
    right: 0.4rem;
    bottom: 0.7rem;
    pointer-events: none;
    z-index: 1;
    color: ${({ theme }) => theme.secondary};
  }
`;

export const StyledSelect = styled.select`
  display: block;
  width: 100%;
  outline: 0;
  font-size: 2rem;
  line-height: 2.4rem;
  padding: 0.8rem 0;
  appearance: none;
  background: none;
  border: 0;
  border-radius: 0;
  border-bottom: .1rem solid ${({ isFocused, theme }: EmotionProps) => isFocused ? theme.highlight : theme.textColor};
  transition: 0.3s border linear;
`;
