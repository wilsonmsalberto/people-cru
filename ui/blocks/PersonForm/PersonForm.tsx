import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// Types
import { IPerson } from 'PersonTypes';

// Context
import { PeopleListContext, PeopleListProvider } from 'context/PeopleList';

// Components
import Select from 'ui/components/Select';
import Input from 'ui/components/Input';

// Mock Data
import countries from 'mocks/countries.json';

// Styles
import { FormFooter, FormInnerWrapper, SubmitButton } from './styles';

type PersonFormInterface = {
  activePerson?: IPerson;
  submitText: string;
};

const PersonForm = ({
    activePerson = {
        name     : '',
        birthDate: '',
        job      : '',
        country  : '',
        salary   : '',
    },
    submitText,
}: PersonFormInterface): React.ReactElement => {
    const { addNewPerson, updatePerson } = useContext(PeopleListContext);
    const router = useRouter();

    const [ formValues, setFormValues ] = useState(activePerson);

    useEffect(() => {
        if (activePerson.name) {
            setFormValues(activePerson);
        }
    }, [ activePerson ]);

    return (
        <form onSubmit={ handleSubmit } data-testid="personform">
            <FormInnerWrapper>
                <Input
                    id="name"
                    placeholder="e.g. Jane Doe"
                    hint="First and last names"
                    label="Name"
                    onChange={ handleFormValues }
                    value={ formValues.name }
                />
                <Input
                    id="birthDate"
                    placeholder="e.g. 17/02/1990"
                    hint="DD/MM/YYYY"
                    label="Birthdate"
                    onChange={ handleFormValues }
                    value={ formValues.birthDate }
                />
                <Input
                    id="job"
                    placeholder="e.g. Product manager"
                    hint="What is their role?"
                    label="Job title"
                    onChange={ handleFormValues }
                    value={ formValues.job }
                />
                <Select
                    id="country"
                    options={ countries }
                    hint="Where are they based?"
                    label="Country"
                    onChange={ handleFormValues }
                    value={ formValues.country }
                />
                <Input
                    id="salary"
                    placeholder="e.g. 5000"
                    hint="Gross monthly salary"
                    label="Salary"
                    onChange={ handleFormValues }
                    value={ formValues.salary }
                />
            </FormInnerWrapper>

            <FormFooter>
                <SubmitButton
                    variant="secondary"
                    onClick={ handleFinish }
                >
                    Cancel
                </SubmitButton>

                <SubmitButton type="submit">
                    { submitText }
                </SubmitButton>
            </FormFooter>
        </form>
    );

    function handleFormValues(id: string, value: string) {
        setFormValues({
            ...formValues,
            [id]: value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const { id } = activePerson;

        if (id) {
            updatePerson({
                id,
                ...formValues,
            });
        } else {
            addNewPerson(formValues);
        }

        handleFinish();
    }

    function handleFinish() {
        router.push('/');
    }
};

const withContextPersonForm = (props: PersonFormInterface): React.ReactElement => (
    <PeopleListProvider>
        <PersonForm { ...props } />
    </PeopleListProvider>
);

export default withContextPersonForm;
