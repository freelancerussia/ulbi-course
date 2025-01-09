import type { Preview, } from '@storybook/react';
import '../../src/app/styles/index.scss';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [ThemeDecorator, RouterDecorator],
    argTypes: {
        themeStory: {
            control: { type: 'radio' },
            options: Object.values(Theme), // Получаем все значения enum Theme
            defaultValue: Theme.LIGHT,
        },
    },
};



export default preview;
