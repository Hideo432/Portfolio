import { useState } from "react";
import type { Theme } from "../../types";
import TitleComponent from "../../components/Title";

interface Props {
  theme: Theme;
}

type Choice = "Fact" | "Myth";

interface TravelCard {
  id: number;
  statement: string;
  answer: Choice;
  explanation: string;
}

const TRAVEL_ITEMS: TravelCard[] = [
  {
    id: 1,
    statement:
      "In some airports, you can sleep inside designated quiet pods or rest zones for free or a small fee.",
    answer: "Fact",
    explanation:
      "Many major international hubs have sleep pods, lounges, or quiet rest areas for long layovers.",
  },
  {
    id: 2,
    statement:
      "Booking a flight on Tuesday at 3:00 AM always guarantees the cheapest ticket on any route.",
    answer: "Myth",
    explanation:
      "Airfare prices change dynamically based on demand and seat availability rather than a single fixed hour.",
  },
  {
    id: 3,
    statement:
      "Traveling across time zones can temporarily disrupt your sleep schedule and energy levels.",
    answer: "Fact",
    explanation:
      "Crossing multiple time zones causes jet lag because your internal body clock needs time to adjust.",
  },
  {
    id: 4,
    statement:
      "Packaged travel insurance never covers delayed baggage or trip interruptions.",
    answer: "Myth",
    explanation:
      "Many travel insurance policies specifically include coverage for lost/delayed luggage and trip delays.",
  },
  {
    id: 5,
    statement:
      "Learning a few basic phrases in the local language often helps when asking for directions or ordering food.",
    answer: "Fact",
    explanation:
      "Simple greetings and polite words make communication easier and are usually appreciated by locals.",
  },
  {
    id: 6,
    statement:
      "All countries accept the same electrical plug shape and voltage without an adapter.",
    answer: "Myth",
    explanation:
      "Plug types and voltages vary across regions, so travelers often need a universal adapter or converter.",
  },
];

export default function TravelFactOrMyth({ theme }: Props) {
  const isDark = theme === "dark";
  const [font, setFont] = useState<number>(16);
  const [selected, setSelected] = useState<Record<number, Choice>>({});

  const handleIncrease = () => {
    setFont((prev) => Math.min(prev + 1, 28));
  };

  const handleDecrease = () => {
    setFont((prev) => Math.max(prev - 1, 12));
  };

  const handlePick = (id: number, choice: Choice) => {
    setSelected((prev) => ({
      ...prev,
      [id]: choice,
    }));
  };

  const correctCount = TRAVEL_ITEMS.filter(
    (item) => selected[item.id] === item.answer,
  ).length;

  return (
    <div className="relative pb-12">
      <TitleComponent theme={theme} title="Travel: Fact or Myth?" />

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
        <div className="text-center space-y-1">
          <p
            style={{ fontSize: `${Math.min(font + 1, 29)}px` }}
            className={`font-medium ${isDark ? "text-gray-200" : "text-gray-800"}`}
          >
            Decide whether each travel statement is a{" "}
            <span className="font-bold text-emerald-500">Fact</span> or a{" "}
            <span className="font-bold text-amber-500">Myth</span>.
          </p>
          <p
            className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            Score: {correctCount} / {TRAVEL_ITEMS.length}
          </p>
        </div>

        <div className="flex flex-col gap-3.5">
          {TRAVEL_ITEMS.map((item) => {
            const userChoice = selected[item.id];
            const isAnswered = userChoice !== undefined;
            const isCorrect = userChoice === item.answer;

            return (
              <div
                key={item.id}
                style={{ fontSize: `${font}px` }}
                className={`rounded-xl border p-4 transition-all duration-150 ${
                  isDark
                    ? "bg-gray-800/80 border-gray-700 text-gray-100"
                    : "bg-white border-gray-300 text-gray-900 shadow-sm"
                }`}
              >
                <p className="leading-snug mb-3">
                  <span className="font-semibold mr-2">{item.id}.</span>
                  {item.statement}
                </p>

                <div className="flex flex-wrap items-center gap-2.5">
                  {(["Fact", "Myth"] as Choice[]).map((choice) => {
                    const active = userChoice === choice;
                    return (
                      <button
                        key={choice}
                        type="button"
                        onClick={() => handlePick(item.id, choice)}
                        className={`px-3.5 py-1.5 rounded-lg font-medium transition cursor-pointer border ${
                          active
                            ? choice === "Fact"
                              ? "bg-emerald-600 text-white border-emerald-600"
                              : "bg-amber-600 text-white border-amber-600"
                            : isDark
                              ? "bg-gray-700/70 border-gray-600 text-gray-200 hover:bg-gray-700"
                              : "bg-gray-100 border-gray-300 text-gray-800 hover:bg-gray-200"
                        }`}
                      >
                        {choice}
                      </button>
                    );
                  })}

                  {isAnswered && (
                    <span
                      className={`text-sm font-semibold ml-1 ${
                        isCorrect
                          ? isDark
                            ? "text-emerald-400"
                            : "text-emerald-700"
                          : isDark
                            ? "text-rose-400"
                            : "text-rose-700"
                      }`}
                    >
                      {isCorrect ? "✓ Correct" : `✕ Answer: ${item.answer}`}
                    </span>
                  )}
                </div>

                {isAnswered && (
                  <p
                    className={`mt-2.5 pt-2.5 border-t text-sm leading-snug ${
                      isDark
                        ? "border-gray-700 text-gray-300"
                        : "border-gray-200 text-gray-600"
                    }`}
                  >
                    {item.explanation}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
