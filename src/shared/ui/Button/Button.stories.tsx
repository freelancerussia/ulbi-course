import type { Meta, StoryObj } from '@storybook/react';

import { Button, ThemeButton } from './Button';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/Button',
    component: Button,
    // parameters: {

    //     layout: 'centered',
    // },
    // tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    parameters: {
        theme: Theme.LIGHT,
    },
    args: {
        children:'Text'
    },
};
export const Clear: Story = {
    parameters: {
        theme: Theme.LIGHT,
    },
    args: {
        children:'Text',
        theme: ThemeButton.CLEAR
    },
    argTypes: {
        theme: {
            control: { type: 'select' },
            options: Object.values(ThemeButton),
        },
    },
};

export const Outline: Story = {
    parameters: {
        theme: Theme.LIGHT,
    },
    args: {
        children:'Text',
        theme: ThemeButton.OUTLINE
    },
};

export const PrimaryDark: Story = {
    parameters: {
        theme: Theme.DARK,
    },
    args: {
        children:'Text'
    },
};
export const ClearDark: Story = {
    parameters: {
        theme: Theme.DARK,
    },
    args: {
        children:'Text',
        theme: ThemeButton.CLEAR
    },
    argTypes: {
        theme: {
            control: { type: 'select' },
            options: Object.values(ThemeButton),
        },
    },
};

export const OutlineDark: Story = {
    parameters: {
        theme: Theme.DARK,
    },
    args: {
        children:'Text',
        theme: ThemeButton.OUTLINE
    },
};