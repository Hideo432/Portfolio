import Home_item from "../components/home_item";
import data from "../db/db.json";

export default function Home() {
  return (
    <div className="text-center text-white flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl font-bold p-10">Home</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center  px-4 max-w-6xl mx-auto w-full">
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
