import classNames from 'shared/lib/classNames/classNames';
import s from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
    // const { t } = useTranslation();
    return (
        <div className={classNames(s.navbar, {}, [className])}>
            <div className={s.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} className={s.link} to={'/'}>
                    {'Главная'}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
                    {'О сайте'}
                </AppLink>
            </div>
        </div>
    );
}
