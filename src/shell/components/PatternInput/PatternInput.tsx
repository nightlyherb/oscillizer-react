import React, { ChangeEvent } from "react";
import type { Update } from "core/types";
import type { PatternRle } from "./pattern-input-store";

type PatternInputProps = {
  patternRle: PatternRle;
  onUpdate: (_: Update<PatternRle>) => void;
  onAnalyze: () => void;
};

export default function PatternInput({
  patternRle,
  onUpdate,
  onAnalyze: onSubmit,
}: PatternInputProps) {
  const samplePatternRle = "x = 3, y = 3, rule = B3/S23\n" + "3b$3o$3b$!";

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onUpdate(() => e.target.value);
  };

  const onClear = () => {
    onUpdate(() => "");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <textarea
        placeholder={samplePatternRle}
        cols={80}
        value={patternRle}
        onChange={onChange}
        style={{ maxWidth: "100%" }}
      >
        {patternRle}
      </textarea>
      <div>
        <button onClick={onClear}>Clear</button>
        <button onClick={onSubmit}>Analyze</button>
      </div>
    </div>
  );
}
