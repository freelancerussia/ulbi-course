import classNames from 'shared/lib/classNames/classNames';
import s from './Modal.module.scss';
import { MouseEvent, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Portal } from '../Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
interface ModalProps {
    className?: string
    children: ReactNode
    isOpen?: boolean
    onClose?: () => void
}

export const Modal = ({ className, children, isOpen, onClose }: ModalProps) => {

    const [isClosing, setIsClosing] = useState(false);
    const timer = useRef<ReturnType<typeof setTimeout | null>>(null);
    const { theme } = useTheme();


    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timer.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, 300);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: globalThis.KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {

            clearTimeout(timer.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);


    const mods: Record<string, boolean> = {
        [s.opened]: isOpen,
        [s.isClosing]: isClosing
    };


    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    };


    return (
        <Portal >
            <div className={classNames(s.modal, mods, [className, s[theme]])}>
                <div className={s.overlay} onClick={closeHandler}>
                    <div className={s.content} onClick={onContentClick}>
                        {children}
                    </div>

                </div>
            </div>
        </Portal >
    );
};