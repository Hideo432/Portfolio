import { useState } from "react";
import TitleComponent from "../components/Title";
import type { Theme } from "../types";

interface Props {
  theme: Theme;
}

interface McqQuestion {
  id: number;
  question: string;
  options: {
    label: string;
    text: string;
  }[];
  correctAnswer: string;
}

interface TfStatement {
  id: number;
  statement: string;
  isTrue: boolean;
  note?: string;
}

interface FillBlankItem {
  id: number;
  before: string;
  after: string;
  answer: string;
}

const TASK_TITLE =
  "Complete the tasks based on the text: The History of the Computer";

const MCQ_QUESTIONS: McqQuestion[] = [
  {
    id: 1,
    question: "What did Charles Babbage design in 1833?",
    options: [
      { label: "A", text: "The Z1 computer" },
      { label: "B", text: "The Analytical Engine" },
      { label: "C", text: "The first Apple Macintosh" },
      { label: "D", text: "A one-gigabyte disk drive" },
    ],
    correctAnswer: "B",
  },
  {
    id: 2,
    question: "What was special about Konrad Zuse's Z2 in 1939?",
    options: [
      {
        label: "A",
        text: "It was the first electro-mechanical computer in the world.",
      },
      { label: "B", text: "It weighed almost 227 kg." },
      { label: "C", text: "It was made from old parts." },
      { label: "D", text: "It ran on computer games." },
    ],
    correctAnswer: "A",
  },
  {
    id: 3,
    question: "How much did the first one-gigabyte disk drive cost in 1980?",
    options: [
      { label: "A", text: "47 dollars" },
      { label: "B", text: "120 dollars" },
      { label: "C", text: "US$40,000" },
      { label: "D", text: "US$227" },
    ],
    correctAnswer: "C",
  },
  {
    id: 4,
    question:
      "What were the names of the first computer games mentioned in the text?",
    options: [
      { label: "A", text: "Z1 and Z2" },
      { label: "B", text: "Macintosh and Analytical" },
      { label: "C", text: "Asteroids and Lunar Lander" },
      { label: "D", text: "Jobs and Wozniak" },
    ],
    correctAnswer: "C",
  },
  {
    id: 5,
    question:
      "What is inside the case of the original first Apple Macintosh model?",
    options: [
      { label: "A", text: "A wooden mouse" },
      {
        label: "B",
        text: "47 signatures from members of the Apple Macintosh division",
      },
      { label: "C", text: "A one-gigabyte disk drive" },
      { label: "D", text: "Notes from Charles Babbage" },
    ],
    correctAnswer: "B",
  },
];

const TF_STATEMENTS: TfStatement[] = [
  {
    id: 1,
    statement: "Charles Babbage was from Germany.",
    isTrue: false,
    note: "Charles Babbage was from London.",
  },
  {
    id: 2,
    statement:
      "Early computers were around the size of a large room and used a lot of electricity.",
    isTrue: true,
  },
  {
    id: 3,
    statement: "The first one-gigabyte disk drive weighed almost 227 kg.",
    isTrue: true,
  },
  {
    id: 4,
    statement:
      "Steve Jobs and Steve Wozniak made the first Apple Macintosh in 1980.",
    isTrue: false,
    note: "The first Apple Macintosh came out in 1982.",
  },
  {
    id: 5,
    statement: "The first computer mouse ever made was wooden.",
    isTrue: true,
  },
];

const FILL_BLANKS: FillBlankItem[] = [
  {
    id: 1,
    before: "Konrad Zuse from Germany invented the first modern computer in ",
    after: " and named it the Z1.",
    answer: "1936",
  },
  {
    id: 2,
    before: "Computers as we know them today came about in ",
    after: ".",
    answer: "1980",
  },
  {
    id: 3,
    before: "Steve Jobs and Steve Wozniak made the first Apple Macintosh from ",
    after: " parts they collected.",
    answer: "old",
  },
  {
    id: 4,
    before: "There are ",
    after: " signatures inside the case of the original Apple Macintosh model.",
    answer: "47",
  },
  {
    id: 5,
    before: "One thing is certain, though; computers ",
    after: " the world forever.",
    answer: "changed",
  },
];

