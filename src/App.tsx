import { ReactFlowProvider } from "react-flow-renderer";
import FlowGraph from "./FlowGraph";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        backgroundColor: "#a9dad9",
      }}
    >
      <ReactFlowProvider>
        <div style={{ flex: 3 }}>
          <FlowGraph />
        </div>
        <div
          style={{
            flex: 2,
            borderLeft: "1px solid black",
            backgroundColor: "#D4B483",
          }}
        >
          <Sidebar />
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default App;
