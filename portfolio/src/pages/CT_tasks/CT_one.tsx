import { useState } from "react";
import TitleComponent from "../../components/Title";
import type { Theme } from "../../types";

interface Props {
  theme: Theme;
}

interface Item {
  id: number;
  statement: string;
  fontSize?: number;
}

const TASK_TITLE = "Agree or disagree with the following statements";

const STATEMENTS: Item[] = [
  { id: 1, statement: "Businessmen usually travel from curiosity." },
  { id: 2, statement: "Teenagers usually travel with their parents." },
  { id: 3, statement: "Lonely people like to travel alone." },
  { id: 4, statement: "Tourists always travel on business." },
  {
    id: 5,
    statement:
      "When young people travel they like to make new friends and go sightseeing.",
  },
  {
    id: 6,
    statement:
      "Small children usually travel with parents or with grandparents.",
  },
  {
    id: 7,
    statement: "Travelling is useful, enjoyable and good for health.",
  },
  {
    id: 8,
    statement: "Usually travelling is dangerous and expensive.",
  },
  {
    id: 9,
    statement: "Sometimes travelling can be disappointing and tiring.",
  },
  {
    id: 10,
    statement:
      "People like to travel because it gives us life experience and helps us to explore the world.",
  },
  {
    id: 11,
    statement: "Travelling broadens our mind.",
  },
];

function StatementItem({ id, statement, fontSize = 16 }: Item) {
  return (
    <div
      style={{ fontSize: `${fontSize}px` }}
      className="bg-green-600 text-white rounded-xl px-4 py-3 shadow-sm transition-all duration-150"
    >
      <p className="leading-snug">
        <span className="font-semibold mr-2">{id})</span>
        {statement}
      </p>
    </div>
  );
}

export default function CT_one({ theme }: Props) {
  const isDark = theme === "dark";
  const [font, setFont] = useState<number>(16);

  const handleIncrease = () => {
    setFont((prev) => Math.min(prev + 1, 28));
  };

  const handleDecrease = () => {
    setFont((prev) => Math.max(prev - 1, 12));
  };

  return (
    <div className="relative pb-12">
      <TitleComponent theme={theme} title="Statements" />

      <div className="sticky top-2 z-20 flex flex-col items-center my-4 px-4">
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

      <div className="max-w-3xl mx-auto px-4 space-y-4">
        <h2
          style={{ fontSize: `${Math.min(font + 2, 30)}px` }}
          className={`text-center font-semibold italic leading-snug transition-all duration-150 ${
            isDark ? "text-red-400" : "text-red-700"
          }`}
        >
          {TASK_TITLE}
        </h2>

        <div className="flex flex-col gap-3">
          {STATEMENTS.map((item) => (
            <StatementItem
              key={item.id}
              id={item.id}
              statement={item.statement}
              fontSize={font}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
