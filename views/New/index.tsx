import React from 'react';
import { useRouter } from 'next/router';

import {
  FormFooter,
  FormInnerWrapper,
  SubTitle,
  SubmitButton,
  Title,
  TitleWrapper,
  Wrapper,
} from './styles';

const NewPerson = (): React.ReactElement => {
  const router = useRouter();

  const handleCancelClick = (): Promise<any> => router.push('/');

  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <Title>Add a new employee</Title>
          <SubTitle>Fill out the information of your new employee</SubTitle>
        </TitleWrapper>

        <form>
          <FormInnerWrapper>
            <input />
          </FormInnerWrapper>
          <FormFooter>
            <SubmitButton btnStyle="secondary" onClick={handleCancelClick}>
              Cancel
            </SubmitButton>
            <SubmitButton btnStyle="primary" type="submit">
              Add employee
            </SubmitButton>
          </FormFooter>
        </form>
      </Wrapper>
    </>
  );
};

export default NewPerson;
