import { useNavigate } from "react-router-dom";

interface HomeItem {
  img: string;
  title: string;
  link: string;
}

export default function Home_item({ img, title, link }: HomeItem) {
  const navigate = useNavigate();

  return (
    <div
      className="group flex items-center justify-between gap-10 px-10 py-3 bg-lime-700 mt-3 rounded-2xl w-100 cursor-pointer"
      onClick={() => navigate(link)}
    >
      <div className="w-25 h-25 shrink-0">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="group-hover:scale-125 transition duration-200 font-bold origin-right">
        {title}
      </div>
    </div>
  );
}
