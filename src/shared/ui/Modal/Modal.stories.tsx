import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    // parameters: {

    //     layout: 'centered',
    // },
    // tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    parameters: {
        theme: Theme.LIGHT,
    },
    args: {
        isOpen: true,
        children: 'Auth'
    },
};

export const Dark: Story = {
    parameters: {
        theme: Theme.DARK,
    },
    args: {
        isOpen: true,
        children: 'Auth'
    },
};