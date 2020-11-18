import React, { createContext, useCallback, useEffect, useState } from 'react';

import data from 'mocks/peopleList.json';

type Person = {
  id: number;
  name: string;
  birthDate: string;
  job: string;
  country: string;
  salary: string;
};

type PersonList = Array<Person>;

declare interface PeopleListContextInterface {
  addNewPerson: (Person) => void;
  updatePerson: (Person) => void;
  peopleList: Array<Person>;
  setPeopleList: React.Dispatch<React.SetStateAction<PersonList>>;
  resultsAmount: number;
  setResultsAmount: React.Dispatch<React.SetStateAction<number>>;
}

export const PeopleListContext = createContext({} as PeopleListContextInterface);
const { Consumer, Provider } = PeopleListContext;

export const PeopleListConsumer = Consumer;

export const PeopleListProvider = ({
    children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
    const [ peopleList, setPeopleList ] = useState<PersonList>(data);
    const [ resultsAmount, setResultsAmount ] = useState<number>(data.length);

    const handleSetPeopleList = useCallback((list: PersonList) => {
        setPeopleList(list);
        localStorage.setItem('personList', JSON.stringify(list));
    }, []);

    const updatePerson = (personDetails: Person): void => {
        const { id } = personDetails;

        const existingPersonIndex = peopleList.findIndex((person) => person.id === id);

        const newPersonList: PersonList = [ ...peopleList ];

        newPersonList[existingPersonIndex] = personDetails;

        handleSetPeopleList(newPersonList);
    };

    const addNewPerson = (personDetails: Person): void => {
        const newIndex = peopleList.length + 1;

        const newPerson: Person = {
            id       : newIndex,
            name     : personDetails.name,
            birthDate: personDetails.birthDate,
            job      : personDetails.job,
            country  : personDetails.country,
            salary   : personDetails.salary,
        };

        const newPersonList: PersonList = [ ...peopleList, newPerson ];

        handleSetPeopleList(newPersonList);
    };

    useEffect(() => {
        const list = localStorage.getItem('personList');
        const storedData = list ? JSON.parse(list) : data;

        handleSetPeopleList(storedData);
    }, [ handleSetPeopleList ]);

    return (
        <Provider
            value={ {
                addNewPerson,
                updatePerson,
                peopleList,
                resultsAmount,
                setPeopleList,
                setResultsAmount,
            } }
        >
            { children }
        </Provider>
    );
};
