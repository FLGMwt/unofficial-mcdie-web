import Experiment from "./Experiment";

const App = () => {
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
      <Experiment
        renderNodeGraph={(nodeGraph: JSX.Element) => (
          <div style={{ flex: 3, backgroundColor: "pink" }}>{nodeGraph}</div>
        )}
        renderGraphPanel={(graphPanel: JSX.Element) => (
          <div style={{ flex: 2, backgroundColor: "blue" }}>{graphPanel}</div>
        )}
      />
    </div>
  );
};

export default App;
