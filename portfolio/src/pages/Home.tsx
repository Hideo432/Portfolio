import TitleComponent from "../components/Title";
import type { Theme } from "../types";
interface Props {
  theme: Theme;
}
export default function Home({ theme }: Props) {
  return (
    <div className="relative">
      <TitleComponent title="Home" theme={theme}></TitleComponent>
      <div className=" flex flex-col items-center sm:flex-row gap-5 p-5 ">
        <div className="sm:w-1/2  rounded-full overflow-hidden ">
          <img className="rounded-full scale-150" src="/avatar.png"></img>
        </div>
        <div>
          <p className="text-[30px] text-center font-bold ">
            This site was made by Vlad, a 4th year student.
          </p>
          <p className="text-[30px] text-center font-bold">
            This site contains 10 portfolio assignments.
          </p>
        </div>
      </div>
    </div>
  );
}
