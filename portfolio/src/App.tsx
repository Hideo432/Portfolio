import "./App.css";
import Header from "./header";

import { Route, Routes } from "react-router-dom";

import Footer from "./components/footer";
import { ROUTES } from "./routes";

import Essay from "./pages/Essay";

import LessonStudy from "./pages/LessonStudy";
import Tasks from "./pages/Tasks";
import Home from "./pages/Home";
import Rubrics from "./pages/Rubrics";

function App() {
  return (
    <section className="main sm:max-w-7xl mx-auto flex flex-col min-h-screen  ">
      <Header></Header>
      <main className="flex-1">
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/" element={<Tasks></Tasks>}></Route>
          <Route path="/tasks" element={<Tasks></Tasks>}></Route>
          <Route
            path="/lesson-study"
            element={<LessonStudy></LessonStudy>}
          ></Route>
          <Route
            path="*"
            element={
              <div className="text-[30px] font-bold text-center mt-50 text-white">
                Page not found (404)
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
      <Footer></Footer>
    </section>
  );
}
export default App;
