import { useState } from "react";
import TitleComponent from "../../components/Title";
import type { Theme } from "../../types";

interface Props {
  theme: Theme;
}

interface QuizQuestion {
  id: number;
  question: string;
  options: {
    label: string;
    text: string;
  }[];
  correctAnswer: string;
}

interface QuestionItemProps extends QuizQuestion {
  fontSize?: number;
  selected: string | null;
  onSelect: (label: string) => void;
  showAllAnswers: boolean;
}

const TASK_TITLE = "Choose the correct answer for each travel question";

const QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question:
      'You arrive at the airport and realize your flight has been delayed by four hours due to severe weather at the destination. What does the airline mean if they offer you a "voucher" for food?',
    options: [
      { label: "A", text: "A discount on your next flight ticket" },
      { label: "B", text: "A ticket or coupon for a complimentary meal" },
      { label: "C", text: "A refund for your luggage fees" },
      { label: "D", text: "A free upgrade to business class" },
    ],
    correctAnswer: "B",
  },
  {
    id: 2,
    question:
      "Which word best describes traveling on a very tight budget and staying in inexpensive places like shared dormitories?",
    options: [
      { label: "A", text: "Glamping" },
      { label: "B", text: "Sightseeing" },
      { label: "C", text: "Backpacking" },
      { label: "D", text: "Cruising" },
    ],
    correctAnswer: "C",
  },
  {
    id: 3,
    question:
      'At a hotel front desk, the clerk says, "Your reservation includes complimentary breakfast." What does "complimentary" mean here?',
    options: [
      { label: "A", text: "Included free of charge" },
      { label: "B", text: "Served only in your room" },
      { label: "C", text: "Available for an extra fee" },
      { label: "D", text: "Served after 11:00 AM" },
    ],
    correctAnswer: "A",
  },
  {
    id: 4,
    question:
      "You take a long-haul flight across six time zones and feel exhausted and disoriented for several days after landing. What is this condition called?",
    options: [
      { label: "A", text: "Motion sickness" },
      { label: "B", text: "Altitude sickness" },
      { label: "C", text: "Cabin fever" },
      { label: "D", text: "Jet lag" },
    ],
    correctAnswer: "D",
  },
  {
    id: 5,
    question:
      'When booking a train or plane ticket, what is the difference between a "one-way" ticket and a "round-trip" ticket?',
    options: [
      {
        label: "A",
        text: "One-way has no assigned seat; round-trip includes a seat selection",
      },
      {
        label: "B",
        text: "One-way is only for direct flights; round-trip includes layovers",
      },
      {
        label: "C",
        text: "One-way takes you to your destination only; round-trip covers both going and returning",
      },
      {
        label: "D",
        text: "One-way is valid for one passenger; round-trip is for two passengers",
      },
    ],
    correctAnswer: "C",
  },
  {
    id: 6,
    question:
      'A friend tells you, "We hit the road early tomorrow morning." What does the idiom "hit the road" mean?',
    options: [
      { label: "A", text: "Get stuck in heavy traffic" },
      { label: "B", text: "Begin a journey" },
      { label: "C", text: "Take a wrong turn" },
      { label: "D", text: "Repair a flat tire" },
    ],
    correctAnswer: "B",
  },
  {
    id: 7,
    question:
      'At customs control, an officer asks if you have any goods "to declare." What are you being asked?',
    options: [
      { label: "A", text: "Whether you need help carrying your bags" },
      {
        label: "B",
        text: "Whether you are traveling for business or pleasure",
      },
      {
        label: "C",
        text: "Whether you are carrying taxable, restricted, or high-value items",
      },
      { label: "D", text: "Whether your luggage was packed by someone else" },
    ],
    correctAnswer: "C",
  },
  {
    id: 8,
    question:
      "Which phrasal verb means to register your arrival and get your room key at a hotel or your boarding pass at an airport?",
    options: [
      { label: "A", text: "Check out" },
      { label: "B", text: "Check in" },
      { label: "C", text: "Drop off" },
      { label: "D", text: "See off" },
    ],
    correctAnswer: "B",
  },
  {
    id: 9,
    question:
      "Your flight from London to Tokyo has a two-hour stop in Dubai where you change planes. What is that stop in Dubai called?",
    options: [
      { label: "A", text: "A detour" },
      { label: "B", text: "A layover" },
      { label: "C", text: "A boarding gate" },
      { label: "D", text: "A terminal" },
    ],
    correctAnswer: "B",
  },
  {
    id: 10,
    question:
      'Which sentence uses the word "accommodations" naturally and accurately in a travel context?',
    options: [
      {
        label: "A",
        text: "We packed all our accommodations into one small carry-on bag.",
      },
      {
        label: "B",
        text: "The flight attendant checked our accommodations before takeoff.",
      },
      {
        label: "C",
        text: "We booked our accommodations early to get a better rate on the hotel.",
      },
      {
        label: "D",
        text: "You need valid accommodations to pass through passport control.",
      },
    ],
    correctAnswer: "C",
  },
];

