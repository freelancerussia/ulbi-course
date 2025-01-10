import type { Meta, StoryObj } from '@storybook/react';

import { AppLink, AppLinkTheme } from './AppLink';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    // parameters: {

    //     layout: 'centered',
    // },
    // tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: {
        to: '/'
    }
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    parameters: {
        theme: Theme.LIGHT,
    },
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY
    },
};

export const PrimaryDark: Story = {
    parameters: {
        theme: Theme.DARK,
    },
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY
    },
};

export const Secondary: Story = {
    parameters: {
        theme: Theme.LIGHT,
    },
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY
    },
};
export const SecondaryDark: Story = {
    parameters: {
        theme: Theme.DARK,
    },
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY
    },
};

