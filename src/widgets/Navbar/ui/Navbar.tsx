import classNames from 'shared/lib/classNames/classNames';
import s from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export function Navbar({ className }: NavbarProps) {
    // const { t } = useTranslation();
    return (
        <div className={classNames(s.navbar, {}, [className])}>
            <div className={s.links}>
                /
            </div>
        </div>
    );
}
