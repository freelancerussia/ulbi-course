import { Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import classNames from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { Theme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";

export default function App() {
  const { toggleTheme, theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>
        {theme === Theme.DARK ? Theme.LIGHT : Theme.DARK}
      </button>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About page</Link>
      <AppRouter />
    </div>
  );
}
