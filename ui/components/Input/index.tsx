import React, { useEffect, useState } from 'react';

import { InputWrapper } from './styles';

export const Input = ({
    hint = '',
    id,
    label,
    onChange,
    placeholder = '',
    type = 'text',
    value = '',
}: {
  hint?: string;
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange: Function;
}): React.ReactElement => {
    const [ inputValue, setValue ] = useState(value);
    const [ isFocused, setActive ] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target.value);
        onChange(id, event.target.value);
    };

    useEffect(() => {
        if (value) {
            setValue(value);
        }
    }, [ value, setValue ]);

    return (
        <InputWrapper isFocused={ isFocused }>
            <label htmlFor={ id }>{ label }</label>
            <input
                id={ id }
                onChange={ handleChange }
                placeholder={ placeholder }
                type={ type }
                value={ inputValue }
                onFocus={ (): void => setActive(true) }
                onBlur={ (): void => setActive(false) }
            />
            { hint && <span>{ hint }</span> }
        </InputWrapper>
    );
};

export default Input;
