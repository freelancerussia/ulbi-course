import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonSize, ButtonTheme } from './Button';
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
        children: 'Text'
    },
};
export const Clear: Story = {
    parameters: {
        theme: Theme.LIGHT,
    },
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR
    },
    argTypes: {
        theme: {
            control: { type: 'select' },
            options: Object.values(ButtonTheme),
        },
    },
};

export const ClearInverted: Story = {
    parameters: {
        theme: Theme.LIGHT,
    },
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR_INVERTED
    },
    argTypes: {
        theme: {
            control: { type: 'select' },
            options: Object.values(ButtonTheme),
        },
    },
};

export const Outline: Story = {
    parameters: {
        theme: Theme.LIGHT,
    },
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE
    },
};

export const OutlineSizeM: Story = {
    parameters: {
        theme: Theme.LIGHT,
    },
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.M

    },
};

export const OutlineSizeL: Story = {
    parameters: {
        theme: Theme.LIGHT,
    },
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L

    },
};

export const OutlineSizeXL: Story = {
    parameters: {
        theme: Theme.LIGHT,
    },
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL

    },
};

export const BackgroundLight: Story = {
    parameters: {
        theme: Theme.LIGHT,
    },
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND
    },
};

export const BackgroundInvertedLight: Story = {
    parameters: {
        theme: Theme.LIGHT,
    },
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND_INVERTED
    },
};

export const PrimaryDark: Story = {
    parameters: {
        theme: Theme.DARK,
    },
    args: {
        children: 'Text'
    },
};
export const ClearDark: Story = {
    parameters: {
        theme: Theme.DARK,
    },
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR
    },
    argTypes: {
        theme: {
            control: { type: 'select' },
            options: Object.values(ButtonTheme),
        },
    },
};

export const ClearDarkInverted: Story = {
    parameters: {
        theme: Theme.DARK,
    },
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR_INVERTED
    },
    argTypes: {
        theme: {
            control: { type: 'select' },
            options: Object.values(ButtonTheme),
        },
    },
};

export const OutlineDark: Story = {
    parameters: {
        theme: Theme.DARK,
    },
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE
    },
};


export const BackgroundDark: Story = {
    parameters: {
        theme: Theme.DARK,
    },
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND
    },
};

export const BackgroundInvertedDark: Story = {
    parameters: {
        theme: Theme.DARK,
    },
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND_INVERTED
    },
};

export const SquareSizeM: Story = {
    parameters: {
        theme: Theme.DARK,
    },
    args: {
        children: '>',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.M,
        square: true

    },
};

export const SquareSizeL: Story = {
    parameters: {
        theme: Theme.DARK,
    },
    args: {
        children: '>',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
        square: true

    },
};

export const SquareSizeXL: Story = {
    parameters: {
        theme: Theme.DARK,
    },
    args: {
        children: '>',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
        square: true
    },
};