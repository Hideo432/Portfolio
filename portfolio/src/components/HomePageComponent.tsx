import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  text: string;
  img: string;
  theme: string;
  tilt?: "left" | "center" | "right";
  onReadMore?: () => void;
}

export default function HomePageComponent({
  text,
  title,
  img,
  theme,
  tilt = "center",
  onReadMore,
}: Props) {
  const isLight = theme === "dark";
  const navigate = useNavigate();
  const transformClass =
    tilt === "left"
      ? "md:[transform:rotateY(14deg)] md:group-hover:[transform:rotateY(0deg)] md:group-hover:scale-[1.02]"
      : tilt === "right"
        ? "md:[transform:rotateY(-14deg)] md:group-hover:[transform:rotateY(0deg)] md:group-hover:scale-[1.02]"
        : "md:scale-[0.94] md:group-hover:[transform:rotateY(0deg)] md:group-hover:scale-100";

  return (
    <article
      onClick={() => navigate("/404")}
      className={`h-full w-full p-3 sm:p-4 flex flex-col justify-between rounded-xl cursor-pointer shadow transition-colors duration-300 hover:bg-green-500 md:[transform-style:preserve-3d] md:transition-all md:duration-500 md:ease-out ${transformClass} ${
        isLight ? "bg-white text-black" : "bg-gray-800 text-white"
      }`}
    >
      <div className="flex flex-col min-w-0">
        <div className="w-full aspect-video overflow-hidden rounded-lg bg-black/10 shrink-0">
          <img src={img} alt={title} className="w-full h-full object-cover" />
        </div>

        <h3 className="text-[18px] sm:text-[20px] font-bold text-center mt-3 line-clamp-1">
          {title}
        </h3>

        <div className="relative mt-2 h-[90px] overflow-hidden">
          <p className="text-[14px] sm:text-[15px] text-left break-words leading-[22.5px]">
            {text}
          </p>

          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t group-hover:from-green-500 ${
              isLight ? "from-white" : "from-gray-800"
            } to-transparent transition-opacity duration-300 `}
          />
        </div>
      </div>

      <button
        type="button"
        onClick={onReadMore}
        className="mt-3 pt-1 self-center text-sm font-medium opacity-80 hover:opacity-100 underline cursor-pointer"
      >
        Читать полностью
      </button>
    </article>
  );
}
