import React from "react";
import { useState } from "react";
import {
  getIncomers as getIncomersGivenElements,
  useStoreState,
} from "react-flow-renderer";
import CompareHistogram from "./Charts/CompareHistogram";
import { DieNode, FlowEdge, FlowNode, FlowNodeTypes } from "./flowHelpers";

const roll = (faceCount: number) => Math.ceil(Math.random() * faceCount);

// TODO: extract to web worker whenever this does enough to matter
const processOutputNodes = ({
  nodes,
  edges,
}: {
  nodes: FlowNode[];
  edges: FlowEdge[];
}) => {
  const elements = [...nodes, ...edges];
  const getIncomers = (node: FlowNode) =>
    getIncomersGivenElements(node, elements);

  const compareHistogram = nodes.find(
    (node) => node.type === FlowNodeTypes.compareHistogram
  );
  const incomingDiceNodes = getIncomers(compareHistogram!) as DieNode[];
  const leftDie = incomingDiceNodes[0];
  const rightDie = incomingDiceNodes[1];

  const compareResults = [];
  for (let index = 0; index < 10000; index++) {
    const left = roll(leftDie.data.faceCount);
    const right = roll(rightDie.data.faceCount);

    let compareResult = "tie";
    if (left > right) {
      compareResult = "left";
    }
    if (right > left) {
      compareResult = "right";
    }
    compareResults.push(compareResult);
  }
  return compareResults;
};

const Sidebar = React.memo(() => {
  const state = useStoreState(({ nodes, edges }) => ({
    nodes: nodes as FlowNode[],
    edges: edges as FlowEdge[],
  }));
  const [results, setResults] = useState<string[] | undefined>(undefined);

  const execute = () => {
    setResults(processOutputNodes(state));
  };

  return (
    <div>
      <button onClick={execute}>Execute</button>
      {results && (
        <div style={{ height: 400 }}>
          <CompareHistogram data={results} />
        </div>
      )}
    </div>
  );
});

export default Sidebar;
