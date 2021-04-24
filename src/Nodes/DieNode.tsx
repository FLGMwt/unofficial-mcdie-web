import React from "react";

import { Handle, Position } from "react-flow-renderer";
import { DieNode } from "../flowHelpers";
import NodeContainer from "./NodeContainer";

export default React.memo(({ data }: { data: DieNode["data"] }) => {
  return (
    <NodeContainer>
      <div>
        {data.label} |{" "}
        <strong
          onClick={() => {
            const response = prompt("How many faces?");
            if (!response) return;
            const value = parseInt(response);
            if (!value || value < 0) return;
            data.setDieFaceCount(value);
          }}
        >
          d{data.faceCount}
        </strong>
      </div>
      <Handle type="source" position={Position.Right} />
    </NodeContainer>
  );
});
