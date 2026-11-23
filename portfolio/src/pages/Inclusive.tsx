import { useState } from "react";
import TitleComponent from "../components/Title";
import type { Theme } from "../types";

interface Props {
  theme: Theme;
}

interface OptionItem {
  label: string;
  count: number;
  percentage: number;
  color: string;
}

interface SurveyQuestion {
  id: number;
  question: string;
  subtitle?: string;
  responsesCount: number;
  type: "pie" | "bar";
  maxScale?: number;
  options: OptionItem[];
}

const PIE_COLORS = {
  blue: "#2563eb",
  red: "#dc2626",
  orange: "#f59e0b",
  green: "#16a34a",
  purple: "#9333ea",
};

const BAR_COLOR = "#6d4aff";

const SURVEY_DATA: SurveyQuestion[] = [
  {
    id: 1,
    question: "Your role in the educational environment:",
    responsesCount: 10,
    type: "pie",
    options: [
      { label: "Student", count: 9, percentage: 90, color: PIE_COLORS.blue },
      { label: "Teacher", count: 0, percentage: 0, color: PIE_COLORS.red },
      { label: "Other", count: 1, percentage: 10, color: PIE_COLORS.orange },
    ],
  },
  {
    id: 2,
    question:
      "How familiar are you with the concept and principles of inclusive education?",
    responsesCount: 10,
    type: "pie",
    options: [
      {
        label: "Very familiar, I practice or encounter it regularly",
        count: 3,
        percentage: 30,
        color: PIE_COLORS.blue,
      },
      {
        label: "I have a general understanding",
        count: 6,
        percentage: 60,
        color: PIE_COLORS.red,
      },
      {
        label: "I have heard of it, but know very little",
        count: 1,
        percentage: 10,
        color: PIE_COLORS.orange,
      },
      {
        label: "Practically unfamiliar",
        count: 0,
        percentage: 0,
        color: PIE_COLORS.green,
      },
    ],
  },
  {
    id: 3,
    question:
      "What is your overall attitude toward students with special educational needs (SEN) learning alongside their peers?",
    responsesCount: 10,
    type: "pie",
    options: [
      {
        label: "Strongly negative",
        count: 0,
        percentage: 0,
        color: PIE_COLORS.blue,
      },
      {
        label: "Somewhat negative",
        count: 0,
        percentage: 0,
        color: PIE_COLORS.red,
      },
      { label: "Neutral", count: 6, percentage: 60, color: PIE_COLORS.orange },
      {
        label: "Somewhat positive",
        count: 3,
        percentage: 30,
        color: PIE_COLORS.green,
      },
      {
        label: "Strongly supportive",
        count: 1,
        percentage: 10,
        color: PIE_COLORS.purple,
      },
    ],
  },
  {
    id: 4,
    question:
      "How do you rate the infrastructure and technical readiness of your institution for inclusive education (ramps, specialized equipment, adapted materials)?",
    responsesCount: 10,
    type: "pie",
    options: [
      {
        label: "Fully ready",
        count: 3,
        percentage: 30,
        color: PIE_COLORS.blue,
      },
      {
        label: "Partially ready, improvements are needed",
        count: 5,
        percentage: 50,
        color: PIE_COLORS.red,
      },
      {
        label: "Practically not ready",
        count: 2,
        percentage: 20,
        color: PIE_COLORS.orange,
      },
      {
        label: "Hard to say",
        count: 0,
        percentage: 0,
        color: PIE_COLORS.green,
      },
    ],
  },
  {
    id: 5,
    question:
      "In your opinion, do teachers have sufficient knowledge and skills to work effectively in inclusive classrooms?",
    responsesCount: 10,
    type: "pie",
    options: [
      {
        label: "Yes, completely",
        count: 3,
        percentage: 30,
        color: PIE_COLORS.blue,
      },
      {
        label: "Mostly yes, though regular training is needed",
        count: 4,
        percentage: 40,
        color: PIE_COLORS.red,
      },
      {
        label: "Mostly no, practical methods are lacking",
        count: 2,
        percentage: 20,
        color: PIE_COLORS.orange,
      },
      {
        label: "No, educators are not prepared",
        count: 0,
        percentage: 0,
        color: PIE_COLORS.green,
      },
      {
        label: "Hard to say",
        count: 1,
        percentage: 10,
        color: PIE_COLORS.purple,
      },
    ],
  },
  {
    id: 6,
    question: "What do you see as the main benefits of inclusive education?",
    subtitle: "multiple choice",
    responsesCount: 10,
    type: "bar",
    maxScale: 10,
    options: [
      {
        label: "Development of empathy, tolerance, and mutual support...",
        count: 5,
        percentage: 50,
        color: BAR_COLOR,
      },
      {
        label: "Successful socialization and adaptation of students with SEN",
        count: 9,
        percentage: 90,
        color: BAR_COLOR,
      },
      {
        label: "Individualization and flexibility of the learning process",
        count: 3,
        percentage: 30,
        color: BAR_COLOR,
      },
      {
        label: "Reduction of stigma and social barriers",
        count: 2,
        percentage: 20,
        color: BAR_COLOR,
      },
      {
        label: "I do not see significant benefits",
        count: 1,
        percentage: 10,
        color: BAR_COLOR,
      },
    ],
  },
  {
    id: 7,
    question: "What are the main barriers to implementing inclusive education?",
    subtitle: "multiple choice",
    responsesCount: 10,
    type: "bar",
    maxScale: 8,
    options: [
      {
        label: "Lack of funding and specialized equipment",
        count: 4,
        percentage: 40,
        color: BAR_COLOR,
      },
      {
        label:
          "Shortage of specialists (tutors, speech therapists, psychologists)",
        count: 7,
        percentage: 70,
        color: BAR_COLOR,
      },
      {
        label: "Insufficient methodological training of teachers",
        count: 4,
        percentage: 40,
        color: BAR_COLOR,
      },
      {
        label: "Stereotypes and unreadiness of society, parents, or students",
        count: 3,
        percentage: 30,
        color: BAR_COLOR,
      },
      {
        label: "Overcrowded classrooms/groups",
        count: 2,
        percentage: 20,
        color: BAR_COLOR,
      },
    ],
  },
  {
    id: 8,
    question:
      "Based on your observations, how does an inclusive environment affect academic performance and the psychological climate?",
    subtitle: "single choice",
    responsesCount: 10,
    type: "pie",
    options: [
      {
        label:
          "Positively affects the atmosphere without lowering academic performance",
        count: 1,
        percentage: 10,
        color: PIE_COLORS.blue,
      },
      {
        label: "Positively affects both the atmosphere and academic results",
        count: 6,
        percentage: 60,
        color: PIE_COLORS.red,
      },
      {
        label: "Has no noticeable effect",
        count: 0,
        percentage: 0,
        color: PIE_COLORS.orange,
      },
      {
        label: "Creates additional difficulties for the learning process",
        count: 0,
        percentage: 0,
        color: PIE_COLORS.green,
      },
      {
        label: "Hard to say",
        count: 3,
        percentage: 30,
        color: PIE_COLORS.purple,
      },
    ],
  },
  {
    id: 9,
    question:
      "What measures should be prioritized to improve inclusive education?",
    subtitle: "choose up to 2",
    responsesCount: 10,
    type: "bar",
    maxScale: 6,
    options: [
      {
        label: "Regular practical courses and training for educators",
        count: 4,
        percentage: 40,
        color: BAR_COLOR,
      },
      {
        label: "Increasing the number of tutors and teaching assistants",
        count: 5,
        percentage: 50,
        color: BAR_COLOR,
      },
      {
        label: "Adapting educational infrastructure and digital resour...",
        count: 6,
        percentage: 60,
        color: BAR_COLOR,
      },
      {
        label: "Awareness and educational work with students and parents",
        count: 0,
        percentage: 0,
        color: BAR_COLOR,
      },
      {
        label: "Developing more flexible curricula and assessment criteria",
        count: 0,
        percentage: 0,
        color: BAR_COLOR,
      },
    ],
  },
];

