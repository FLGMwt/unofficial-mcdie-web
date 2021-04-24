import ReactFlow from "react-flow-renderer";
import uuid from "uuid-random";

enum FlowNodeTypes {
  die = "die",
  compareHistogram = "compareHistogram",
}

type Position = { x: number; y: number };
type FlowNode<T, U = undefined> = {
  id: string;
  type: T;
  data: U;
  position: { x: number; y: number };
};
type DieNode = FlowNode<
  FlowNodeTypes.die,
  {
    label: string;
    faceCount: number;
  }
>;

type CompareHistogramNode = FlowNode<
  FlowNodeTypes.compareHistogram,
  {
    label: string;
  }
>;

const baseNode = <T extends FlowNodeTypes>(
  type: FlowNodeTypes,
  position: Position
) => ({
  id: uuid(),
  // without generic + casting, `type` is too open as the enum itself
  // instead of refined as the specific type
  type: type as T,
  position,
  data: undefined,
});

const dieNode = (position: Position, faceCount = 6): DieNode => ({
  ...baseNode(FlowNodeTypes.die, position),
  data: { label: "Die", faceCount },
});

const compareHistogramNode = (position: Position): CompareHistogramNode => ({
  ...baseNode(FlowNodeTypes.compareHistogram, position),
  data: { label: "Compare Histogram" },
});

type Edge = {
  id: string;
  source: string;
  target: string;
  animated?: boolean;
};

const edge = (source: string, target: string): Edge => ({
  id: uuid(),
  source,
  target,
  animated: true,
});

const getStaticElements = () => {
  const dieNode1 = dieNode({ x: 250, y: 25 });
  const dieNode2 = dieNode({ x: 100, y: 125 });

  const histogramNode = compareHistogramNode({ x: 250, y: 250 });

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

const LogicContainer = ({
  renderNodeGraph,
  renderGraphPanel,
}: {
  renderNodeGraph: (element: JSX.Element) => JSX.Element;
  renderGraphPanel: (element: JSX.Element) => JSX.Element;
}) => {
  return (
    <>
      {renderNodeGraph(<ReactFlow elements={elements} />)}
      {renderGraphPanel(<>TODO: graph</>)}
    </>
  );
};

export default LogicContainer;
