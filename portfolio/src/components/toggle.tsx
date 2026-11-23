import React from "react";

export type Theme = "dark" | "light";

interface ThemeSwitchProps {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

export const ThemeSwitch: React.FC<ThemeSwitchProps> = ({
  theme,
  setTheme,
}) => {
  const isDark = theme === "dark";

  const handleToggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      onClick={handleToggle}
      className={`relative inline-flex h-8 w-14 cursor-pointer items-center rounded-full p-1 transition-colors duration-300 focus:outline-none   ${
        isDark ? "bg-gray-700" : "bg-amber-200"
      }`}
    >
      <span
        className={`flex h-6 w-6 transform items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ${
          isDark
            ? "translate-x-6 text-gray-800"
            : "translate-x-0 text-amber-500"
        }`}
      >
        {isDark ? (
          <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        ) : (
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        )}
      </span>
    </button>
  );
};
