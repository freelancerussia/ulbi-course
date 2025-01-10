import type { Preview, } from '@storybook/react';
import '../../src/app/styles/index.scss';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
// import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        themes: { // Определение тем
            default: 'light',
            list: [
                { name: 'light', class: `app ${Theme.LIGHT}`, },
                { name: 'dark', class: `app ${Theme.DARK}`, },
            ],
        },
    },
    decorators: [(Story, context) => (
        <ThemeProvider>
            <div className={`app ${context.parameters.theme}`}>
                <Story/>
            </div>
        </ThemeProvider>
    ), RouterDecorator],
    //если использовать ThemeDecorator и радио кнопку на один компонент
    // argTypes: {
    //     themeStory: {
    //         control: { type: 'radio' },
    //         options: Object.values(Theme), // Получаем все значения enum Theme
    //         defaultValue: Theme.LIGHT,
    //     },
    // },
};



export default preview;
