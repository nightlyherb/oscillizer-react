import { Update, updateOf } from "core/types";
import type { PatternRle } from "shell/components/PatternInput/pattern-input-store";

export type AppState = {
  patternRle: PatternRle;
};

export const appUpdateOfPatternUpdate = (update: Update<PatternRle>) =>
  updateOf<AppState>({ patternRle: update });
