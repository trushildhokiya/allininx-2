import React from "react";

import type { GPTModelNames } from "../../types";
import { GPT_35_TURBO_16K, GPT_4 } from "../../types";

export const ChatWindowTitle = ({ model }: { model: GPTModelNames }) => {
  if (model === GPT_4) {
    return (
      <>
        Allinix<span className="text-amber-500">vS</span>
      </>
    );
  }

  if (model === GPT_35_TURBO_16K) {
    return (
      <>
        Agent
        <span className="text-neutral-400">
          vL<span className="text-amber-500">vK</span>
        </span>
      </>
    );
  }

  return (
    <>
      Agent<span className="text-neutral-400">vA</span>
    </>
  );
};
