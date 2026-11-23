import { useState } from "react";
import type { Theme } from "../../types";
import TitleComponent from "../../components/Title";

interface Props {
  theme: Theme;
}

interface EssayTopic {
  id: number;
  title: string;
  prompt: string;
}

const ESSAY_TOPICS: EssayTopic[] = [
  {
    id: 1,
    title: "Travel as a Way to Broaden the Mind: Fact or Illusion?",
    prompt:
      "Discuss whether traveling genuinely broadens people's horizons and builds life experience, or whether it depends on how open-minded and observant a traveler is.",
  },
  {
    id: 2,
    title: "Solo Travel vs. Traveling with Friends or Family",
    prompt:
      "Compare the advantages and disadvantages of traveling alone versus traveling with family or friends, considering different age groups, habits, and travel goals.",
  },
  {
    id: 3,
    title: "Why Do People Travel: Curiosity, Relaxation, or Escaping Routine?",
    prompt:
      "Explore the main reasons why people travel—such as curiosity, rest, work, or a change of scenery—and support your ideas with examples.",
  },
  {
    id: 4,
    title:
      "The Hidden Challenges of Traveling: Cost, Fatigue, and Cultural Shock",
    prompt:
      "Examine why trips can sometimes be tiring, expensive, or disappointing, and suggest practical ways to overcome difficulties on the road.",
  },
  {
    id: 5,
    title: "Sustainable and Mindful Tourism in the Modern World",
    prompt:
      "Explain how travelers can respect local culture, communities, and the environment instead of treating destinations as mere checklists.",
  },
];

export default function CT_five({ theme }: Props) {
  const isDark = theme === "dark";
  const [font, setFont] = useState<number>(16);
  const [selectedTopicId, setSelectedTopicId] = useState<number>(1);
  const [drafts, setDrafts] = useState<Record<number, string>>({});

  const handleIncrease = () => {
    setFont((prev) => Math.min(prev + 1, 28));
  };

  const handleDecrease = () => {
    setFont((prev) => Math.max(prev - 1, 12));
  };

  const handleDraftChange = (id: number, value: string) => {
    setDrafts((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const activeTopic =
    ESSAY_TOPICS.find((topic) => topic.id === selectedTopicId) ??
    ESSAY_TOPICS[0];
  const currentDraft = drafts[activeTopic.id] ?? "";
  const wordCount = currentDraft.trim()
    ? currentDraft.trim().split(/\s+/).length
    : 0;

  return (
    <div className="w-full relative pb-12">
      <TitleComponent theme={theme} title="Travel Essay Topics" />

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

      <div className="max-w-4xl mx-auto px-4 space-y-6">
        <div className="flex flex-col gap-3">
          {ESSAY_TOPICS.map((topic) => {
            const isSelected = topic.id === selectedTopicId;

            return (
              <div
                key={topic.id}
                onClick={() => setSelectedTopicId(topic.id)}
                style={{ fontSize: `${font}px` }}
                className={`rounded-xl border p-4 transition-all duration-150 cursor-pointer ${
                  isSelected
                    ? isDark
                      ? "bg-blue-950/50 border-blue-400 text-white shadow-sm"
                      : "bg-blue-50/80 border-blue-600 text-gray-900 shadow-sm"
                    : isDark
                      ? "bg-gray-800/80 border-gray-700 text-gray-200 hover:bg-gray-800"
                      : "bg-white border-gray-300 text-gray-800 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold leading-snug">
                    <span className="mr-2">{topic.id}.</span>
                    {topic.title}
                  </h3>
                  <span
                    className={`shrink-0 text-xs px-2.5 py-1 rounded-full font-medium ${
                      isSelected
                        ? isDark
                          ? "bg-blue-500/20 text-blue-300"
                          : "bg-blue-600 text-white"
                        : isDark
                          ? "bg-gray-700 text-gray-300"
                          : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {isSelected ? "Selected" : "Choose"}
                  </span>
                </div>
                <p
                  className={`mt-2 leading-relaxed ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {topic.prompt}
                </p>
              </div>
            );
          })}
        </div>

        <div
          style={{ fontSize: `${font}px` }}
          className={`rounded-xl border p-4 sm:p-5 transition-colors ${
            isDark
              ? "bg-gray-800/80 border-gray-700 text-gray-100"
              : "bg-white border-gray-300 text-gray-900 shadow-sm"
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <h4 className="font-semibold">
              Your Essay: {activeTopic.id}. {activeTopic.title}
            </h4>
            <span
              className={`text-sm tabular-nums ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Words: {wordCount}
            </span>
          </div>

          <textarea
            value={currentDraft}
            onChange={(e) => handleDraftChange(activeTopic.id, e.target.value)}
            placeholder="Write an essay in English here... It must be at least 200 words long"
            rows={8}
            className={`w-full rounded-lg border p-3 leading-relaxed focus:outline-none focus:ring-2 transition ${
              isDark
                ? "bg-gray-900/80 border-gray-700 text-white placeholder-gray-500 focus:ring-blue-400"
                : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-blue-600"
            }`}
          />
          <div className="flex justify-center mt-3">
            <button className={"bg-green-600 px-5 py-3 rounded-[10px] "}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
