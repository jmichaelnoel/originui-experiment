import { TooltipProps } from "recharts";

interface CustomTooltipContentProps extends TooltipProps<number, string> {
  mainColor?: string;
  secondaryColor?: string;
  mainDataKey?: string;
  mainLabel?: string;
  secondaryLabel?: string;
}

export function CustomTooltipContent({ 
  active, 
  payload, 
  label,
  mainColor = "var(--chart-1)",
  secondaryColor = "var(--chart-3)",
  mainDataKey = "actual",
  mainLabel = "Actual",
  secondaryLabel = "Projected"
}: CustomTooltipContentProps) {
  if (!active || !payload || !payload.length) {
    return null;
  }
  
  // Sort the payload to ensure main data key comes first
  const sortedPayload = [...payload].sort((a, b) => {
    if (a.dataKey === mainDataKey) return -1;
    if (b.dataKey === mainDataKey) return 1;
    return 0;
  });
  
  return (
    <div className="border-border/50 bg-background grid min-w-32 items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl">
      <div className="font-medium">{label}</div>
      <div className="grid gap-1.5">
        {sortedPayload.map((entry, index) => {
          const name = entry.dataKey as string;
          const value = entry.value as number;
          const isMainSeries = name === mainDataKey;
          
          return (
            <div key={`item-${index}`} className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div 
                  className="size-2 rounded-xs" 
                  style={{ 
                    backgroundColor: isMainSeries ? mainColor : secondaryColor 
                  }}
                />
                <span className="text-muted-foreground">
                  {isMainSeries ? mainLabel : secondaryLabel}
                </span>
              </div>
              <span className="text-foreground font-mono font-medium tabular-nums">
                ${value.toLocaleString()}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}