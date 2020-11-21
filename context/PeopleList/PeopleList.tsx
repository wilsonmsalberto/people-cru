import { createContext, useCallback, useEffect, useState } from 'react';

import data from 'mocks/peopleList.json';
import { IPerson, IPersonList } from 'PersonTypes';

declare interface PeopleListContextInterface {
  addNewPerson: (Person) => void;
  updatePerson: (Person) => void;
  peopleList: IPersonList;
  setPeopleList: React.Dispatch<React.SetStateAction<IPersonList>>;
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
    const [ peopleList, setPeopleList ] = useState<IPersonList>(data);
    const [ resultsAmount, setResultsAmount ] = useState<number>(data.length);

    const handleSetPeopleList = useCallback((list: IPersonList) => {
        setPeopleList(list);
        localStorage.setItem('personList', JSON.stringify(list));
    }, []);

    const updatePerson = (personDetails: IPerson): void => {
        const { id } = personDetails;

        const existingPersonIndex = peopleList.findIndex((person) => person.id === id);

        const newPersonList: IPersonList = [ ...peopleList ];

        newPersonList[existingPersonIndex] = personDetails;

        handleSetPeopleList(newPersonList);
    };

    const addNewPerson = (personDetails: IPerson): void => {
        const newIndex = peopleList.length + 1;

        const newPerson: IPerson = {
            id       : newIndex,
            name     : personDetails.name,
            birthDate: personDetails.birthDate,
            job      : personDetails.job,
            country  : personDetails.country,
            salary   : personDetails.salary,
        };

        const newPersonList: IPersonList = [ newPerson, ...peopleList ];

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
