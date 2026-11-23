import { useState } from "react";
import TitleComponent from "../components/Title";
import type { Theme } from "../types";

interface Props {
  theme: Theme;
}

interface RubricRow {
  criteria: string;
  exceptional: string;
  proficient: string;
  adequate: string;
  developing: string;
  beginning: string;
}

interface MonologueRow {
  grade: string;
  summary: string;
  descriptor: string;
}

const RUBRIC_DATA: RubricRow[] = [
  {
    criteria: "Content and Analysis",
    exceptional:
      "Demonstrates thorough understanding of the text with insightful, nuanced analysis that goes beyond surface-level interpretation.",
    proficient:
      "Shows solid comprehension of the text with clear analytical points that are well-developed and relevant.",
    adequate:
      "Demonstrates basic understanding of the text with some analysis, though may lack depth or detail.",
    developing:
      "Shows limited understanding of the text with minimal analysis that is mostly descriptive.",
    beginning:
      "Demonstrates little to no understanding of the text; analysis is absent or incomprehensible.",
  },
  {
    criteria: "Organization and Structure",
    exceptional:
      "Essay is exceptionally well-organized with clear introduction, body, and conclusion; transitions are seamless and logical.",
    proficient:
      "Essay is well-organized with coherent structure and effective transitions between paragraphs.",
    adequate:
      "Essay shows basic organization with an introduction, body, and conclusion; transitions are present but may be weak.",
    developing:
      "Essay lacks consistent organization; structure is unclear or paragraphs are poorly connected.",
    beginning:
      "Essay lacks organization; no clear structure or logical flow of ideas.",
  },
  {
    criteria: "Language Use and Vocabulary",
    exceptional:
      "Uses sophisticated vocabulary and varied sentence structures appropriate to the target language; exhibits strong command of idiom.",
    proficient:
      "Uses appropriate vocabulary and varied sentence structures with minor issues; shows good control of language.",
    adequate:
      "Uses basic vocabulary and simple sentence structures; language is understandable but limited in variety.",
    developing:
      "Vocabulary is limited and often inappropriate; sentence structures are repetitive and simplistic.",
    beginning:
      "Vocabulary is severely limited; language use is insufficient to convey meaning effectively.",
  },
  {
    criteria: "Language Accuracy",
    exceptional:
      "Demonstrates excellent control of grammar, syntax, spelling, and punctuation with few or no errors.",
    proficient:
      "Shows good command of grammar and mechanics with occasional errors that do not impede communication.",
    adequate:
      "Contains frequent grammatical errors and mechanical issues but meaning remains clear overall.",
    developing:
      "Errors in grammar, spelling, and punctuation are frequent and often impede understanding.",
    beginning:
      "Errors are pervasive; language use is too inaccurate to communicate ideas effectively.",
  },
  {
    criteria: "Critical Thinking and Evidence",
    exceptional:
      "Provides excellent textual evidence with insightful interpretation; arguments are original and well-supported.",
    proficient:
      "Uses relevant textual evidence to support arguments; shows good critical thinking skills.",
    adequate:
      "Provides some evidence to support points; critical thinking is present but underdeveloped.",
    developing:
      "Uses minimal or irrelevant evidence; critical thinking is limited to summary.",
    beginning:
      "Lacks evidence to support claims; no evidence of critical analysis.",
  },
];

const MONOLOGUE_DATA: MonologueRow[] = [
  {
    grade: "A(Excellent)",
    summary: "High mastery of oral communication skills.",
    descriptor:
      "Speaks with exceptional smoothness, natural pacing, and high confidence with minimal hesitation. Pronunciation and intonation are near-native and expressive. Content is well-developed, insightful, and logically structured with clear introduction and conclusion. Demonstrates extensive vocabulary, complex sentence structures, and excellent cultural awareness to engage the audience.",
  },
  {
    grade: "B(Good / Proficient)",
    summary: "Good communicative effectiveness.",
    descriptor:
      "Speaks fluently with occasional natural pauses and good pacing. Pronunciation is clear and accurate; intonation conveys meaning appropriately. Content is clear and organized in a logical sequence. Uses appropriate vocabulary and generally accurate grammar with minor errors that do not affect overall message.",
  },
  {
    grade: "C(Satisfactory)",
    summary: "Acceptable baseline performance.",
    descriptor:
      "Delivers the monologue with some hesitation, though maintains an understandable flow. Pronunciation is clear enough to be understood, despite occasional errors or flat intonation. Content is basic but intelligible. Basic vocabulary and simple grammatical structures are sufficient to convey core ideas.",
  },
  {
    grade: "D(Developing)",
    summary: "Below standard, needs significant improvement.",
    descriptor:
      "Frequent pauses and hesitancy disrupt the flow and affect comprehension. Pronunciation errors and incorrect intonation occasionally impede understanding. Content lacks depth and organization is weak. Vocabulary is limited, and frequent grammatical errors obscure meaning or cause strain for the listener.",
  },
  {
    grade: "F(Fail / Unacceptable)",
    summary: "Unsatisfactory / Failed to meet core criteria.",
    descriptor:
      "Speaks with significant hesitation, frequent long pauses, or extremely slow delivery. Pronunciation errors make understanding difficult. Content is minimal, disorganized, or off-topic. Extremely limited vocabulary and pervasive grammatical errors prevent effective communication. No attempt made or completely incomprehensible.",
  },
];

