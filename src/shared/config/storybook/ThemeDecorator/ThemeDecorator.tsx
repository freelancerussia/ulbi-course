import { Theme } from 'app/providers/ThemeProvider';
import { JSX } from 'react';

export const ThemeDecorator = (Story: () => JSX.Element, context: {args: {themeStory?: Theme}}) => {
    const theme = context.args.themeStory || Theme.LIGHT; // Значение по умолчанию
    return <div className={`app ${theme}`}><Story /></div>;
};