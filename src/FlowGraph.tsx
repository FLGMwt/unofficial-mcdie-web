import React from "react";
import ReactFlow from "react-flow-renderer";
import { dieNode, compareHistogramNode, edge } from "./flowHelpers";
import CompareHistogramNode from "./Nodes/CompareHistogramNode";
import DieNode from "./Nodes/DieNode";
const nodeTypes = {
  die: DieNode,
  compareHistogram: CompareHistogramNode,
};

const getStaticElements = () => {
  const dieNode1 = dieNode({ x: 400, y: 200 });
  const dieNode2 = dieNode({ x: 400, y: 400 });

  const histogramNode = compareHistogramNode({ x: 600, y: 300 });

  const die1ToHistogramEdge = edge(dieNode1.id, histogramNode.id);
  const die2ToHistogramEdge = edge(dieNode2.id, histogramNode.id);

  return [
    dieNode1,
    dieNode2,
    histogramNode,
    die1ToHistogramEdge,
    die2ToHistogramEdge,
  ];
};

const elements = getStaticElements();

const FlowGraph = React.memo(() => {
  return <ReactFlow nodeTypes={nodeTypes} elements={elements} />;
});

export default FlowGraph;
