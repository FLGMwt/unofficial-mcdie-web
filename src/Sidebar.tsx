import { useState } from "react";
import {
  getIncomers as getIncomersGivenElements,
  useStoreState,
} from "react-flow-renderer";
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

  const results = [];
  const compareHistograms = nodes.filter(
    (node) => node.type === FlowNodeTypes.compareHistogram
  );

  for (const compareHistogram of compareHistograms) {
    const incomingDiceNodes = getIncomers(compareHistogram) as DieNode[];
    const leftDie = incomingDiceNodes[0];
    const rightDie = incomingDiceNodes[1];

    let leftCount = 0;
    let rightCount = 0;
    let tieCount = 0;
    for (let index = 0; index < 10000; index++) {
      const left = roll(leftDie.data.faceCount);
      const right = roll(leftDie.data.faceCount);

      if (left > right) {
        leftCount += 1;
      }
      if (right > left) {
        rightCount += 1;
      }
      if (right === left) {
        tieCount += 1;
      }
    }
    results.push({
      resultType: compareHistogram.type,
      left: { die: { id: leftDie.id, data: leftDie.data }, count: leftCount },
      right: {
        die: { id: rightDie.id, data: rightDie.data },
        count: rightCount,
      },
      tieCount,
    });
  }
  return results;
};

const Sidebar = () => {
  const state = useStoreState(({ nodes, edges }) => ({
    nodes: nodes as FlowNode[],
    edges: edges as FlowEdge[],
  }));
  const [results, setResults] = useState<object[] | undefined>(undefined);

  const execute = () => {
    setResults(processOutputNodes(state));
  };

  return (
    <div>
      <div>TODO: chart</div>
      <button onClick={execute}>Execute</button>
      <div>Results: {results ? JSON.stringify(results) : "None"}</div>
    </div>
  );
};

export default Sidebar;