function QuestionItem({
  id,
  question,
  options,
  correctAnswer,
  fontSize = 16,
  selected,
  onSelect,
  showAllAnswers,
}: QuestionItemProps) {
  const isRevealed = showAllAnswers || selected !== null;

  return (
    <div
      style={{ fontSize: `${fontSize}px` }}
      className="bg-green-600 text-white rounded-xl px-4 py-3.5 shadow-sm transition-all duration-150 space-y-2.5"
    >
      <p className="leading-snug font-medium">
        <span className="font-bold mr-2">{id}</span>
        {question}
      </p>

      <div className="flex flex-col gap-1.5 pl-1">
        {options.map((opt) => {
          const isSelected = selected === opt.label;
          const isCorrect = opt.label === correctAnswer;

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

export default function CT_four({ theme }: Props) {
  const isDark = theme === "dark";
  const [font, setFont] = useState<number>(16);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showAllAnswers, setShowAllAnswers] = useState<boolean>(false);

  const handleIncrease = () => {
    setFont((prev) => Math.min(prev + 1, 28));
  };

  const handleDecrease = () => {
    setFont((prev) => Math.max(prev - 1, 12));
  };

  const handleSelectAnswer = (questionId: number, label: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: label,
    }));
  };

  const handleReset = () => {
    setAnswers({});
    setShowAllAnswers(false);
  };

  const correctCount = QUESTIONS.reduce(
    (acc, q) => (answers[q.id] === q.correctAnswer ? acc + 1 : acc),
    0,
  );

  return (
    <div className="relative pb-12">
      <TitleComponent theme={theme} title="Travel Quiz" />

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
            aria-label="decrease the font size"
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
            aria-label="increase the font size"
            className={`w-8 h-8 rounded-lg font-bold text-lg transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
              isDark
                ? "bg-gray-700 text-white hover:bg-gray-600"
                : "bg-gray-200 text-gray-900 hover:bg-gray-300"
            }`}
          >
            +
          </button>

          {(Object.keys(answers).length > 0 || showAllAnswers) && (
            <button
              type="button"
              onClick={handleReset}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition cursor-pointer ${
                isDark
                  ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              Сбросить
            </button>
          )}
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

        {(Object.keys(answers).length > 0 || showAllAnswers) && (
          <div
            className={`text-center text-sm font-semibold py-2 px-4 rounded-xl border ${
              isDark
                ? "bg-gray-800 border-gray-700 text-emerald-400"
                : "bg-emerald-50 border-emerald-200 text-emerald-800"
            }`}
          >
            Правильных ответов: {correctCount} из {QUESTIONS.length}
          </div>
        )}

        <div className="flex flex-col gap-3">
          {QUESTIONS.map((item) => (
            <QuestionItem
              key={item.id}
              id={item.id}
              question={item.question}
              options={item.options}
              correctAnswer={item.correctAnswer}
              fontSize={font}
              selected={answers[item.id] ?? null}
              onSelect={(label) => handleSelectAnswer(item.id, label)}
              showAllAnswers={showAllAnswers}
            />
          ))}
        </div>

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
            {showAllAnswers ? "Hide right answers" : "Show right answers"}
          </button>

          {(Object.keys(answers).length > 0 || showAllAnswers) && (
            <button
              type="button"
              onClick={handleReset}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm shadow-sm transition cursor-pointer ${
                isDark
                  ? "bg-gray-700 text-white hover:bg-gray-600"
                  : "bg-gray-200 text-gray-900 hover:bg-gray-300"
              }`}
            >
              Reset test
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
