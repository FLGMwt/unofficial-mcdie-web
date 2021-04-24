import React from "react";
import { Histogram, BarSeries, XAxis, YAxis } from "@data-ui/histogram";
import { ParentSize } from "@visx/responsive";

// const data = ["a", "a", "a", "c", "a", "z", "a", "q"];

// TODO: can definitely make this more generic to other types of histograms
// keeping it focused for now
const CompareHistogram = React.memo(
  ({ data, bins }: { data: any[]; bins: string[] }) => {
    return (
      <ParentSize>
        {(parent) => (
          <Histogram
            height={parent.height}
            width={parent.width}
            ariaLabel="My histogram of ..."
            orientation="vertical"
            valueAccessor={(datum: any) => datum}
            binType="categorical"
            binValues={bins}
            renderTooltip={({
              datum,
            }: {
              datum: {
                count: string;
                cumulative: string;
                density: string;
              };
            }) => (
              <div>
                <div>
                  <strong>count </strong>
                  {datum.count}
                </div>
                <div>
                  <strong>cumulative </strong>
                  {datum.cumulative}
                </div>
                <div>
                  <strong>density </strong>
                  {datum.density}
                </div>
              </div>
            )}
          >
            <BarSeries rawData={data} />
            <XAxis />
            <YAxis />
          </Histogram>
        )}
      </ParentSize>
    );
  }
);
export default CompareHistogram;
