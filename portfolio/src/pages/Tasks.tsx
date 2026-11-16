import BlogItem from "../components/blog_item";
import { ROUTES } from "../routes";
export default function Tasks() {
  return (
    <div className="text-center ">
      <h2 className="text-[30px] font-bold text-white">Tasks</h2>
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
