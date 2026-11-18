import Home_item from "../components/home_item";
import TitleComponent from "../components/Title";
import data from "../db/db.json";
import type { Theme } from "../types";
interface Props {
  theme: Theme;
}
export default function Projects({ theme }: Props) {
  return (
    <div className="text-center  flex flex-col  items-center justify-center  relative">
      <TitleComponent theme={theme} title="All projects"></TitleComponent>

      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-5 text-white px-4 max-w-6xl mx-auto mb-5">
        {data.blocks.map((item, key) => {
          return (
            <Home_item
              key={key}
              img={item.img}
              title={item.title}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
}
