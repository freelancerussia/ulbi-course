import classNames from 'shared/lib/classNames/classNames';
import s from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';
// import React from 'react';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  M = 'sizeM',
  L = 'sizeL',
  XL = 'sizeXl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}
export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme, square, size = ButtonSize.M, ...otherProps } = props;

    const mods: Record<string, boolean> = {
        [s.square]: square
    };
    return (
        <button
            className={classNames(s.button, mods, [className, s[theme], s[size]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
