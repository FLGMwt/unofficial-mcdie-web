import { ReactFlowProvider } from "react-flow-renderer";
import Experiment from "./Experiment";
import Sidebar from "./Sidebar";

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
      <ReactFlowProvider>
        <div style={{ flex: 3, backgroundColor: "pink" }}>
          <Experiment />
        </div>
        <div style={{ flex: 2, backgroundColor: "blue" }}>
          <Sidebar />
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default App;
