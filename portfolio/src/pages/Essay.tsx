import { useState } from "react";
import TitleComponent from "../components/Title";
import type { Theme } from "../types";

interface Props {
  theme: Theme;
}

export default function Essay({ theme }: Props) {
  const [font, setFont] = useState(20);
  const isLight = theme === "dark";

  const handleIncrease = () => {
    setFont((prev) => Math.min(prev + 1, 36));
  };

  const handleDecrease = () => {
    setFont((prev) => Math.max(prev - 1, 14));
  };

  return (
    <div className="flex justify-center flex-col relative">
      <TitleComponent theme={theme} title="Essay" />
      <p style={{ fontSize: `${font}px` }} className="text-center ">
        font size
      </p>

      <div className="flex justify-center items-center gap-3 my-3">
        <button
          type="button"
          onClick={handleDecrease}
          disabled={font <= 14}
          aria-label="Уменьшить размер текста"
          className={`w-9 h-9 rounded-lg font-bold text-lg transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
            isLight
              ? "bg-gray-200 text-black hover:bg-gray-300"
              : "bg-gray-700 text-white hover:bg-gray-600"
          }`}
        >
          -
        </button>

        <span className="min-w-[52px] text-center text-sm font-semibold">
          {font}px
        </span>

        <button
          type="button"
          onClick={handleIncrease}
          disabled={font >= 36}
          aria-label="Увеличить размер текста"
          className={`w-9 h-9 rounded-lg font-bold text-lg transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
            isLight
              ? "bg-gray-200 text-black hover:bg-gray-300"
              : "bg-gray-700 text-white hover:bg-gray-600"
          }`}
        >
          +
        </button>
      </div>

      <div className="p-2 select-none max-w-4xl mx-auto">
        <h2
          style={{ fontSize: `${font + 8}px` }}
          className="text-center font-bold leading-tight"
        >
          The reasons of underachievement of pupils
        </h2>

        <div
          style={{ fontSize: `${font}px` }}
          className="space-y-5 mt-5 leading-relaxed"
        >
          <p>
            One primary reason for underachievement is a lack of individual
            motivation and engagement. When students fail to see the practical
            relevance of the curriculum to their future lives, their interest
            wanes, leading to poor academic performance. Furthermore,
            ineffective teaching methods or a mismatch between a student's
            learning style and the instructional approach can create significant
            barriers to comprehension.
          </p>
          <p>
            External environment also plays a pivotal role. Socioeconomic
            challenges, such as inadequate access to educational resources,
            unstable home environments, or the lack of a quiet study space,
            severely hinder a pupil's academic progress. Additionally, emotional
            and psychological factors, including chronic stress, anxiety, low
            self-esteem, or peer pressure, often impair cognitive function and
            concentration in the classroom.
          </p>
          <p>
            Finally, undiagnosed learning disabilities or neurodivergent
            conditions, such as dyslexia or ADHD, are frequently overlooked
            contributors to poor performance. Without specialized educational
            interventions and tailored support, these students struggle to keep
            pace with their peers.
          </p>
          <p>
            In conclusion, student underachievement is rarely the result of a
            single flaw. Addressing it requires a holistic approach that
            combines personalized teaching strategies, psychological support,
            and improved home-school collaboration to ensure every child reaches
            their full potential.
          </p>
        </div>
      </div>
    </div>
  );
}
