import { useNavigate } from "react-router-dom";

interface Props {
  url: string;
  img: string;
  bg_img_color: string;
  title: string;
}

export default function BlogItem({ url, img, title, bg_img_color }: Props) {
  const navigate = useNavigate();

  return (
    <div
      className="relative overflow-hidden flex border-10 active:border-amber-600 bg-white select-none rounded-[30px] hover:rounded-none transition-all duration-700 hover:border-gray-800 hover:text-green-600 cursor-pointer ease-in-out group"
      onClick={() => navigate(url)}
    >
      {/* Левая часть с картинкой */}
      <div className={`w-1/2 h-50 sm:h-100 overflow-hidden  ${bg_img_color}`}>
        <img
          src={img}
          className="w-full h-full object-fit shrink-0"
          alt={title}
        />
      </div>

      <div
        className={`w-1/2 font-bold text-[30px] flex items-center justify-center relative overflow-hidden ${bg_img_color}`}
      >
        <p className="p-2 z-20 relative">{title}</p>

        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-1500 ease-in-out z-10 flex items-end justify-end p-4 pointer-events-none">
          <div className="absolute w-100 h-32">
            <img
              src="/pop-up-cat.png"
              className="w-32 h-32 sm:w-48 sm:h-48 object-contain block absolute "
              alt="pop-up cat"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
