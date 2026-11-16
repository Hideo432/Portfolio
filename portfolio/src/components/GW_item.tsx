interface Props {
  img: string;
  text: string;
  topic: string;
}
export default function GW_item({ img, text, topic }: Props) {
  return (
    <div className="flex flex-col">
      <p className="text-[25px]">{topic}</p>
      <div>
        <div className="w-1/2 h-50 sm:h-100 overflow-hidden rounded-lg bg-gray-200">
          <img
            className=" w-full h-full object-cover shrink-0"
            src={`${img}`}
          />
        </div>
        <p className="w-1/2">{text}</p>
      </div>
    </div>
  );
}
