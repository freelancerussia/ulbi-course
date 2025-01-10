import type { Meta, StoryObj } from '@storybook/react';

import { ThemeSwitcher } from './ThemeSwitcher';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher,
    // parameters: {

    //     layout: 'centered',
    // },
    // tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: {

    }
} satisfies Meta<typeof ThemeSwitcher>;

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