import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import type { Theme } from "../types";

interface Props {
  title: string;
  theme: Theme;
}
export default function TitleComponent({ title, theme }: Props) {
  const navigate = useNavigate();
  return (
    <div className=" flex justify-center  items-center cursor-pointer">
      <div
        onClick={() => navigate(ROUTES.HOME)}
        className="w-10 left-0  sm:left-10 absolute h-10 m-3 z-20"
      >
        <img
          src={`${theme === "dark" ? "/arrow-left.svg" : "/arrow-left-black.svg"}`}
          alt=""
        />
      </div>
      <h1 className="text-5xl font-bold p-10 ">{title}</h1>
    </div>
  );
}
