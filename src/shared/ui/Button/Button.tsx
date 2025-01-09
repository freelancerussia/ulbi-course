import classNames from 'shared/lib/classNames/classNames';
import s from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';
// import React from 'react';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}
export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme, ...otherProps } = props;
    return (
        <button
            {...otherProps}
            className={classNames(s.button, {}, [className, s[theme]])}
        >
            {children}
        </button>
    );
};
