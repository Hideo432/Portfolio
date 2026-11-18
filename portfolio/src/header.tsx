import { useNavigate } from "react-router-dom";
import { ROUTES } from "./routes";
import { useState } from "react";
import type { Theme } from "./types";
import { ThemeSwitch } from "./components/toggle";
interface Props {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}
export default function Header({ theme, setTheme }: Props) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleNavigate = (route: string) => {
    navigate(route);
    setShowMenu(false);
    document.body.style.overflow = "";
  };

  const toggleMenu = () => {
    const nextState = !showMenu;
    setShowMenu(nextState);
    document.body.style.overflow = nextState ? "hidden" : "";
  };

  return (
    <header
      className={`flex justify-between items-center px-6 relative ${
        theme === "dark"
          ? "bg-gray-800 text-white"
          : theme === "light"
            ? "bg-blue-400 text-black"
            : "bg-gray-800 text-white"
      }  py-6 select-none relative z-50`}
    >
      <div
        className="text-xl font-bold cursor-pointer flex items-center gap-2"
        onClick={() => handleNavigate(ROUTES.HOME)}
      >
        Portfolio{" "}
        <div className="h-10 w-10  sm:h-20 sm:w-20">
          <img src="/logo.svg"></img>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <ThemeSwitch setTheme={setTheme} theme={theme}></ThemeSwitch>
      </div>
      <button
        onClick={toggleMenu}
        aria-label="Toggle menu"
        className="cursor-pointer relative z-50 w-10 h-10 flex flex-col justify-center items-center focus:outline-none"
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
            showMenu ? "rotate-45 translate-y-0 bg-red-400" : "-translate-y-1.5"
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
            showMenu ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
            showMenu
              ? "-rotate-45 -translate-y-1 bg-red-400"
              : "translate-y-1.5"
          }`}
        ></span>
      </button>

      <div
        className={`fixed inset-0 bg-[#16213e] z-40 flex items-center justify-center transition-[clip-path] duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          showMenu ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{
          clipPath: showMenu
            ? "circle(150vmax at calc(100% - 35px) 35px)"
            : "circle(0px at calc(100% - 35px) 35px)",
        }}
      >
        <ul className="flex flex-col items-center gap-6 text-center">
          <li
            onClick={() => handleNavigate(ROUTES.HOME)}
            className={`text-3xl font-bold text-white hover:text-green-400 cursor-pointer transition-all duration-400 ${
              showMenu
                ? "opacity-100 translate-y-0 delay-200"
                : "opacity-0 translate-y-5"
            }`}
          >
            Home
          </li>
          <li
            onClick={() => handleNavigate(ROUTES.ALL_PROJECTS)}
            className={`text-3xl font-bold text-white hover:text-green-400 cursor-pointer transition-all duration-400 ${
              showMenu
                ? "opacity-100 translate-y-0 delay-200"
                : "opacity-0 translate-y-5"
            }`}
          >
            All Projects
          </li>
          <li
            onClick={() => handleNavigate(ROUTES.BLOG)}
            className={`text-3xl font-bold text-white hover:text-green-400 cursor-pointer transition-all duration-400 ${
              showMenu
                ? "opacity-100 translate-y-0 delay-300"
                : "opacity-0 translate-y-5"
            }`}
          >
            Blog
          </li>
          <li
            onClick={() => handleNavigate(ROUTES.TASKS)}
            className={`text-3xl font-bold text-white hover:text-green-400 cursor-pointer transition-all duration-400 ${
              showMenu
                ? "opacity-100 translate-y-0 delay-400"
                : "opacity-0 translate-y-5"
            }`}
          >
            Tasks
          </li>
        </ul>
      </div>
    </header>
  );
}
