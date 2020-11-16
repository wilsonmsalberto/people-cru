import styled from '@emotion/styled';

type StyledComponentProps = {
  theme: Record<any, string>;
  isFocused: boolean;
};

export const InputWrapper = styled.div`
  margin-bottom: 3rem;

  label {
    display: block;
    width: 100%;
    color: ${(props: StyledComponentProps): string => {
        const { isFocused, theme } = props;

        return isFocused ? theme.highlight : theme.secondary;
    }};

    transition: 0.3s color linear;
  }

  input {
    display: block;
    width: 100%;
    outline: 0;
    font-size: 2rem;
    line-height: 2.4rem;
    padding: 0.8rem 0;
    background: transparent;
    border: 0;
    border-bottom: .1rem solid
      ${(props: StyledComponentProps): string => {
        const { isFocused, theme } = props;

        return isFocused ? theme.highlight : theme.textColor;
    }};

    transition: 0.3s border linear;

    &::placeholder {
      color: ${(props: StyledComponentProps): string => props.theme.secondary};
    }
  }

  span {
    display: block;
    margin-top: 0.8rem;
    width: 100%;
    font-size: 1.3rem;
    line-height: 1.6rem;
    color: ${(props: StyledComponentProps): string => props.theme.secondary};
    transition: 0.3s color linear;
  }
`;

export default InputWrapper;
