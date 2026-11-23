import { Link } from "react-router-dom";
import type { Theme } from "../types";
interface Props {
  link: string;
  title: string;
  img: string;
  theme: Theme;
}
export default function Quest_item({ link, title, img, theme }: Props) {
  return (
    <div className={`w-full flex flex-col items-center `}>
      <Link
        className={`w-90 sm:w-100  p-3 rounded-[20px] duration-300 transition flex items-center gap-6 ${theme === "dark" ? "bg-green-600 text-black hover:text-white" : "bg-blue-400 text-white hover:text-gray-600"}`}
        to={link}
      >
        <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center">
          <img
            src={img}
            alt={title}
            className="max-w-full max-h-full object-contain"
          />
        </div>

        <p className=" font-bold">{title}</p>
      </Link>
    </div>
  );
}