function McqCard({
  item,
  fontSize,
  selected,
  onSelect,
  showAllAnswers,
}: {
  item: McqQuestion;
  fontSize: number;
  selected: string | null;
  onSelect: (label: string) => void;
  showAllAnswers: boolean;
}) {
  const isRevealed = showAllAnswers || selected !== null;

  return (
    <div
      style={{ fontSize: `${fontSize}px` }}
      className="bg-green-600 text-white rounded-xl px-4 py-3.5 shadow-sm transition-all duration-150 space-y-2.5"
    >
      <p className="leading-snug font-medium">
        <span className="font-bold mr-2">{item.id})</span>
        {item.question}
      </p>

      <div className="flex flex-col gap-1.5 pl-1">
        {item.options.map((opt) => {
          const isSelected = selected === opt.label;
          const isCorrect = opt.label === item.correctAnswer;

          let optionStyle =
            "bg-green-700/70 hover:bg-green-700 border-transparent";

          if (isRevealed) {
            if (isCorrect) {
              optionStyle =
                "bg-emerald-900/95 border-white font-semibold ring-2 ring-white/80";
            } else if (isSelected) {
              optionStyle = "bg-red-600/90 border-red-200";
            } else {
              optionStyle = "bg-green-700/40 opacity-75 border-transparent";
            }
          }

          return (
            <button
              key={opt.label}
              type="button"
              onClick={() => onSelect(opt.label)}
              className={`text-left px-3 py-2 rounded-lg border transition-all cursor-pointer flex items-center justify-between gap-2 ${optionStyle}`}
            >
              <span>
                <span className="font-bold mr-2">{opt.label})</span>
                {opt.text}
              </span>
              {isRevealed && isCorrect && (
                <span className="text-xs uppercase tracking-wider bg-white text-emerald-900 font-bold px-2 py-0.5 rounded shrink-0">
                  Correct
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function TfCard({
  item,
  fontSize,
  selected,
  onSelect,
  showAllAnswers,
}: {
  item: TfStatement;
  fontSize: number;
  selected: boolean | null;
  onSelect: (val: boolean) => void;
  showAllAnswers: boolean;
}) {
  const isRevealed = showAllAnswers || selected !== null;

  const getBtnStyle = (val: boolean) => {
    const isChosen = selected === val;
    const isRight = item.isTrue === val;

    if (!isRevealed) {
      return "bg-green-700/70 hover:bg-green-700 border-transparent";
    }
    if (isRight) {
      return "bg-emerald-900/95 border-white font-semibold ring-2 ring-white/80";
    }
    if (isChosen) {
      return "bg-red-600/90 border-red-200";
    }
    return "bg-green-700/40 opacity-75 border-transparent";
  };

  return (
    <div
      style={{ fontSize: `${fontSize}px` }}
      className="bg-green-600 text-white rounded-xl px-4 py-3.5 shadow-sm transition-all duration-150 space-y-2.5"
    >
      <p className="leading-snug font-medium">
        <span className="font-bold mr-2">{item.id})</span>
        {item.statement}
      </p>

      <div className="flex flex-wrap gap-2 pl-1">
        <button
          type="button"
          onClick={() => onSelect(true)}
          className={`px-4 py-1.5 rounded-lg border transition-all cursor-pointer font-medium ${getBtnStyle(
            true,
          )}`}
        >
          True
        </button>
        <button
          type="button"
          onClick={() => onSelect(false)}
          className={`px-4 py-1.5 rounded-lg border transition-all cursor-pointer font-medium ${getBtnStyle(
            false,
          )}`}
        >
          False
        </button>
      </div>

      {isRevealed && item.note && (
        <p className="text-sm bg-emerald-950/60 border border-white/20 rounded-lg px-3 py-2 text-emerald-100">
          {item.note}
        </p>
      )}
    </div>
  );
}

function FillBlankCard({
  item,
  fontSize,
  value,
  onChange,
  showAllAnswers,
}: {
  item: FillBlankItem;
  fontSize: number;
  value: string;
  onChange: (val: string) => void;
  showAllAnswers: boolean;
}) {
  const isUserCorrect =
    value.trim().toLowerCase() === item.answer.toLowerCase();

  return (
    <div
      style={{ fontSize: `${fontSize}px` }}
      className="bg-green-600 text-white rounded-xl px-4 py-3.5 shadow-sm transition-all duration-150 space-y-2"
    >
      <p className="leading-relaxed font-medium">
        <span className="font-bold mr-2">{item.id})</span>
        {item.before}
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="..."
          aria-label={`Answer for blank ${item.id}`}
          className="inline-block w-32 sm:w-40 mx-1 px-2.5 py-0.5 rounded-lg bg-white text-gray-900 font-semibold border border-green-900/30 focus:outline-none focus:ring-2 focus:ring-amber-300"
        />
        {item.after}
      </p>

      {showAllAnswers && (
        <div className="flex flex-wrap items-center gap-2 text-sm bg-emerald-900/90 border border-white/40 rounded-lg px-3 py-1.5">
          <span className="text-xs uppercase tracking-wider bg-white text-emerald-900 font-bold px-2 py-0.5 rounded">
            Answer
          </span>
          <span className="font-semibold">{item.answer}</span>
          {value.trim().length > 0 && (
            <span
              className={`ml-auto text-xs font-bold px-2 py-0.5 rounded ${
                isUserCorrect
                  ? "bg-emerald-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {isUserCorrect ? "Matched" : "Check spelling"}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export default function GnT({ theme }: Props) {
  const isDark = theme === "dark";
  const [font, setFont] = useState<number>(16);
  const [mcqAnswers, setMcqAnswers] = useState<Record<number, string>>({});
  const [tfAnswers, setTfAnswers] = useState<Record<number, boolean>>({});
  const [blankAnswers, setBlankAnswers] = useState<Record<number, string>>({});
  const [showAllAnswers, setShowAllAnswers] = useState<boolean>(false);

  const handleIncrease = () => {
    setFont((prev) => Math.min(prev + 1, 28));
  };

  const handleDecrease = () => {
    setFont((prev) => Math.max(prev - 1, 12));
  };

  const handleReset = () => {
    setMcqAnswers({});
    setTfAnswers({});
    setBlankAnswers({});
    setShowAllAnswers(false);
  };

  const mcqCorrect = MCQ_QUESTIONS.reduce(
    (acc, q) => (mcqAnswers[q.id] === q.correctAnswer ? acc + 1 : acc),
    0,
  );

  const tfCorrect = TF_STATEMENTS.reduce(
    (acc, s) => (tfAnswers[s.id] === s.isTrue ? acc + 1 : acc),
    0,
  );

  const blanksCorrect = FILL_BLANKS.reduce(
    (acc, b) =>
      (blankAnswers[b.id] ?? "").trim().toLowerCase() === b.answer.toLowerCase()
        ? acc + 1
        : acc,
    0,
  );

  const totalAnswered =
    Object.keys(mcqAnswers).length +
    Object.keys(tfAnswers).length +
    Object.values(blankAnswers).filter((v) => v.trim().length > 0).length;

  const totalCorrect = mcqCorrect + tfCorrect + blanksCorrect;
  const totalQuestions =
    MCQ_QUESTIONS.length + TF_STATEMENTS.length + FILL_BLANKS.length;

  const hasActivity = totalAnswered > 0 || showAllAnswers;

  return (
    <div className="relative pb-14">
      <TitleComponent theme={theme} title="History of the Computer" />

      <div className="sticky top-2 z-20 flex flex-col items-center my-4 px-4">
        <div
          className={`flex flex-wrap items-center justify-center gap-3 px-3.5 py-2 rounded-xl border shadow-sm backdrop-blur-md transition-colors ${
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
            aria-label="Decrease font size"
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
            aria-label="Increase font size"
            className={`w-8 h-8 rounded-lg font-bold text-lg transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
              isDark
                ? "bg-gray-700 text-white hover:bg-gray-600"
                : "bg-gray-200 text-gray-900 hover:bg-gray-300"
            }`}
          >
            +
          </button>

          <div className="h-5 w-px bg-gray-400/40 mx-1 hidden sm:block" />

          <button
            type="button"
            onClick={() => setShowAllAnswers((prev) => !prev)}
            className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition cursor-pointer ${
              showAllAnswers
                ? "bg-amber-500 text-white hover:bg-amber-600"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            {showAllAnswers ? "Hide Correct Answers" : "Show Correct Answers"}
          </button>

          {hasActivity && (
            <button
              type="button"
              onClick={handleReset}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition cursor-pointer ${
                isDark
                  ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              Reset
            </button>
          )}
        </div>
      </div>
      <div className="text-center border-b-1">
        <img src="/gnt-img-res.png" alt="" />
        <p>source:https://okulyk.com/7-klass/anglijskij-yazyk-7/7518/</p>
      </div>
      <div className="max-w-3xl mx-auto px-4 space-y-8">
        <h2
          style={{ fontSize: `${Math.min(font + 2, 30)}px` }}
          className={`text-center font-semibold italic leading-snug transition-all duration-150 ${
            isDark ? "text-red-400" : "text-red-700"
          }`}
        >
          {TASK_TITLE}
        </h2>

        {hasActivity && (
          <div
            className={`text-center text-sm font-semibold py-2 px-4 rounded-xl border ${
              isDark
                ? "bg-gray-800 border-gray-700 text-emerald-400"
                : "bg-emerald-50 border-emerald-200 text-emerald-800"
            }`}
          >
            Correct answers: {totalCorrect} of {totalQuestions}
          </div>
        )}

        <section className="space-y-3">
          <h3
            style={{ fontSize: `${Math.min(font + 1, 28)}px` }}
            className={`font-semibold italic ${
              isDark ? "text-red-400" : "text-red-700"
            }`}
          >
            Task 1: Multiple Choice Questions
          </h3>
          <div className="flex flex-col gap-3">
            {MCQ_QUESTIONS.map((item) => (
              <McqCard
                key={item.id}
                item={item}
                fontSize={font}
                selected={mcqAnswers[item.id] ?? null}
                onSelect={(label) =>
                  setMcqAnswers((prev) => ({ ...prev, [item.id]: label }))
                }
                showAllAnswers={showAllAnswers}
              />
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <h3
            style={{ fontSize: `${Math.min(font + 1, 28)}px` }}
            className={`font-semibold italic ${
              isDark ? "text-red-400" : "text-red-700"
            }`}
          >
            Task 2: True or False
          </h3>
          <div className="flex flex-col gap-3">
            {TF_STATEMENTS.map((item) => (
              <TfCard
                key={item.id}
                item={item}
                fontSize={font}
                selected={tfAnswers[item.id] ?? null}
                onSelect={(val) =>
                  setTfAnswers((prev) => ({ ...prev, [item.id]: val }))
                }
                showAllAnswers={showAllAnswers}
              />
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <h3
            style={{ fontSize: `${Math.min(font + 1, 28)}px` }}
            className={`font-semibold italic ${
              isDark ? "text-red-400" : "text-red-700"
            }`}
          >
            Task 3: Fill in the Blanks
          </h3>
          <div className="flex flex-col gap-3">
            {FILL_BLANKS.map((item) => (
              <FillBlankCard
                key={item.id}
                item={item}
                fontSize={font}
                value={blankAnswers[item.id] ?? ""}
                onChange={(val) =>
                  setBlankAnswers((prev) => ({ ...prev, [item.id]: val }))
                }
                showAllAnswers={showAllAnswers}
              />
            ))}
          </div>
        </section>

        <div className="flex justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => setShowAllAnswers((prev) => !prev)}
            className={`px-5 py-2.5 rounded-xl font-semibold text-sm shadow-sm transition cursor-pointer ${
              showAllAnswers
                ? "bg-amber-500 text-white hover:bg-amber-600"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            {showAllAnswers ? "Hide Correct Answers" : "Show Correct Answers"}
          </button>

          {hasActivity && (
            <button
              type="button"
              onClick={handleReset}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm shadow-sm transition cursor-pointer ${
                isDark
                  ? "bg-gray-700 text-white hover:bg-gray-600"
                  : "bg-gray-200 text-gray-900 hover:bg-gray-300"
              }`}
            >
              Reset Tasks
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