export default function Rubrics({ theme }: Props) {
  const isDark = theme === "dark";
  const [font, setFont] = useState(16);

  const handleIncrease = () => {
    setFont((prev) => Math.min(prev + 1, 28));
  };

  const handleDecrease = () => {
    setFont((prev) => Math.max(prev - 1, 12));
  };

  const borderClass = isDark ? "border-gray-700" : "border-gray-300";
  const cellTextClass = isDark ? "text-gray-200" : "text-gray-800";
  const boldCellClass = isDark ? "text-white" : "text-gray-900";
  const rowClass = isDark
    ? "odd:bg-gray-800 even:bg-gray-900/60 hover:bg-gray-700/60"
    : "odd:bg-white even:bg-gray-50 hover:bg-blue-50/50";

  return (
    <div className="w-full relative pb-12">
      <TitleComponent theme={theme} title="Rubrics" />

      {/* Панель управления размером шрифта */}
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

      <div
        style={{ fontSize: `${font}px` }}
        className="flex flex-col gap-10 px-3 sm:px-6 items-center transition-[font-size] duration-150"
      >
        <section className="w-full max-w-6xl">
          <div
            className={`mb-3 space-y-1 ${
              isDark ? "text-gray-100" : "text-gray-900"
            }`}
          >
            <h2 className="font-semibold">
              1. Foreign Language Analytic Essay Rubric (Grade 11)
            </h2>
            <p className="opacity-90">
              <span className="font-semibold">Type:</span> Analytic
            </p>
            <p className="opacity-90">
              <span className="font-semibold">Grades:</span> A, B, C, D, F
            </p>
          </div>

          <p className="sm:hidden text-xs opacity-70 mb-2">
            Scroll horizontally to view all columns →
          </p>

          <div
            className={`overflow-x-auto border rounded-lg shadow-sm transition-colors duration-300 ${borderClass} ${
              isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"
            }`}
          >
            <table className="w-full min-w-[820px] border-collapse text-left">
              <thead>
                <tr
                  className={
                    isDark
                      ? "bg-slate-950 text-white"
                      : "bg-slate-900 text-white"
                  }
                >
                  <th
                    className={`border p-2.5 font-semibold align-top ${borderClass}`}
                  >
                    CRITERIA
                  </th>
                  <th
                    className={`border p-2.5 font-semibold align-top ${borderClass}`}
                  >
                    EXCEPTIONAL (A)
                  </th>
                  <th
                    className={`border p-2.5 font-semibold align-top ${borderClass}`}
                  >
                    PROFICIENT (B)
                  </th>
                  <th
                    className={`border p-2.5 font-semibold align-top ${borderClass}`}
                  >
                    ADEQUATE (C)
                  </th>
                  <th
                    className={`border p-2.5 font-semibold align-top ${borderClass}`}
                  >
                    DEVELOPING (D)
                  </th>
                  <th
                    className={`border p-2.5 font-semibold align-top ${borderClass}`}
                  >
                    BEGINNING (F)
                  </th>
                </tr>
              </thead>
              <tbody>
                {RUBRIC_DATA.map((row) => (
                  <tr
                    key={row.criteria}
                    className={`transition-colors ${rowClass}`}
                  >
                    <td
                      className={`border p-2.5 font-bold align-top ${borderClass} ${boldCellClass}`}
                    >
                      {row.criteria}
                    </td>
                    <td
                      className={`border p-2.5 align-top leading-relaxed ${borderClass} ${cellTextClass}`}
                    >
                      {row.exceptional}
                    </td>
                    <td
                      className={`border p-2.5 align-top leading-relaxed ${borderClass} ${cellTextClass}`}
                    >
                      {row.proficient}
                    </td>
                    <td
                      className={`border p-2.5 align-top leading-relaxed ${borderClass} ${cellTextClass}`}
                    >
                      {row.adequate}
                    </td>
                    <td
                      className={`border p-2.5 align-top leading-relaxed ${borderClass} ${cellTextClass}`}
                    >
                      {row.developing}
                    </td>
                    <td
                      className={`border p-2.5 align-top leading-relaxed ${borderClass} ${cellTextClass}`}
                    >
                      {row.beginning}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="w-full max-w-6xl">
          <div
            className={`mb-3 space-y-1 ${
              isDark ? "text-gray-100" : "text-gray-900"
            }`}
          >
            <h2 className="font-semibold">
              2. Foreign Language Monologue Assessment Rubric (Grade 9)
            </h2>
            <p className="opacity-90">
              <span className="font-semibold">Type:</span> Holistic
            </p>
            <p className="opacity-90">
              <span className="font-semibold">Grades:</span> A, B, C, D, F
            </p>
          </div>

          <p className="sm:hidden text-xs opacity-70 mb-2">
            Scroll horizontally to view all columns →
          </p>

          <div
            className={`overflow-x-auto border rounded-lg shadow-sm transition-colors duration-300 ${borderClass} ${
              isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"
            }`}
          >
            <table className="w-full min-w-[600px] border-collapse text-left">
              <thead>
                <tr
                  className={
                    isDark
                      ? "bg-slate-950 text-white"
                      : "bg-slate-900 text-white"
                  }
                >
                  <th
                    className={`border p-2.5 font-semibold align-top w-1/4 ${borderClass}`}
                  >
                    GRADE
                  </th>
                  <th
                    className={`border p-2.5 font-semibold align-top w-3/4 ${borderClass}`}
                  >
                    COMPREHENSIVE DESCRIPTOR
                  </th>
                </tr>
              </thead>
              <tbody>
                {MONOLOGUE_DATA.map((row) => (
                  <tr
                    key={row.grade}
                    className={`transition-colors ${rowClass}`}
                  >
                    <td
                      className={`border p-2.5 font-bold align-top ${borderClass} ${boldCellClass}`}
                    >
                      {row.grade}
                    </td>
                    <td
                      className={`border p-2.5 align-top leading-relaxed ${borderClass} ${cellTextClass}`}
                    >
                      <p className="font-semibold mb-1.5">{row.summary}</p>
                      <p>{row.descriptor}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
