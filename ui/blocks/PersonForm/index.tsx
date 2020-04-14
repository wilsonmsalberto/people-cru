import React from 'react';

import { Select } from 'ui/components/Select';

import countries from './countries.json';

const PersonForm = (): React.ReactElement => {
  return (
    <>
      <Select options={countries} />
    </>
  );
};

export default PersonForm;
