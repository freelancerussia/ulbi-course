import type { Meta, StoryObj } from '@storybook/react';

import MainPage from './MainPage';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'pages/MainPage',
    component: MainPage,
    // parameters: {

    //     layout: 'centered',
    // },
    // tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: {

    }
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

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

