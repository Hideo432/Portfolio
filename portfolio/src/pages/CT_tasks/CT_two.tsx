import { useState } from "react";
import TitleComponent from "../../components/Title";
import YouTubeVideo from "../../components/YT_component";
import type { Theme } from "../../types";

interface Props {
  theme: Theme;
}

interface Test {
  question: string;
  answer: string;
  number: number;
}

function QuestionComponent({ question, answer, number }: Test) {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div
      onClick={() => setVisible(!visible)}
      className="w-full cursor-pointer select-none rounded-xl bg-green-600 p-4 sm:p-6 shadow-md transition-colors hover:bg-green-700"
    >
      <div className="flex items-start justify-between gap-3 text-base sm:text-lg md:text-xl leading-snug">
        <p>
          <b>Question {number}:</b> {question}
        </p>
        <span className="shrink-0 text-sm sm:text-base opacity-80">
          {visible ? "▲" : "▼"}
        </span>
      </div>

      {visible && (
        <div className="mt-3 pt-3 border-t border-green-400/50 text-sm sm:text-base md:text-lg leading-relaxed text-green-50">
          <p>
            <b>Answer:</b> {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function CT_two({ theme }: Props) {
  return (
    <div className="relative">
      <TitleComponent theme={theme} title="Tasks 2" />
      <div className="relative mx-auto w-full max-w-4xl px-3 sm:px-6 pb-10">
        <div className="my-4 w-full overflow-hidden rounded-xl shadow-md">
          <YouTubeVideo videoId="MIgSy2vHdmA" title="Travel Safety Tips" />
        </div>

        <div className="flex flex-col gap-3 sm:gap-4 text-white">
          <QuestionComponent
            question="What should you research about your destination before traveling?"
            answer="You should research information such as hotels, transportation options, and whether money changers are available."
            number={1}
          />
          <QuestionComponent
            question="How does the speaker recommend you handle your passport copies?"
            answer="You should make multiple copies of the passport page containing your name and photo, and store them separately in different parts of your bag."
            number={2}
          />
          <QuestionComponent
            question="What should you do if your hotel room does not have a safe for your valuables?"
            answer="You should ask the hotel manager if they have a safe where you can store your documents. If that is not possible, secure your bag with a travel lock."
            number={3}
          />
          <QuestionComponent
            question="Who should you share your travel itinerary with, especially when traveling alone?"
            answer="You should leave your itinerary with a trusted friend or family member, including details about the city you are visiting and your return date."
            number={4}
          />
          <QuestionComponent
            question="Why does the speaker advise keeping your cash separate and partially hidden?"
            answer="This is to avoid drawing attention to yourself by showing off a large amount of cash every time you make a payment."
            number={5}
          />
        </div>
      </div>
    </div>
  );
}
