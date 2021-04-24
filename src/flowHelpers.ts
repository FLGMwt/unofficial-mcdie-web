import uuid from "uuid-random";

export enum FlowNodeTypes {
  die = "die",
  compareHistogram = "compareHistogram",
}

export type NodePosition = { x: number; y: number };

// TODO: just reexport from React Flow?
// we might not be able to since React Flow's
// doesn't refine `data`'s type based on `type`
export type FlowNode = {
  id: string;
  type: FlowNodeTypes;
  position: NodePosition;
};
export type FlowNodeOf<T, U = undefined> = {
  id: string;
  type: T;
  data: U;
  position: NodePosition;
};
export type DieNode = FlowNodeOf<
  FlowNodeTypes.die,
  {
    label: string;
    faceCount: number;
  }
>;

export type CompareHistogramNode = FlowNodeOf<
  FlowNodeTypes.compareHistogram,
  {
    label: string;
  }
>;

export const baseNode = <T extends FlowNodeTypes>(
  type: FlowNodeTypes,
  position: NodePosition
) => ({
  id: uuid(),
  // without generic + casting, `type` is too open as the enum itself
  // instead of refined as the specific type
  type: type as T,
  position,
  data: undefined,
});

export const dieNode = (position: NodePosition, faceCount = 6): DieNode => ({
  ...baseNode(FlowNodeTypes.die, position),
  data: { label: "Die", faceCount },
});

export const compareHistogramNode = (
  position: NodePosition
): CompareHistogramNode => ({
  ...baseNode(FlowNodeTypes.compareHistogram, position),
  data: { label: "Compare Histogram" },
});

// TODO: just reexport from React Flow?
export type FlowEdge = {
  id: string;
  source: string;
  target: string;
  animated?: boolean;
};

export const edge = (source: string, target: string): FlowEdge => ({
  id: uuid(),
  source,
  target,
  animated: true,
});
