import React from "react";

import { Handle, Position } from "react-flow-renderer";
import { CompareHistogramNode } from "../flowHelpers";
import NodeContainer from "./NodeContainer";

export default React.memo(
  ({ data }: { data: CompareHistogramNode["data"] }) => {
    return (
      <NodeContainer>
        <div>{data.label}</div>
        <Handle type="target" position={Position.Left} />
      </NodeContainer>
    );
  }
);
