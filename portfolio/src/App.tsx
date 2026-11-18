import "./App.css";
import Header from "./header";

import { Route, Routes } from "react-router-dom";

import Footer from "./components/footer";
import { ROUTES } from "./routes";

import Essay from "./pages/Essay";

import LessonStudy from "./pages/LessonStudy";
import Tasks from "./pages/Tasks";

import Rubrics from "./pages/Rubrics";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import { useEffect, useState } from "react";

function App() {
  type Theme = "dark" | "light";
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("app-theme");

    return savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : "dark";
  });

  useEffect(() => {
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  return (
    <section
      className={`main transition duration-1000 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : theme === "light"
            ? "bg-amber-50 text-black"
            : "bg-gray-900 text-white"
      }`}
    >
      <div className="sm:max-w-7xl  mx-auto flex flex-col min-h-screen w-full ">
        <Header setTheme={setTheme} theme={theme}></Header>

        <main className="flex-1">
          <Routes>
            <Route
              path={`${ROUTES.HOME}`}
              element={<Home theme={theme}></Home>}
            ></Route>
            <Route
              path={`${ROUTES.ALL_PROJECTS}`}
              element={<Projects theme={theme}></Projects>}
            ></Route>
            <Route path="/" element={<Tasks theme={theme}></Tasks>}></Route>
            <Route
              path="/tasks"
              element={<Tasks theme={theme}></Tasks>}
            ></Route>
            <Route
              path="/lesson-study"
              element={<LessonStudy></LessonStudy>}
            ></Route>
            <Route
              path="*"
              element={
                <div className="text-[30px] font-bold text-center mt-50 flex flex-col items-center justify-center ">
                  <p> Page not found (404)</p>

                  <div className="w-50 h-50">
                    <img src={"/not-found.svg"} alt="" />
                  </div>
                </div>
              }
            ></Route>
            <Route path={`${ROUTES.ESSAY}`} element={<Essay></Essay>}></Route>
            <Route
              path={`${ROUTES.RUBRICS}`}
              element={<Rubrics></Rubrics>}
            ></Route>
          </Routes>
        </main>
        <Footer theme={theme}></Footer>
      </div>
    </section>
  );
}
export default App;
