interface Props {
  text: string;
  title: string;
  img: string;
}
export default function HomePageComponent({ text, title, img }: Props) {
  return (
    <div className="flex flex-col gap-3 p-2 items-center">
      <div className="sm:w-1/2">
        <img src={img} alt="" />
      </div>
      <div className="sm:w-1/2 text-left">
        {" "}
        <h3 className="text-[20px] font-bold">{title}</h3>
        <p className="text-[15px]">{text}</p>
      </div>
    </div>
  );
}
