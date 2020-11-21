import { useEffect, useState } from 'react';

type SelectTypes = {
    hint?: string;
    id: string;
    label: string;
    options: Array<string>;
    value?: string;
    onChange: (number, string) => void;
}

// Styles
import {
    SelectInnerWrapper,
    SelectWrapper,
    StyledLabel,
    StyledSelect,
    StyledSpan,
} from './styles';

export const Select = ({
    hint = '',
    id,
    label,
    onChange,
    options,
    value = 'DEFAULT',
}: SelectTypes): React.ReactElement => {
    const [ selectValue, setValue ] = useState(value);
    const [ isFocused, setActive ] = useState(false);

    useEffect(() => {
        if (value) {
            setValue(value);
        }
    }, [ value, setValue ]);

    return (
        <SelectWrapper data-testid="select" { ...{ isFocused } }>
            <StyledLabel htmlFor={ id } { ...{ isFocused } }>{ label }</StyledLabel>
            <SelectInnerWrapper>
                <StyledSelect
                    onChange={ handleChange }
                    onFocus={ (): void => setActive(true) }
                    onBlur={ (): void => setActive(false) }
                    value={ selectValue }
                    { ...{ id, isFocused } }
                >
                    <option
                        value="DEFAULT"
                        disabled
                        hidden
                    >
                        { `Select their ${ label }` }
                    </option>

                    {
                        options.map((item, idx) => (
                            <option
                                key={ idx }
                                value={ item }
                                defaultValue={ item === selectValue && item }
                            >
                                { item }
                            </option>
                        ))
                    }
                </StyledSelect>
            </SelectInnerWrapper>
            { hint && <StyledSpan>{ hint }</StyledSpan> }
        </SelectWrapper>
    );

    function handleChange(event: React.ChangeEvent<HTMLSelectElement>): void {
        setValue(event.target.value);
        onChange(id, event.target.value);
    }
};

export default Select;
