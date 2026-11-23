import "./App.css";
import Header from "./header";

import { Route, Routes } from "react-router-dom";

import Footer from "./components/footer";
import { ROUTES } from "./routes";

import Essay from "./pages/Essay";

import LessonStudy from "./pages/LessonStudy";

import Rubrics from "./pages/Rubrics";
import Projects from "./pages/Projects";

import { useEffect, useState } from "react";
import GroupWork from "./pages/GroupWork";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import CriticalThinking from "./pages/CriticalThinking";

import Interview from "./pages/Interview";
import CT_two from "./pages/CT_tasks/CT_two";
import Leader from "./pages/Leader";
import CT_one from "./pages/CT_tasks/CT_one";
import CT_three from "./pages/CT_tasks/CT_three";
import CT_four from "./pages/CT_tasks/CT_four";
import CT_five from "./pages/CT_tasks/CT_five";
import Inclusion from "./pages/Inclusive";
import GnT from "./pages/GnT";

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
            <Route path="/" element={<Home theme={theme}></Home>}></Route>
            <Route
              path="/lesson-study"
              element={<LessonStudy theme={theme}></LessonStudy>}
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
            <Route
              path={`${ROUTES.ESSAY}`}
              element={<Essay theme={theme}></Essay>}
            ></Route>
            <Route
              path={`${ROUTES.RUBRICS}`}
              element={<Rubrics theme={theme}></Rubrics>}
            ></Route>
            <Route
              path={ROUTES.GROUP_WORK}
              element={<GroupWork theme={theme}></GroupWork>}
            ></Route>
            <Route
              path={ROUTES.BLOG}
              element={<Blog theme={theme}></Blog>}
            ></Route>
            <Route
              path={ROUTES.CRITICAL_THINKING}
              element={<CriticalThinking theme={theme}></CriticalThinking>}
            ></Route>
            <Route
              path={ROUTES.GnT}
              element={<GnT theme={theme}></GnT>}
            ></Route>

            <Route
              path={ROUTES.INTERVIEW}
              element={<Interview theme={theme}></Interview>}
            ></Route>
            <Route
              path={ROUTES.LEADER_TEST}
              element={<Leader title="Leader Test" theme={theme}></Leader>}
            ></Route>
            <Route
              path={"/travel/tasks/1"}
              element={<CT_one theme={theme}></CT_one>}
            ></Route>
            <Route
              path="/travel/tasks/2"
              element={<CT_two theme={theme}></CT_two>}
            ></Route>
            <Route
              path={"/travel/tasks/3"}
              element={<CT_three theme={theme}></CT_three>}
            ></Route>
            <Route
              path={"/travel/tasks/4"}
              element={<CT_four theme={theme}></CT_four>}
            ></Route>
            <Route
              path={"/travel/tasks/5"}
              element={<CT_five theme={theme}></CT_five>}
            ></Route>
            <Route
              path={ROUTES.INCLUSIVE_EDUCATION}
              element={<Inclusion theme={theme}></Inclusion>}
            ></Route>
          </Routes>
        </main>
        <Footer theme={theme}></Footer>
      </div>
    </section>
  );
}
export default App;
