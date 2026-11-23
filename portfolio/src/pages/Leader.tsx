import React, { useState } from "react";
import type { Theme } from "../types";
import TitleComponent from "../components/Title";
import { Link, useNavigate } from "react-router-dom";

// Если TitleComponent импортируется из другого файла, замените эту заглушку на свой импорт
interface TitleProps {
  theme: Theme;
  title: string;
}

type AnswerOption = "A" | "B" | "C" | "D" | "E";

interface QuestionItem {
  id: number;
  text: string;
}

const QUESTIONS: QuestionItem[] = [
  { id: 1, text: "Act as the spokesman of the group" },
  { id: 2, text: "Wait patiently for the results of a decision" },
  { id: 3, text: "Make pep talks to stimulate the group" },
  { id: 4, text: "Let group members know what is expected of them" },
  { id: 5, text: "Allow the members complete freedom in their work" },
  { id: 6, text: "Be hesitant about taking initiative in the group" },
  { id: 7, text: "Be friendly and approachable" },
  { id: 8, text: "Encourage overtime work" },
  { id: 9, text: "Make accurate decisions" },
  { id: 10, text: "Get along well with the people above him" },
  { id: 11, text: "Publicize the activities of the group" },
  {
    id: 12,
    text: "Become anxious when he cannot find out what is coming next",
  },
  { id: 13, text: "Be convincing in his arguments" },
  { id: 14, text: "Encourage the use of uniform procedures" },
  {
    id: 15,
    text: "Permit the members to use their own judgment in solving problems",
  },
  { id: 16, text: "Fail to take necessary actions" },
  {
    id: 17,
    text: "Do little things to make it pleasant to be a member of the group",
  },
  { id: 18, text: "Stress being ahead of competing groups" },
  { id: 19, text: "Keep the group working together as a team" },
  { id: 20, text: "Keep the group in good standing with higher authority" },
  { id: 21, text: "Speak as a representative of the group" },
  { id: 22, text: "Accept defeat in stride" },
  { id: 23, text: "Argue persuasively for his point of view" },
  { id: 24, text: "Try out his ideas in the group" },
  { id: 25, text: "Encourage initiative in the group members" },
  { id: 26, text: "Let others persons take away his leadership in the group" },
  { id: 27, text: "Put suggestions made by the group into operation" },
  { id: 28, text: "Needle members for greater effort" },
  { id: 29, text: "Be able to predict what is coming next" },
];

const OPTIONS: { letter: AnswerOption; label: string }[] = [
  { letter: "A", label: "Always" },
  { letter: "B", label: "Often" },
  { letter: "C", label: "Occasionally" },
  { letter: "D", label: "Seldom" },
  { letter: "E", label: "Never" },
];

