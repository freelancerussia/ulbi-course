import classNames from "shared/lib/classNames/classNames";
import s from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={s.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} className={s.link} to={"/"}>
          Main
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
          About page
        </AppLink>
      </div>
    </div>
  );
}