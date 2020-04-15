import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';

import { Select } from 'ui/components/Select';
import { Input } from 'ui/components/Input';

import countries from './countries.json';

import { PeopleListContext, PeopleListProvider } from 'context/PeopleList';

import { FormFooter, FormInnerWrapper, SubmitButton } from './styles';

type PersonFormInterface = {
  activePerson?: Record<string, any>;
  submitText: string;
};

const PersonForm = ({ activePerson = {}, submitText }: PersonFormInterface): React.ReactElement => {
  const { updatePerson, addNewPerson } = useContext(PeopleListContext);
  const router = useRouter();

  const defaultValues = {
    name: activePerson ? activePerson.name : '',
    birthDate: activePerson ? activePerson.birthDate : '',
    job: activePerson ? activePerson.job : '',
    country: activePerson ? activePerson.country : '',
    salary: activePerson ? activePerson.salary : '',
  };

  const [formValues, setFormValues] = useState(defaultValues);

  const handleFormValues = (id: string, value: string): void => {
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };

  const handleCancelClick = (): Promise<any> => router.push('/');

  const handleSubmit = (): void => {
    const { id } = activePerson;

    if (id) {
      updatePerson({
        id,
        ...formValues,
      });
    } else {
      addNewPerson(formValues);
    }

    router.push('/');
  };

  return (
    <form>
      <FormInnerWrapper>
        <Input
          id="name"
          placeholder="e.g. Jane Doe"
          hint="First and last names"
          label="Name"
          onChange={handleFormValues}
          value={activePerson && activePerson.name}
        />
        <Input
          id="birthDate"
          placeholder="e.g. 17/02/1990"
          hint="DD/MM/YYYY"
          label="Birthdate"
          onChange={handleFormValues}
          value={activePerson && activePerson.birthDate}
        />
        <Input
          id="job"
          placeholder="e.g. Product manager"
          hint="What is their role?"
          label="Job title"
          onChange={handleFormValues}
          value={activePerson && activePerson.job}
        />
        <Select
          id="country"
          options={countries}
          hint="Where are they based?"
          label="Country"
          onChange={handleFormValues}
          value={activePerson && activePerson.country}
        />
        <Input
          id="salary"
          placeholder="e.g. 5000"
          hint="Gross monthly salary"
          label="Salary"
          onChange={handleFormValues}
          value={activePerson && activePerson.salary}
        />
      </FormInnerWrapper>
      <FormFooter>
        <SubmitButton btnStyle="secondary" onClick={handleCancelClick}>
          Cancel
        </SubmitButton>
        <SubmitButton btnStyle="primary" type="submit" onSubmit={handleSubmit}>
          {submitText}
        </SubmitButton>
      </FormFooter>
    </form>
  );
};

const withContextPersonForm = (props: PersonFormInterface): React.ReactElement => (
  <PeopleListProvider>
    <PersonForm {...props} />
  </PeopleListProvider>
);

export default withContextPersonForm;
