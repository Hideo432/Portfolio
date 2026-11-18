import HomePageComponent from "../components/HomePageComponent";
import TitleComponent from "../components/Title";
import type { Theme } from "../types";
interface Props {
  theme: Theme;
}
export default function Home({ theme }: Props) {
  return (
    <div className="text-center relative  ">
      <TitleComponent theme={theme} title="Home"></TitleComponent>
      <div className="">
        <HomePageComponent
          img="teacher-img.jpg"
          title="For a Future Educator"
          text="My Pedagogical Landmarks A modern teacher is not merely a source of knowledge, but a navigator in the world of information, a mentor, and a partner in development. In my practice, I rely on the principles of humanistic pedagogy, critical thinking, and an individualized approach to every student. My primary goal is to create a safe and inspiring educational environment where mistakes are viewed as stepping stones for growth, and learning becomes a conscious and engaging process."
        ></HomePageComponent>
        <HomePageComponent
          img="teacher-course.jpg"
          title="Course: Teacher’s Landmarks / Pedagogical Orientation"
          text="This course focuses on shaping the professional identity of a modern educator, discovering core value pillars, and building effective communication within the learning environment. The curriculum addresses contemporary challenges in education, digital literacy, the design of learning pathways, and the development of essential soft skills required by 21st-century teachers."
        ></HomePageComponent>
      </div>
    </div>
  );
}
