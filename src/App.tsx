import { useMemo } from "react";
import Experiment from "./Experiment";

const App = () => {
  const props = useMemo(() => {
    return {
      renderNodeGraph: (nodeGraph: React.ReactNode) => (
        <div style={{ flex: 3, backgroundColor: "pink" }}>{nodeGraph}</div>
      ),
      renderGraphPanel: (graphPanel: React.ReactNode) => (
        <div style={{ flex: 2, backgroundColor: "blue" }}>{graphPanel}</div>
      ),
    };
  }, []);
  return (
    <div
      style={{
        backgroundColor: "green",
        position: "absolute",
        top: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
        display: "flex",
      }}
    >
      <Experiment {...props} />
    </div>
  );
};

export default App;
