import classNames from "shared/lib/classNames/classNames";
import s from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
interface LangSwitcherProps {
  className?: string;
}
export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const onToggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <div className={classNames(s.langSwitcher, {}, [className])}>
      <Button theme={ThemeButton.CLEAR} onClick={onToggle}>
        {t("Язык")}
      </Button>
    </div>
  );
};
