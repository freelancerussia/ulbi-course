import { Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { Link } from "react-router-dom";
import { MainPage } from "./page/MainPage/MainPage.async";
import { AboutPage } from "./page/AboutPage/AboutPage.async";
import { Suspense } from "react";
import { Theme } from "./theme/themeContext";
import { useTheme } from "./theme/useTheme";
import classNames from "./helpers/classNames/classNames";

export default function App() {
  const { toggleTheme, theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>
        {theme === Theme.DARK ? Theme.LIGHT : Theme.DARK}
      </button>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About page</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
