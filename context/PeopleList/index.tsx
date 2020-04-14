import React, { createContext, useState } from 'react';

import data from './data.json';

export interface PeopleListContextInterface {
  peopleList: Array<object>;
  setPeopleList: Function;
  resultsAmount: number;
  setResultsAmount: Function;
}

const { Provider, Consumer } = createContext<PeopleListContextInterface | null>(null);

export const PeopleListConsumer = Consumer;

export const PeopleListProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  const [peopleList, setPeopleList] = useState(data);
  const [resultsAmount, setResultsAmount] = useState(data.length);

  return (
    <Provider
      value={{
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
