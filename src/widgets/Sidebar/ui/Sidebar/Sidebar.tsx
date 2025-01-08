import classNames from 'shared/lib/classNames/classNames';
import s from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
interface SidebarProps {
    className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation('sidebar');

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            data-testid='sidebar'
            className={classNames(s.sidebar, { [s.collapsed]: collapsed }, [
                className,
            ])}
        >
            <button data-testid='sidebar-toggle' onClick={onToggle}>{t('Переключить')}</button>
            <div className={s.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={s.lang} />
            </div>
        </div>
    );
};
