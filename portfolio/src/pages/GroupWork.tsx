import TitleComponent from "../components/Title";
import type { Theme } from "../types";
interface Props {
  theme: Theme;
}
export default function GroupWork({ theme }: Props) {
  return (
    <div className="relative">
      <TitleComponent theme={theme} title="Group Work"></TitleComponent>
      <div className=" flex justify-center mb-10">
        <img src="/group-work.png" alt="" />
      </div>
    </div>
  );
}
