import { AppState, appUpdateOfPatternUpdate } from "app-store";
import { Update } from "core/types";
import React, { useState } from "react";
import { PatternRle } from "shell/components/PatternInput/pattern-input-store";
import PatternInput from "shell/components/PatternInput/PatternInput";

const defaultPatternRle = "x = 3, y = 3, rule = B3/S23\n" + "3b$3o$3b$!";

export default function App() {
  const [appState, setAppState] = useState({
    patternRle: defaultPatternRle,
  } as AppState);

  const onPatternUpdate = (update: Update<PatternRle>) =>
    setAppState(appUpdateOfPatternUpdate(update));

  const onPatternAnalyze = () => setAppState((x) => x);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>The New Oscillizer</h1>
      <PatternInput
        patternRle={appState.patternRle}
        onUpdate={onPatternUpdate}
        onAnalyze={onPatternAnalyze}
      />
      <div style={{ maxWidth: "80vw", border: "1px solid black" }}>
        <pre>
          <code>{appState.patternRle}</code>
        </pre>
      </div>
    </div>
  );
}
