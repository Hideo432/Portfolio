import type { Theme } from "../types";

interface Props {
  theme: Theme;
}
export default function Footer({ theme }: Props) {
  return (
    <footer
      className={`flex justify-center ${
        theme === "dark"
          ? "bg-gray-800 text-white"
          : theme === "light"
            ? "bg-blue-400 text-black"
            : "bg-gray-800 text-white"
      }  p-10 `}
    >
      <p className="text-[20px] font-bold">This site is not for sharing</p>
    </footer>
  );
}
