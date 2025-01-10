import type { Meta, StoryObj } from '@storybook/react';

import { PageLoader } from './PageLoader';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'widgets/PageLoader',
    component: PageLoader,
    // parameters: {

    //     layout: 'centered',
    // },
    // tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: {

    }
} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    parameters: {
        theme: Theme.LIGHT,
    },
    args: {

    },
};

export const PrimaryDark: Story = {
    parameters: {
        theme: Theme.DARK,
    },
    args: {

    },
};
