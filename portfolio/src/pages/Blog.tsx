import HomePageComponent from "../components/HomePageComponent";
import TitleComponent from "../components/Title";
import type { Theme } from "../types";

interface Props {
  theme: Theme;
}

export default function Blog({ theme }: Props) {
  return (
    <div className="text-center relative">
      <TitleComponent theme={theme} title="Blog" />

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch p-3 sm:p-4">
        <div className="group md:[perspective:1000px] flex">
          <HomePageComponent
            theme={theme}
            tilt="left"
            img="teacher-img.jpg"
            title="For a Future Educator"
            text="My Pedagogical Landmarks A modern teacher is not merely a source of knowledge, but a navigator in the world of information, a mentor, and a partner in development. In my practice, I rely on the principles of humanistic pedagogy, critical thinking, and an individualized approach to every student. My primary goal is to create a safe and inspiring educational environment where mistakes are viewed as stepping stones for growth, and learning becomes a conscious and engaging process."
          />
        </div>

        <div className="group md:[perspective:1000px] flex">
          <HomePageComponent
            theme={theme}
            tilt="center"
            img="teacher-course.jpg"
            title="Course: Teacher’s Landmarks / Pedagogical Orientation"
            text="This course focuses on shaping the professional identity of a modern educator, discovering core value pillars, and building effective communication within the learning environment. The curriculum addresses contemporary challenges in education, digital literacy, the design of learning pathways, and the development of essential soft skills required by 21st-century teachers."
          />
        </div>

        <div className="group md:[perspective:1000px] flex">
          <HomePageComponent
            theme={theme}
            tilt="right"
            img="teacher-img.jpg"
            title="For a Future Educator"
            text="My Pedagogical Landmarks A modern teacher is not merely a source of knowledge, but a navigator in the world of information, a mentor, and a partner in development. In my practice, I rely on the principles of humanistic pedagogy, critical thinking, and an individualized approach to every student. My primary goal is to create a safe and inspiring educational environment where mistakes are viewed as stepping stones for growth, and learning becomes a conscious and engaging process."
          />
        </div>
        <div className="group md:[perspective:1000px] flex">
          <HomePageComponent
            theme={theme}
            tilt="left"
            img="teacher-img.jpg"
            title="For a Future Educator"
            text="My Pedagogical Landmarks A modern teacher is not merely a source of knowledge, but a navigator in the world of information, a mentor, and a partner in development. In my practice, I rely on the principles of humanistic pedagogy, critical thinking, and an individualized approach to every student. My primary goal is to create a safe and inspiring educational environment where mistakes are viewed as stepping stones for growth, and learning becomes a conscious and engaging process."
          />
        </div>

        <div className="group md:[perspective:1000px] flex">
          <HomePageComponent
            theme={theme}
            tilt="center"
            img="teacher-course.jpg"
            title="Course: Teacher’s Landmarks / Pedagogical Orientation"
            text="This course focuses on shaping the professional identity of a modern educator, discovering core value pillars, and building effective communication within the learning environment. The curriculum addresses contemporary challenges in education, digital literacy, the design of learning pathways, and the development of essential soft skills required by 21st-century teachers."
          />
        </div>

        <div className="group md:[perspective:1000px] flex">
          <HomePageComponent
            theme={theme}
            tilt="right"
            img="teacher-img.jpg"
            title="For a Future Educator"
            text="My Pedagogical Landmarks A modern teacher is not merely a source of knowledge, but a navigator in the world of information, a mentor, and a partner in development. In my practice, I rely on the principles of humanistic pedagogy, critical thinking, and an individualized approach to every student. My primary goal is to create a safe and inspiring educational environment where mistakes are viewed as stepping stones for growth, and learning becomes a conscious and engaging process."
          />
        </div>
        <div className="group md:[perspective:1000px] flex">
          <HomePageComponent
            theme={theme}
            tilt="left"
            img="teacher-img.jpg"
            title="For a Future Educator"
            text="My Pedagogical Landmarks A modern teacher is not merely a source of knowledge, but a navigator in the world of information, a mentor, and a partner in development. In my practice, I rely on the principles of humanistic pedagogy, critical thinking, and an individualized approach to every student. My primary goal is to create a safe and inspiring educational environment where mistakes are viewed as stepping stones for growth, and learning becomes a conscious and engaging process."
          />
        </div>

        <div className="group md:[perspective:1000px] flex">
          <HomePageComponent
            theme={theme}
            tilt="center"
            img="teacher-course.jpg"
            title="Course: Teacher’s Landmarks / Pedagogical Orientation"
            text="This course focuses on shaping the professional identity of a modern educator, discovering core value pillars, and building effective communication within the learning environment. The curriculum addresses contemporary challenges in education, digital literacy, the design of learning pathways, and the development of essential soft skills required by 21st-century teachers."
          />
        </div>

        <div className="group md:[perspective:1000px] flex">
          <HomePageComponent
            theme={theme}
            tilt="right"
            img="teacher-img.jpg"
            title="For a Future Educator"
            text="My Pedagogical Landmarks A modern teacher is not merely a source of knowledge, but a navigator in the world of information, a mentor, and a partner in development. In my practice, I rely on the principles of humanistic pedagogy, critical thinking, and an individualized approach to every student. My primary goal is to create a safe and inspiring educational environment where mistakes are viewed as stepping stones for growth, and learning becomes a conscious and engaging process."
          />
        </div>
        <div className="group md:[perspective:1000px] flex">
          <HomePageComponent
            theme={theme}
            tilt="left"
            img="teacher-img.jpg"
            title="For a Future Educator"
            text="My Pedagogical Landmarks A modern teacher is not merely a source of knowledge, but a navigator in the world of information, a mentor, and a partner in development. In my practice, I rely on the principles of humanistic pedagogy, critical thinking, and an individualized approach to every student. My primary goal is to create a safe and inspiring educational environment where mistakes are viewed as stepping stones for growth, and learning becomes a conscious and engaging process."
          />
        </div>

        <div className="group md:[perspective:1000px] flex">
          <HomePageComponent
            theme={theme}
            tilt="center"
            img="teacher-course.jpg"
            title="Course: Teacher’s Landmarks / Pedagogical Orientation"
            text="This course focuses on shaping the professional identity of a modern educator, discovering core value pillars, and building effective communication within the learning environment. The curriculum addresses contemporary challenges in education, digital literacy, the design of learning pathways, and the development of essential soft skills required by 21st-century teachers."
          />
        </div>

        <div className="group md:[perspective:1000px] flex">
          <HomePageComponent
            theme={theme}
            tilt="right"
            img="teacher-img.jpg"
            title="For a Future Educator"
            text="My Pedagogical Landmarks A modern teacher is not merely a source of knowledge, but a navigator in the world of information, a mentor, and a partner in development. In my practice, I rely on the principles of humanistic pedagogy, critical thinking, and an individualized approach to every student. My primary goal is to create a safe and inspiring educational environment where mistakes are viewed as stepping stones for growth, and learning becomes a conscious and engaging process."
          />
        </div>
      </div>
    </div>
  );
}
