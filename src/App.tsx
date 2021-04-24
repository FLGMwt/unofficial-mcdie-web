import NodeTest from "./NodeTest";

const App = () => {
  return (
    <div
      style={{
        backgroundColor: "pink",
        position: "absolute",
        top: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
        display: "flex",
      }}
    >
      <div style={{ flex: 3 }}>
        <NodeTest />
      </div>
      <div style={{ flex: 2, backgroundColor: "blue" }}>TODO: graph</div>
    </div>
  );
};

export default App;
