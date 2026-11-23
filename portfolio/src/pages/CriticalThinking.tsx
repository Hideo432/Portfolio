import TitleComponent from "../components/Title";
import type { Theme } from "../types";
import Quest_item from "../components/Quest_item";

interface Props {
  theme: Theme;
}
export default function CriticalThinking({ theme }: Props) {
  return (
    <div className="relative flex flex-col gap-10 mb-10">
      <TitleComponent theme={theme} title="Quest"></TitleComponent>
      <Quest_item
        theme={theme}
        title="1. Agree or disagree to these statements. "
        link="/travel/tasks/1"
        img="/sandals.svg"
      ></Quest_item>
      <Quest_item
        theme={theme}
        link="/travel/tasks/2"
        title="2. Answer 5 questions, take information from this video. "
        img="/plane.svg"
      ></Quest_item>
      <Quest_item
        theme={theme}
        link="/travel/tasks/3"
        title="3 Answer the questions | EX 2. "
        img="/tickets.svg"
      ></Quest_item>

      <Quest_item
        theme={theme}
        link="/travel/tasks/4"
        title="4. Complete the test."
        img="/palma.svg"
      ></Quest_item>
      <Quest_item
        theme={theme}
        link="/travel/tasks/5"
        title="5. Write 10 sentences about your travelling."
        img="/case.svg"
      ></Quest_item>
    </div>
  );
}
