import BlogItem from "../components/blog_item";
import TitleComponent from "../components/Title";
import { ROUTES } from "../routes";
import type { Theme } from "../types";
interface Props {
  theme: Theme;
}
export default function Tasks({ theme }: Props) {
  return (
    <div className="text-center relative ">
      <TitleComponent theme={theme} title="Tasks"></TitleComponent>
      <div className="flex flex-col gap-5 p-2  mx-auto ">
        <BlogItem
          bg_img_color="bg-blue-200"
          url="/"
          img="/smart.svg"
          title="Task for Gifted and talented"
        ></BlogItem>
        <BlogItem
          bg_img_color="bg-pink-200"
          url={`${ROUTES.GROUP_WORK}`}
          img="/gear.svg"
          title="Rules for the group work"
        ></BlogItem>
        <BlogItem
          bg_img_color="bg-blue-400"
          url={`${ROUTES.ESSAY}`}
          img="/book.svg"
          title=" Essay"
        ></BlogItem>
        <BlogItem
          bg_img_color="bg-yellow-300"
          url={`${ROUTES.LESSOS_STUDY}`}
          img="/teacher.svg"
          title=" Lesson Study"
        ></BlogItem>
        <BlogItem
          bg_img_color="bg-orange-200"
          url={`${ROUTES.LESSOS_STUDY}`}
          img="/rubrics.svg"
          title=" Rubrics"
        ></BlogItem>
      </div>
    </div>
  );
}
