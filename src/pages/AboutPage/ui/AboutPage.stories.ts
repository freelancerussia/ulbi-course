import type { Meta, StoryObj } from '@storybook/react';

import AboutPage from './AboutPage';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'pages/AboutPage',
    component: AboutPage,
    // parameters: {

    //     layout: 'centered',
    // },
    // tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: {

    }
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;


// const themes = Object.values(Theme);

// themes.forEach((theme) => {
//     exports[theme.toUpperCase()] = {
//         parametrs:{
//             theme
//         }
//     };
// });

export const Primary: Story = {
    parameters: {
        theme: Theme.LIGHT,
    },
    args: {

    },
};

export const Dark: Story = {
    parameters: {
        theme: Theme.DARK,
    },
    args: {

    },
};