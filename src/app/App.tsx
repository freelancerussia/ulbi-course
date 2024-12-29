import "./styles/index.scss";
import classNames from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { Theme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";

export default function App() {
  const { toggleTheme, theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <button onClick={toggleTheme}>
        {theme === Theme.DARK ? Theme.LIGHT : Theme.DARK}
      </button>
      <AppRouter />
    </div>
  );
}
