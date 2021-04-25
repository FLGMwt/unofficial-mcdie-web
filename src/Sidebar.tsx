import React from "react";
import { useState } from "react";
import {
  FlowElement,
  getIncomers as getIncomersGivenElements,
} from "react-flow-renderer";
import CompareHistogram from "./Charts/CompareHistogram";
import { DieNode, FlowNode, FlowNodeTypes } from "./flowHelpers";

const roll = (faceCount: number) => Math.ceil(Math.random() * faceCount);

// TODO: extract to web worker whenever this does enough to matter
const processOutputNodes = (elements: FlowElement[]) => {
  const getIncomers = (node: FlowNode) =>
    getIncomersGivenElements(node, elements);

  const compareHistogram = elements.find(
    (element) => element.type === FlowNodeTypes.compareHistogram
  ) as FlowNode;
  const incomingDiceNodes = getIncomers(compareHistogram!) as DieNode[];
  const leftDieFaceCount = incomingDiceNodes[0].data.faceCount;
  const leftBinName = `A: d${leftDieFaceCount}`;
  const rightDieFaceCount = incomingDiceNodes[1].data.faceCount;
  const rightBinName = `B: d${rightDieFaceCount}`;

  const results = [];
  for (let index = 0; index < 10000; index++) {
    const left = roll(leftDieFaceCount);
    const right = roll(rightDieFaceCount);

    let compareResult = "tie";
    if (left > right) {
      compareResult = leftBinName;
    }
    if (right > left) {
      compareResult = rightBinName;
    }
    results.push(compareResult);
  }
  return { results, bins: [leftBinName, "tie", rightBinName] };
};

const Sidebar = React.memo(
  ({ getElements }: { getElements: () => FlowElement[] }) => {
    const [executionResult, setExecutionResult] = useState<
      { results: string[]; bins: string[] } | undefined
    >(undefined);

    const execute = () => {
      setExecutionResult(processOutputNodes(getElements()));
    };

    return (
      <div style={{ display: "flex", height: "100%", flexDirection: "column" }}>
        <div style={{ flexGrow: 1 }}>
          <div style={{ width: "100%", display: "flex" }}>
            <button
              onClick={execute}
              style={{
                padding: 10,
                borderRadius: 3,
                width: "100%",
                fontSize: 12,
                color: "white",
                margin: 16,
                backgroundColor: "#4281A4",
                textAlign: "center",
                borderWidth: 1,
                borderStyle: "solid",
              }}
            >
              Execute
            </button>
          </div>
          {executionResult && (
            <div style={{ height: 400 }}>
              <CompareHistogram
                data={executionResult.results}
                bins={executionResult.bins}
              />
            </div>
          )}
        </div>
        <div
          style={{
            backgroundColor: "lightgray",
            textAlign: "center",
            padding: 16,
          }}
        >
          Inspired by{" "}
          <a href="https://gengelstein.itch.io/mcdie">McDie by gengelstein</a>
        </div>
      </div>
    );
  }
);

export default Sidebar;
