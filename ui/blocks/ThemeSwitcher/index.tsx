import { useContext } from 'react';

// Context
import { AppThemeContext } from 'context/AppTheme';

// Components
import { ContrastIcon } from 'ui/components/Icons';

// Styles
import { ThemeSwitcherButton } from './styles';

const ThemeSwitcher = (): React.ReactElement => {
    const { switchTheme } = useContext(AppThemeContext);

    return (
        <ThemeSwitcherButton onClick={ (): void => switchTheme() } >
            <ContrastIcon />
        </ThemeSwitcherButton>
    );
};

export default ThemeSwitcher;
