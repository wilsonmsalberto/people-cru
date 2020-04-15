import React, { createContext, useCallback, useEffect, useState } from 'react';

import data from './data.json';

type Person = {
  id: number;
  name: string;
  birthDate: string;
  job: string;
  country: string;
  salary: string;
};

export interface PeopleListContextInterface {
  addNewPerson: Function;
  updatePerson: Function;
  peopleList: Array<Person>;
  setPeopleList: Function;
  resultsAmount: number;
  setResultsAmount: Function;
}
export const PeopleListContext = createContext({} as PeopleListContextInterface);
const { Provider } = PeopleListContext;

export const PeopleListProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  const [peopleList, setPeopleList] = useState(data);
  const [resultsAmount, setResultsAmount] = useState(data.length);

  const handleSetPeopleList = useCallback((list: Array<Person>) => {
    setPeopleList(list);
    localStorage.setItem('personList', JSON.stringify(list));
  }, []);

  const updatePerson = (personDetails: Person): void => {
    const { id } = personDetails;

    const existingPersonIndex = peopleList.findIndex((person) => person.id === id);

    const newPersonList: Array<Person> = [...peopleList];

    newPersonList[existingPersonIndex] = personDetails;

    handleSetPeopleList(newPersonList);
  };

  const addNewPerson = (personDetails: Record<string, any>): void => {
    const newIndex = peopleList.length + 1;

    const newPerson: Person = {
      id: newIndex,
      name: personDetails.name,
      birthDate: personDetails.birthDate,
      job: personDetails.job,
      country: personDetails.country,
      salary: personDetails.salary,
    };

    const newPersonList: Array<Person> = [...peopleList, newPerson];

    handleSetPeopleList(newPersonList);
  };

  useEffect(() => {
    const list = localStorage.getItem('personList');
    const storedData = list ? JSON.parse(list) : data;

    handleSetPeopleList(storedData);
  }, [handleSetPeopleList]);

  return (
    <Provider
      value={{
        addNewPerson,
        updatePerson,
        peopleList,
        resultsAmount,
        setPeopleList,
        setResultsAmount,
      }}
    >
      {children}
    </Provider>
  );
};
