import type { Meta, StoryObj } from '@storybook/react';

import { PageError } from './PageError';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'widgets/PageError',
    component: PageError,
    // parameters: {

    //     layout: 'centered',
    // },
    // tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof PageError>;

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