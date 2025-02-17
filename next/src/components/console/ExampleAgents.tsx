import { useSession } from "next-auth/react";
import React from "react";
import { useSID } from "../../hooks/useSID";
import FadeIn from "../motions/FadeIn";
import { Book, Briefcase, NotebookPen, Plane } from "lucide-react";
import { ExampleAgentButton } from "./ExampleAgentButton";

type ExampleAgentsProps = {
  setAgentRun?: (name: string, goal: string) => void;
  setShowSignIn: (show: boolean) => void;
};

const ExampleAgents = ({ setAgentRun, setShowSignIn }: ExampleAgentsProps) => {
  const { data: session } = useSession();
  const sid = useSID(session);

  return (
    <FadeIn delay={0.9} duration={0.5}>
      <h3 className="mt-5 text-center text-xl text-white">Intelligent Workflow Tools</h3>
      <div className="my-4 grid grid-cols-2 gap-6 sm:grid-cols-4">
        {/* Research GPT Card */}
        <div
          onClick={() => {
            if (setAgentRun) {
              setAgentRun("Scholarly", "Plan a research on global climate change");
            }
          }}
          className="btn-primary-orange relative flex transform cursor-pointer items-center overflow-hidden rounded-md bg-gradient-to-b from-orange-500/70 to-orange-900 px-4 py-2 shadow-lg transition-transform hover:scale-105"
        >
          <div className="absolute inset-x-0 top-0 h-1/2 bg-orange-400/50 blur-[50px]"></div>
          <span className="relative z-10 font-semibold text-white">
            <NotebookPen className="mr-2 inline-block" color="#F97316" />
            Scholarly
          </span>
        </div>

        {/* Work GPT Card */}
        <div
          onClick={() => {
            if (setAgentRun) {
              setAgentRun(
                "Workman",
                " Create a comprehensive report for how to scale a startup to 1000 customers"
              );
            }
          }}
          className="btn-primary-teal relative flex transform cursor-pointer items-center overflow-hidden rounded-md bg-gradient-to-b from-teal-500/70 to-teal-900 px-4 py-2 shadow-lg transition-transform hover:scale-105"
        >
          <div className="absolute inset-x-0 top-0 h-1/2 bg-teal-400/50 blur-[50px]"></div>
          <span className="relative z-10 font-semibold text-white">
            <Briefcase className="mr-2 inline-block" color="#009688" /> Workman
          </span>
        </div>

        {/* Study GPT Card */}
        <div
          onClick={() => {
            if (setAgentRun) {
              setAgentRun("Prodigy", " Create a study plan for an intro to Calculus exam");
            }
          }}
          className="btn-primary-red relative flex transform cursor-pointer items-center overflow-hidden rounded-md bg-gradient-to-b from-red-500/70 to-red-900 px-4 py-2 shadow-lg transition-transform hover:scale-105"
        >
          <div className="absolute inset-x-0 top-0 h-1/2 bg-red-400/50 blur-[50px]"></div>
          <span className="relative z-10 font-semibold text-white">
            <Book className="mr-2 inline-block" color="#F44336" /> Prodigy
          </span>
        </div>

        {/* Travel GPT Card */}
        <div
          onClick={() => {
            if (setAgentRun) {
              setAgentRun("Explorer", "Plan a detailed trip to Sydney");
            }
          }}
          className="btn-primary-purple relative flex transform cursor-pointer items-center overflow-hidden rounded-md bg-gradient-to-b from-purple-500/70 to-purple-900 px-4 py-2 shadow-lg transition-transform hover:scale-105"
        >
          <div className="absolute inset-x-0 top-0 h-1/2 bg-purple-400/50 blur-[50px]"></div>
          <span className="relative z-10 font-semibold text-white">
            <Plane className="mr-2 inline-block stroke-purple-200" /> Explorer
          </span>
        </div>
      </div>
    </FadeIn>
  );
};

export default ExampleAgents;
