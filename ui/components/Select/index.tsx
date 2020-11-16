import React, { useEffect, useState } from 'react';

import { SelectInnerWrapper, SelectWrapper } from './styles';

export const Select = ({
    hint = '',
    id,
    label,
    onChange,
    options,
    value = 'DEFAULT',
}: {
  hint?: string;
  id: string;
  label: string;
  options: Array<string>;
  value?: string;
  onChange: Function;
}): React.ReactElement => {
    const [ selectValue, setValue ] = useState(value);
    const [ isFocused, setActive ] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        setValue(event.target.value);
        onChange(id, event.target.value);
    };

    useEffect(() => {
        if (value) {
            setValue(value);
        }
    }, [ value, setValue ]);

    return (
        <SelectWrapper isFocused={ isFocused }>
            <label htmlFor={ id }>{ label }</label>
            <SelectInnerWrapper>
                <select
                    id={ id }
                    onChange={ handleChange }
                    onFocus={ (): void => setActive(true) }
                    onBlur={ (): void => setActive(false) }
                    value={ selectValue }
                >
                    <option
                        value="DEFAULT"
                        disabled
                        hidden
                    >
                        Select their Country
                    </option>
                    { options.map((country, idx) => (
                        <option
                            key={ idx }
                            value={ country }
                        >
                            { country }
                        </option>
                    )) }
                </select>
            </SelectInnerWrapper>
            { hint && <span>{ hint }</span> }
        </SelectWrapper>
    );
};

export default Select;