export default function Leader({ theme }: TitleProps) {
  const navigate = useNavigate();
  const isDark = theme === "dark";
  const [font, setFont] = useState<number>(16);
  // Состояние для хранения выбранных ответов (ключ — id вопроса, значение — буква A-E)
  const [answers, setAnswers] = useState<Record<number, AnswerOption>>({});

  const handleIncrease = () => {
    setFont((prev) => Math.min(prev + 1, 28));
  };

  const handleDecrease = () => {
    setFont((prev) => Math.max(prev - 1, 12));
  };

  const handleSelectOption = (questionId: number, option: AnswerOption) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  const borderClass = isDark ? "border-gray-700" : "border-gray-400";
  const cellTextClass = isDark ? "text-gray-200" : "text-gray-800";
  const boldCellClass = isDark ? "text-white" : "text-gray-900";
  const rowClass = isDark
    ? "odd:bg-gray-800 even:bg-gray-900/60 hover:bg-gray-700/60"
    : "odd:bg-white even:bg-gray-50 hover:bg-blue-50/50";

  return (
    <div className="w-full relative pb-12">
      <TitleComponent theme={theme} title="Leader" />

      <div className="sticky top-2 z-20 flex flex-col items-center gap-1.5 my-4 px-4">
        <div
          className={`flex items-center gap-3 px-3.5 py-2 rounded-xl border shadow-sm backdrop-blur-md transition-colors ${
            isDark
              ? "bg-gray-800/90 border-gray-700 text-white"
              : "bg-white/90 border-gray-200 text-gray-900"
          }`}
        >
          <span className="text-xs sm:text-sm font-medium opacity-80">
            Font size
          </span>

          <button
            type="button"
            onClick={handleDecrease}
            disabled={font <= 12}
            aria-label="Уменьшить размер текста"
            className={`w-8 h-8 rounded-lg font-bold text-lg transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
              isDark
                ? "bg-gray-700 text-white hover:bg-gray-600"
                : "bg-gray-200 text-gray-900 hover:bg-gray-300"
            }`}
          >
            -
          </button>

          <span className="min-w-[48px] text-center text-sm font-semibold tabular-nums">
            {font}px
          </span>

          <button
            type="button"
            onClick={handleIncrease}
            disabled={font >= 28}
            aria-label="Увеличить размер текста"
            className={`w-8 h-8 rounded-lg font-bold text-lg transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
              isDark
                ? "bg-gray-700 text-white hover:bg-gray-600"
                : "bg-gray-200 text-gray-900 hover:bg-gray-300"
            }`}
          >
            +
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 overflow-x-auto">
        <table
          style={{ fontSize: `${font}px` }}
          className={`w-full border-collapse border ${borderClass} shadow-sm transition-all duration-150`}
        >
          <thead>
            <tr className={isDark ? "bg-gray-900" : "bg-white"}>
              <th
                colSpan={2}
                className={`border ${borderClass} p-3 sm:p-4 text-left font-normal align-top ${cellTextClass}`}
              >
                <div
                  className={`text-center font-semibold mb-2 ${boldCellClass}`}
                >
                  LBDQ XII
                </div>
                <p className="leading-snug">
                  <span className={`font-medium ${boldCellClass}`}>
                    Directions:
                  </span>
                  <br />
                  Read each item carefully. Think about how frequently the
                  leader engages in the behavior described by the item. Decide
                  whether he/she Should (A) Always (B) Often, (C) Occasionally,
                  (D) Seldom or (E) Never act as described by the item. Draw a
                  circle around one of the five letters ( A B C D E) following
                  the item to show the answer you selected.
                </p>
              </th>

              {OPTIONS.map((opt) => (
                <th
                  key={opt.letter}
                  className={`border ${borderClass} px-2 py-4 align-middle text-center font-bold select-none ${boldCellClass}`}
                  style={{ width: "3.2em" }}
                >
                  <div
                    className="mx-auto whitespace-nowrap tracking-wide"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                    }}
                  >
                    {opt.label}
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {QUESTIONS.map((q) => {
              const selectedAnswer = answers[q.id];

              return (
                <tr key={q.id} className={`transition-colors ${rowClass}`}>
                  <td
                    className={`border ${borderClass} px-3 py-1.5 text-right tabular-nums select-none ${cellTextClass}`}
                    style={{ width: "3.2em" }}
                  >
                    {q.id}
                  </td>

                  <td
                    className={`border ${borderClass} px-3 py-1.5 leading-snug ${cellTextClass}`}
                  >
                    {q.text}
                  </td>

                  {OPTIONS.map((opt) => {
                    const isSelected = selectedAnswer === opt.letter;

                    return (
                      <td
                        key={opt.letter}
                        onClick={() => handleSelectOption(q.id, opt.letter)}
                        className={`border ${borderClass} p-1 text-center align-middle cursor-pointer select-none ${boldCellClass}`}
                      >
                        <button
                          type="button"
                          aria-label={`Question ${q.id}: ${opt.label} (${opt.letter})`}
                          aria-pressed={isSelected}
                          className={`inline-flex items-center justify-center rounded-full transition-all cursor-pointer ${
                            isSelected
                              ? isDark
                                ? "ring-2 ring-blue-400 bg-blue-500/20 font-bold text-blue-300"
                                : "ring-2 ring-gray-900 bg-gray-900/10 font-bold text-gray-900"
                              : "hover:bg-gray-500/15"
                          }`}
                          style={{
                            width: "1.75em",
                            height: "1.75em",
                          }}
                        >
                          {opt.letter}
                        </button>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="text-center mt-10">
        <Link
          to={
            "https://www.umassglobal.edu/blog-news/what-type-of-leader-are-you-quiz"
          }
          className="cursor-pointer  bg-green-600 py-3 px-2 rounded-[5px] "
        >
          Here is also an additional quize of 10 questions
        </Link>
      </div>
    </div>
  );
}
