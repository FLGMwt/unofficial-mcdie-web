import React from "react";

import { Handle, Position } from "react-flow-renderer";
import { DieNode } from "../flowHelpers";
import NodeContainer from "./NodeContainer";

export default React.memo(({ data }: { data: DieNode["data"] }) => {
  return (
    <NodeContainer>
      <div>
        {data.label} | Faces: <strong>{data.faceCount}</strong>
      </div>
      <Handle type="source" position={Position.Right} />
    </NodeContainer>
  );
});
