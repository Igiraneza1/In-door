import React from "react";
import { LegendProps } from "recharts";

type LegendPayloadItem = {
  value?: string | number;
  color?: string;
  type?: string;
  id?: string | number;
};

type ExtendedLegendProps = LegendProps & {
  payload: LegendPayloadItem[];
  hideIcon?: boolean;
};

const ChartLegendContent = React.forwardRef<HTMLDivElement, ExtendedLegendProps>(
  ({ className, payload, verticalAlign = "bottom", hideIcon = false }, ref) => {
    if (!payload || !payload.length) return null;

    return (
      <div
        ref={ref}
        className={`flex items-center justify-center gap-4 ${
          verticalAlign === "top" ? "pb-3" : "pt-3"
        } ${className ?? ""}`}
      >
        {payload.map((item: LegendPayloadItem) => (
          <div key={item.value?.toString()} className="flex items-center gap-1.5">
            {!hideIcon && (
              <div
                className="h-2 w-2 rounded"
                style={{ backgroundColor: item.color }}
              />
            )}
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    );
  }
);

ChartLegendContent.displayName = "ChartLegendContent";
export default ChartLegendContent;
