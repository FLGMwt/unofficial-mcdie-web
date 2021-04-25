import React, { useEffect, useState } from "react";
import ReactFlow, { Controls, FlowElement } from "react-flow-renderer";
import {
  dieNode,
  compareHistogramNode,
  edge,
  FlowNodeTypes,
} from "./flowHelpers";
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

const FlowGraph = React.memo(
  ({
    setGetElements,
  }: {
    setGetElements: React.Dispatch<
      React.SetStateAction<(() => FlowElement[]) | undefined>
    >;
  }) => {
    const [elements, setElements] = useState([] as FlowElement[]);
    useEffect(() => {
      const makeSetDieFaceCount = (id: string) => (faceCount: number) => {
        setElements((elements) =>
          elements.map((a) => {
            if (a.id === id) {
              return { ...a, data: { ...a.data, faceCount } };
            }
            return a;
          })
        );
      };

      setElements(
        (getStaticElements() as FlowElement[]).map((a) =>
          a?.type === FlowNodeTypes.die
            ? {
                ...a,
                data: { ...a.data, setDieFaceCount: makeSetDieFaceCount(a.id) },
              }
            : a
        )
      );
    }, []);
    if (!elements.length) {
      return null;
    }
    return (
      <ReactFlow
        nodeTypes={nodeTypes}
        elements={elements}
        onLoad={(instance) => {
          instance.fitView();
          console.log({ instance });
          setGetElements(() => instance.getElements);
        }}
      >
        <Controls />
      </ReactFlow>
    );
  }
);

export default FlowGraph;