function polarToCartesian(
  cx: number,
  cy: number,
  r: number,
  angleInDegrees: number,
) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: cx + r * Math.cos(angleInRadians),
    y: cy + r * Math.sin(angleInRadians),
  };
}

function describeSlice(
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number,
) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    "M",
    cx,
    cy,
    "L",
    start.x,
    start.y,
    "A",
    r,
    r,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
    "Z",
  ].join(" ");
}

function PieChartCard({
  item,
  isDark,
}: {
  item: SurveyQuestion;
  isDark: boolean;
}) {
  const activeSlices = item.options.filter((opt) => opt.percentage > 0);
  let cumulativeAngle = 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-2">
      <div className="md:col-span-6 flex justify-center">
        <svg
          viewBox="0 0 220 220"
          className="w-48 h-48 sm:w-56 sm:h-56 overflow-visible"
          role="img"
          aria-label={item.question}
        >
          {activeSlices.map((slice, idx) => {
            const sweepAngle = (slice.percentage / 100) * 360;
            const startAngle = cumulativeAngle;
            const endAngle = cumulativeAngle + sweepAngle;
            const midAngle = startAngle + sweepAngle / 2;
            const labelPos = polarToCartesian(110, 110, 62, midAngle);

            cumulativeAngle = endAngle;

            if (slice.percentage === 100) {
              return (
                <g key={idx}>
                  <circle
                    cx="110"
                    cy="110"
                    r="96"
                    fill={slice.color}
                    stroke={isDark ? "#1f2937" : "#ffffff"}
                    strokeWidth="2"
                  />
                  <text
                    x="110"
                    y="110"
                    fill="#ffffff"
                    fontSize="13"
                    fontWeight="700"
                    textAnchor="middle"
                    dominantBaseline="central"
                  >
                    100%
                  </text>
                </g>
              );
            }

            return (
              <g key={idx}>
                <path
                  d={describeSlice(110, 110, 96, startAngle, endAngle)}
                  fill={slice.color}
                  stroke={isDark ? "#1f2937" : "#ffffff"}
                  strokeWidth="2"
                />
                {slice.percentage >= 8 && (
                  <text
                    x={labelPos.x}
                    y={labelPos.y}
                    fill="#ffffff"
                    fontSize="12"
                    fontWeight="700"
                    textAnchor="middle"
                    dominantBaseline="central"
                  >
                    {slice.percentage}%
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      <div className="md:col-span-6 space-y-2.5">
        {item.options.map((opt, idx) => (
          <div key={idx} className="flex items-start gap-2.5">
            <span
              className="mt-1.5 w-3 h-3 rounded-full shrink-0"
              style={{ backgroundColor: opt.color }}
            />
            <span
              className={`leading-snug ${
                isDark ? "text-gray-200" : "text-gray-800"
              }`}
            >
              {opt.label}
              <span
                className={`ml-1.5 text-sm ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                ({opt.count} / {opt.percentage}%)
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BarChartCard({
  item,
  isDark,
}: {
  item: SurveyQuestion;
  isDark: boolean;
}) {
  const maxScale = item.maxScale ?? 10;
  const step = maxScale >= 8 ? 2 : 1;
  const ticks: number[] = [];
  for (let v = 0; v <= maxScale; v += step) {
    ticks.push(v);
  }

  return (
    <div className="pt-2 space-y-3">
      <div className="space-y-3.5">
        {item.options.map((opt, idx) => {
          const widthPercent = Math.min(
            100,
            Math.max(0, (opt.count / maxScale) * 100),
          );

          return (
            <div
              key={idx}
              className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-center"
            >
              <div
                className={`sm:col-span-5 sm:text-right leading-snug ${
                  isDark ? "text-gray-200" : "text-gray-800"
                }`}
              >
                {opt.label}
              </div>

              <div className="sm:col-span-7 flex items-center gap-2">
                <div
                  className={`flex-1 h-7 relative border-l ${
                    isDark ? "border-gray-600" : "border-gray-400"
                  }`}
                >
                  <div
                    className="h-full rounded-r-sm transition-all duration-300"
                    style={{
                      width: `${widthPercent}%`,
                      backgroundColor: opt.color,
                    }}
                  />
                </div>
                <span
                  className={`shrink-0 text-sm font-medium tabular-nums whitespace-nowrap ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {opt.count} ({opt.percentage} %)
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Ось значений внизу столбчатой диаграммы */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 pt-1">
        <div className="hidden sm:block sm:col-span-5" />
        <div className="sm:col-span-7 pr-16">
          <div
            className={`flex justify-between text-xs tabular-nums border-t pt-1 ${
              isDark
                ? "border-gray-700 text-gray-400"
                : "border-gray-300 text-gray-600"
            }`}
          >
            {ticks.map((tick) => (
              <span key={tick}>{tick}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function InclusiveSurveyResults({ theme }: Props) {
  const isDark = theme === "dark";
  const [font, setFont] = useState<number>(16);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleIncrease = () => {
    setFont((prev) => Math.min(prev + 1, 28));
  };

  const handleDecrease = () => {
    setFont((prev) => Math.max(prev - 1, 12));
  };

  const handleCopySummary = async (item: SurveyQuestion) => {
    const summary = [
      item.question,
      `Responses: ${item.responsesCount}`,
      ...item.options.map(
        (opt) => `- ${opt.label}: ${opt.count} (${opt.percentage}%)`,
      ),
    ].join("\n");

    try {
      await navigator.clipboard.writeText(summary);
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      setCopiedId(null);
    }
  };

  return (
    <div className="w-full relative pb-12">
      <TitleComponent
        theme={theme}
        title="Survey Results: Inclusive Education"
      />

      {/* Панель управления размером шрифта */}
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

      {/* Карточки вопросов и диаграмм */}
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        {SURVEY_DATA.map((item) => (
          <section
            key={item.id}
            style={{ fontSize: `${font}px` }}
            className={`rounded-xl border p-5 sm:p-6 transition-all duration-150 ${
              isDark
                ? "bg-gray-800/85 border-gray-700 text-gray-100"
                : "bg-white border-gray-200 text-gray-900 shadow-sm"
            }`}
          >
            <div className="flex items-start justify-between gap-4 mb-1">
              <div>
                <h3 className="font-semibold leading-snug">{item.question}</h3>
                {item.subtitle && (
                  <p
                    className={`italic text-sm mt-0.5 ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    ({item.subtitle})
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={() => handleCopySummary(item)}
                className={`shrink-0 text-xs sm:text-sm font-medium px-2.5 py-1.5 rounded-lg border transition cursor-pointer ${
                  copiedId === item.id
                    ? isDark
                      ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-300"
                      : "bg-emerald-50 border-emerald-300 text-emerald-700"
                    : isDark
                      ? "bg-gray-700/70 border-gray-600 text-blue-300 hover:bg-gray-700"
                      : "bg-blue-50/60 border-blue-200 text-blue-600 hover:bg-blue-100/70"
                }`}
              >
                {copiedId === item.id
                  ? "✓ Скопировано"
                  : "Копировать диаграмму"}
              </button>
            </div>

            <p
              className={`text-sm mb-4 ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {item.responsesCount} ответов
            </p>

            {item.type === "pie" ? (
              <PieChartCard item={item} isDark={isDark} />
            ) : (
              <BarChartCard item={item} isDark={isDark} />
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
