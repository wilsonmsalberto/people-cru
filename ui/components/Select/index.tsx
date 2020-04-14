import React from 'react';

export const Select = ({ options }: { options: Array<string> }): React.ReactElement => {
  return (
    <select>
      {options.map((country, idx) => (
        <option key={idx} value={country}>
          {country}
        </option>
      ))}
    </select>
  );
};

export default Select;
