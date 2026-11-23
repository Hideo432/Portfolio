import { useState } from "react";
import TitleComponent from "../components/Title";
import type { Theme } from "../types";

interface Props {
  theme: Theme;
}

interface Item {
  question: string;
  answer: string;
  number: number;
}

const INTERVIEW_DATA: Item[] = [
  {
    number: 1,
    question:
      "How do you decide how to group students, do you mix proficiency levels, group friends together, or assign specific roles like facilitator or timekeeper?",
    answer:
      "Nadezhda Sergeyevna: I try to combine approaches depending on the lesson objective. When the goal is a quick warm-up or a low-stakes discussion, I often let students choose their own partners because it lowers anxiety. However, for more complex project tasks or debates, I intentionally mix groups—both by language proficiency and temperament. As for roles (facilitator, note-taker, timekeeper, presenter), I assign them almost every time, especially in middle and high school. Without clear responsibilities, one strong student takes over the entire task while two others simply stay silent.",
  },
  {
    number: 2,
    question:
      "What strategies do you use to keep students speaking English rather than switching to their native language during group tasks?",
    answer:
      "Nadezhda Sergeyevna: The main secret isn't forbidding the native language with a strict tone, but making English functionally necessary. I provide specific language chunks and functional phrases right on a slide or task card (such as Let’s move on to..., What do you think about...?, or I see your point, but...) so students don't have to search for words every five seconds. I also set a clear format for the final output: a short pitch, a collaborative case solution, or a reasoned list of three points they have to defend orally. When there is a concrete goal and a running timer, switching to their native language simply becomes inconvenient.",
  },
  {
    number: 3,
    question:
      "How do you handle uneven participation when one or two students dominate the discussion while others stay quiet or off-task?",
    answer:
      "Nadezhda Sergeyevna: While students are working in groups, I never sit at my desk—I circulate among the teams with a notepad. If I notice someone dominating, I gently redirect the floor to another member: Alex, that’s a strong argument—Maya, how would you respond to that? For quieter students, a brief individual prep stage works really well: giving them 1–2 minutes to jot down their own ideas before the discussion starts. That way, they already have a ready-made scaffold, making it much easier to join the conversation.",
  },
  {
    number: 4,
    question:
      "What does a well-structured group activity look like in terms of timing and instructions so students don't get confused about what to do next?",
    answer:
      "Nadezhda Sergeyevna: The most common mistake is giving a long verbal instruction and then wondering why half the class asks, What are we doing? I always keep instructions brief, display the key steps on the screen, and use ICQs (Instruction Checking Questions)—asking one or two students to repeat in their own words what they need to do in the first three minutes. In terms of timing, it works best to break the activity into short stages with a visible timer: for instance, 4 minutes for brainstorming, 5 minutes for selecting arguments, and 3 minutes for preparing the response.",
  },
  {
    number: 5,
    question:
      "How do you balance giving error correction and assessment during or after group work without interrupting students' fluency?",
    answer:
      "Nadezhda Sergeyevna: During the discussion itself, I avoid interrupting for minor grammar or pronunciation mistakes—otherwise, it breaks their flow and hurts their confidence. Instead, I jot down strong phrases and recurring errors in my notes, and afterward I run a delayed error correction session on the board without naming anyone. When assessing, I separate the team outcome from individual contribution: I grade the logic and language of the final answer, but I ask follow-up questions to different members of the group so I can see everyone's real input.",
  },
];

function InterviewItem({ question, answer, number }: Item) {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 pb-10 sm:pb-14 mb-10 sm:mb-14 border-b border-current/20 last:border-b-0 last:mb-0">
      <div className="font-bold flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
        <div className="self-center sm:self-auto w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 shrink-0 flex items-center justify-center rounded-2xl bg-current/10 p-3 sm:p-4">
          <img
            className="w-full h-full object-contain"
            src="/microphone-interview.svg"
            alt="Microphone icon"
          />
        </div>
        <p className="leading-snug flex-1">
          <span className="opacity-70 mr-1.5">Question {number}:</span>
          {question}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
        <div className="self-center sm:self-auto w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 shrink-0 flex items-center justify-center rounded-2xl bg-current/10 p-2.5 sm:p-3">
          <img
            className="w-full h-full object-contain"
            src="/teacher-avatar.svg"
            alt="Teacher avatar"
          />
        </div>
        <p className="leading-relaxed opacity-95 flex-1">{answer}</p>
      </div>
    </div>
  );
}
export default function Interview({ theme }: Props) {
  const [font, setFont] = useState(18);
  const isLight = theme === "dark";

  const handleIncrease = () => {
    setFont((prev) => Math.min(prev + 2, 32));
  };

  const handleDecrease = () => {
    setFont((prev) => Math.max(prev - 2, 14));
  };

  return (
    <div className="relative  px-4 sm:px-6 py-6 select-none">
      <TitleComponent theme={theme} title="Interview" />

      <div className="sticky top-2 z-10 flex justify-center items-center gap-3 my-6">
        <div
          className={`flex items-center gap-3 px-3 py-1.5 rounded-xl shadow-sm backdrop-blur-md ${
            isLight ? "bg-gray-200/90 text-black" : "bg-gray-800/90 text-white"
          }`}
        >
          <button
            type="button"
            onClick={handleDecrease}
            disabled={font <= 14}
            aria-label="Уменьшить размер текста"
            className={`w-8 h-8 rounded-lg font-bold text-lg transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
              isLight ? "hover:bg-gray-300" : "hover:bg-gray-700"
            }`}
          >
            -
          </button>

          <span className="min-w-[48px] text-center text-sm font-semibold select-none">
            {font}px
          </span>

          <button
            type="button"
            onClick={handleIncrease}
            disabled={font >= 32}
            aria-label="Увеличить размер текста"
            className={`w-8 h-8 rounded-lg font-bold text-lg transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
              isLight ? "hover:bg-gray-300" : "hover:bg-gray-700"
            }`}
          >
            +
          </button>
        </div>
      </div>

      <div style={{ fontSize: `${font}px` }} className="mt-6">
        {INTERVIEW_DATA.map((item) => (
          <InterviewItem
            key={item.number}
            number={item.number}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
}
