"use client";

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Cell,
  Rectangle,
  CartesianGrid,
  ReferenceLine,
} from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";
import { CustomTooltipContent } from "@/components/charts-extra";
import UsdSymbol from "@/app/usd.svg";
import EuroSymbol from "@/app/eur.svg";

const data = [
  // November 2024
  { date: '2024-11-01', openClose: [0.9188, 0.9201], high: 0.9232, low: 0.9170 },
  { date: '2024-11-04', openClose: [0.9193, 0.9181], high: 0.9200, low: 0.9162 },
  { date: '2024-11-05', openClose: [0.9193, 0.9171], high: 0.9197, low: 0.9144 },
  { date: '2024-11-06', openClose: [0.9149, 0.9252], high: 0.9361, low: 0.9144 },
  { date: '2024-11-07', openClose: [0.9320, 0.9286], high: 0.9334, low: 0.9238 },
  { date: '2024-11-08', openClose: [0.9257, 0.9305], high: 0.9357, low: 0.9254 },
  { date: '2024-11-11', openClose: [0.9339, 0.9365], high: 0.9409, low: 0.9322 },
  { date: '2024-11-12', openClose: [0.9384, 0.9408], high: 0.9438, low: 0.9378 },
  { date: '2024-11-13', openClose: [0.9413, 0.9430], high: 0.9473, low: 0.9388 },
  { date: '2024-11-14', openClose: [0.9467, 0.9488], high: 0.9526, low: 0.9450 },
  { date: '2024-11-15', openClose: [0.9497, 0.9475], high: 0.9509, low: 0.9441 },
  { date: '2024-11-18', openClose: [0.9497, 0.9462], high: 0.9497, low: 0.9428 },
  { date: '2024-11-19', openClose: [0.9435, 0.9467], high: 0.9501, low: 0.9433 },
  { date: '2024-11-20', openClose: [0.9438, 0.9471], high: 0.9517, low: 0.9425 },
  { date: '2024-11-21', openClose: [0.9484, 0.9516], high: 0.9558, low: 0.9474 },
  { date: '2024-11-22', openClose: [0.9547, 0.9601], high: 0.9677, low: 0.9526 },
  { date: '2024-11-25', openClose: [0.9542, 0.9533], high: 0.9570, low: 0.9497 },
  { date: '2024-11-26', openClose: [0.9528, 0.9537], high: 0.9592, low: 0.9483 },
  { date: '2024-11-27', openClose: [0.9534, 0.9496], high: 0.9547, low: 0.9445 },
  { date: '2024-11-28', openClose: [0.9464, 0.9480], high: 0.9499, low: 0.9461 },
  { date: '2024-11-29', openClose: [0.9474, 0.9462], high: 0.9486, low: 0.9437 },

  // December 2024
  { date: '2024-12-02', openClose: [0.9454, 0.9507], high: 0.9559, low: 0.9454 },
  { date: '2024-12-03', openClose: [0.9525, 0.9517], high: 0.9541, low: 0.9492 },
  { date: '2024-12-04', openClose: [0.9515, 0.9516], high: 0.9549, low: 0.9484 },
  { date: '2024-12-05', openClose: [0.9514, 0.9480], high: 0.9516, low: 0.9444 },
  { date: '2024-12-06', openClose: [0.9445, 0.9447], high: 0.9485, low: 0.9408 },
  { date: '2024-12-09', openClose: [0.9470, 0.9467], high: 0.9495, low: 0.9439 },
  { date: '2024-12-10', openClose: [0.9476, 0.9494], high: 0.9525, low: 0.9463 },
  { date: '2024-12-11', openClose: [0.9499, 0.9515], high: 0.9542, low: 0.9488 },
  { date: '2024-12-12', openClose: [0.9527, 0.9526], high: 0.9557, low: 0.9496 },
  { date: '2024-12-13', openClose: [0.9554, 0.9534], high: 0.9566, low: 0.9502 },
  { date: '2024-12-16', openClose: [0.9530, 0.9525], high: 0.9547, low: 0.9503 },
  { date: '2024-12-17', openClose: [0.9513, 0.9518], high: 0.9543, low: 0.9493 },
  { date: '2024-12-18', openClose: [0.9532, 0.9590], high: 0.9667, low: 0.9512 },
  { date: '2024-12-19', openClose: [0.9659, 0.9629], high: 0.9664, low: 0.9595 },
  { date: '2024-12-20', openClose: [0.9650, 0.9620], high: 0.9668, low: 0.9572 },
  { date: '2024-12-23', openClose: [0.9583, 0.9601], high: 0.9630, low: 0.9573 },
  { date: '2024-12-24', openClose: [0.9609, 0.9618], high: 0.9630, low: 0.9606 },
  { date: '2024-12-26', openClose: [0.9614, 0.9606], high: 0.9624, low: 0.9588 },
  { date: '2024-12-27', openClose: [0.9594, 0.9593], high: 0.9610, low: 0.9575 },
  { date: '2024-12-30', openClose: [0.9588, 0.9602], high: 0.9642, low: 0.9562 },
  { date: '2024-12-31', openClose: [0.9609, 0.9630], high: 0.9667, low: 0.9593 },

  // January 2025
  { date: '2025-01-02', openClose: [0.9656, 0.9710], high: 0.9781, low: 0.9639 },
  { date: '2025-01-03', openClose: [0.9740, 0.9722], high: 0.9745, low: 0.9699 },
  { date: '2025-01-06', openClose: [0.9704, 0.9648], high: 0.9713, low: 0.9582 },
  { date: '2025-01-07', openClose: [0.9624, 0.9627], high: 0.9671, low: 0.9584 },
  { date: '2025-01-08', openClose: [0.9671, 0.9694], high: 0.9733, low: 0.9655 },
  { date: '2025-01-09', openClose: [0.9691, 0.9706], high: 0.9724, low: 0.9689 },
  { date: '2025-01-10', openClose: [0.9709, 0.9743], high: 0.9789, low: 0.9698 },
  { date: '2025-01-13', openClose: [0.9768, 0.9791], high: 0.9826, low: 0.9756 },
  { date: '2025-01-14', openClose: [0.9762, 0.9734], high: 0.9767, low: 0.9701 },
  { date: '2025-01-15', openClose: [0.9701, 0.9703], high: 0.9747, low: 0.9659 },
  { date: '2025-01-16', openClose: [0.9718, 0.9720], high: 0.9745, low: 0.9695 },
  { date: '2025-01-17', openClose: [0.9707, 0.9711], high: 0.9741, low: 0.9681 },
  { date: '2025-01-20', openClose: [0.9725, 0.9662], high: 0.9740, low: 0.9585 },
  { date: '2025-01-21', openClose: [0.9600, 0.9626], high: 0.9669, low: 0.9583 },
  { date: '2025-01-22', openClose: [0.9590, 0.9592], high: 0.9621, low: 0.9563 },
  { date: '2025-01-23', openClose: [0.9606, 0.9610], high: 0.9640, low: 0.9580 },
  { date: '2025-01-24', openClose: [0.9601, 0.9554], high: 0.9604, low: 0.9505 },
  { date: '2025-01-27', openClose: [0.9541, 0.9530], high: 0.9565, low: 0.9494 },
  { date: '2025-01-28', openClose: [0.9531, 0.9566], high: 0.9603, low: 0.9529 },
  { date: '2025-01-29', openClose: [0.9587, 0.9603], high: 0.9631, low: 0.9575 },
  { date: '2025-01-30', openClose: [0.9596, 0.9591], high: 0.9628, low: 0.9553 },
  { date: '2025-01-31', openClose: [0.9623, 0.9652], high: 0.9661, low: 0.9585 },

  // February 2025
  { date: '2025-02-03', openClose: [0.9775, 0.9729], high: 0.9796, low: 0.9662 },
  { date: '2025-02-04', openClose: [0.9667, 0.9681], high: 0.9735, low: 0.9627 },
  { date: '2025-02-05', openClose: [0.9635, 0.9610], high: 0.9643, low: 0.9576 },
  { date: '2025-02-06', openClose: [0.9612, 0.9635], high: 0.9659, low: 0.9610 },
  { date: '2025-02-07', openClose: [0.9631, 0.9655], high: 0.9702, low: 0.9607 },
  { date: '2025-02-10', openClose: [0.9691, 0.9700], high: 0.9726, low: 0.9675 },
  { date: '2025-02-11', openClose: [0.9702, 0.9674], high: 0.9716, low: 0.9632 },
  { date: '2025-02-12', openClose: [0.9651, 0.9641], high: 0.9693, low: 0.9589 },
  { date: '2025-02-13', openClose: [0.9631, 0.9597], high: 0.9640, low: 0.9554 },
  { date: '2025-02-14', openClose: [0.9555, 0.9541], high: 0.9572, low: 0.9511 },
  { date: '2025-02-17', openClose: [0.9540, 0.9536], high: 0.9554, low: 0.9518 },
  { date: '2025-02-18', openClose: [0.9539, 0.9560], high: 0.9583, low: 0.9536 },
  { date: '2025-02-19', openClose: [0.9573, 0.9587], high: 0.9615, low: 0.9559 },
  { date: '2025-02-20', openClose: [0.9594, 0.9559], high: 0.9598, low: 0.9521 },
  { date: '2025-02-21', openClose: [0.9523, 0.9545], high: 0.9570, low: 0.9519 },
  { date: '2025-02-24', openClose: [0.9541, 0.9533], high: 0.9567, low: 0.9498 },
  { date: '2025-02-25', openClose: [0.9553, 0.9535], high: 0.9563, low: 0.9507 },
  { date: '2025-02-26', openClose: [0.9510, 0.9522], high: 0.9546, low: 0.9499 },
  { date: '2025-02-27', openClose: [0.9538, 0.9574], high: 0.9618, low: 0.9531 },
  { date: '2025-02-28', openClose: [0.9617, 0.9625], high: 0.9653, low: 0.9597 }
];

const chartConfig = {
  openClose: {
    label: "Price",
    color: "var(--chart-1)",
  },
  high: {
    label: "High",
    color: "var(--chart-2)",
  },
  low: {
    label: "Low",
    color: "var(--chart-3)",
  }
} satisfies ChartConfig;

const Candlestick = (props: {
  x: number;
  y: number;
  width: number;
  height: number;
  low: number;
  high: number;
  openClose: [number, number];
}) => {
  const {
    x,
    y,
    width,
    height,
    low,
    high,
    openClose: [open, close],
  } = props;
  const isGrowing = open < close;
  const ratio = Math.abs(height / (open - close));

  return (
    <g>
      <path
        className={`${isGrowing ? "fill-emerald-500" : "fill-rose-500"}`}
        d={`
            M ${x},${y}
            L ${x},${y + height}
            L ${x + width},${y + height}
            L ${x + width},${y}
            L ${x},${y}
          `}
      />
      <g className={`${isGrowing ? "stroke-emerald-500" : "stroke-rose-500"}`} strokeWidth="1">
        {/* bottom line */}
        {isGrowing ? (
          <path
            d={`
                M ${x + width / 2}, ${y + height}
                v ${(open - low) * ratio}
              `}
          />
        ) : (
          <path
            d={`
                M ${x + width / 2}, ${y}
                v ${(close - low) * ratio}
              `}
          />
        )}
        {/* top line */}
        {isGrowing ? (
          <path
            d={`
                M ${x + width / 2}, ${y}
                v ${(close - high) * ratio}
              `}
          />
        ) : (
          <path
            d={`
                M ${x + width / 2}, ${y + height}
                v ${(open - high) * ratio}
              `}
          />
        )}
      </g>
    </g>
  );
};

const CustomTooltip = ({ active, payload }: { active: boolean; payload: Record<string, any> }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-popover text-popover-foreground grid min-w-32 items-start gap-1.5 rounded-lg border px-3 py-1.5 text-xs">
        <p className="font-medium">{new Date(payload[0].payload.date).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</p>
        <p className="text-muted-foreground">Open: <span className="text-foreground font-medium">{payload[0].payload.openClose[0]}</span></p>
        <p className="text-muted-foreground">High: <span className="text-foreground font-medium">{payload[0].payload.high}</span></p>
        <p className="text-muted-foreground">Low: <span className="text-foreground font-medium">{payload[0].payload.low}</span></p>
        <p className="text-muted-foreground">Close: <span className="text-foreground font-medium">{payload[0].payload.openClose[1]}</span></p>
      </div>
    );
  }

  return null;
};

function CandlestickChart() {
  const minValue = data.reduce((minValue: number | null, { low, openClose: [open, close] }) => {
    const currentMin = Math.min(low ?? 0, open ?? 0, close ?? 0);
    return minValue === null || currentMin < minValue ? currentMin : minValue;
  }, null as number | null);
  const maxValue = data.reduce((maxValue: number, { high, openClose: [open, close] }) => {
    const currentMax = Math.max(high ?? 0, open ?? 0, close ?? 0);
    return maxValue === null || currentMax > maxValue ? currentMax : maxValue;
  }, minValue || 0);

  // Format date to "Jan '25" style
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear().toString().slice(2);
    return `${month} '${year}`;
  };

  // Custom tick formatter to show each month only once
  const customTickFormatter = (value: string, index: number) => {
    const currentDate = new Date(value);
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // For the first item, always show the month
    if (index === 0) return formatDate(value);

    // Get previous date safely
    const prevItem = data[index - 1];
    if (!prevItem) return formatDate(value);

    const prevDate = new Date(prevItem.date);
    const prevMonth = prevDate.getMonth();
    const prevYear = prevDate.getFullYear();

    // Only show the month if it's different from the previous one
    if (currentMonth !== prevMonth || currentYear !== prevYear) {
      return formatDate(value);
    }

    return '';
  };

  // Get the most recent day's close value
  const mostRecentData = data[data.length - 1];
  const mostRecentClose = mostRecentData ? mostRecentData.openClose[1] : null;
  
  // Add this line to define isGrowing
  const isGrowing = mostRecentData && mostRecentData.openClose && mostRecentData.openClose[1] !== undefined && mostRecentData.openClose[0] !== undefined 
    ? mostRecentData.openClose[1] > mostRecentData.openClose[0] 
    : undefined;

  return (
    <div className="w-full">
      <div className="flex items-start gap-2 px-5">
        <div className="flex items-center mt-0.5 gap-2">
          <img src={UsdSymbol.src} alt="USD" className="size-4 inline-flex" />
          <img src={EuroSymbol.src} alt="EUR" className="size-4 inline-flex" />
        </div>
        <div className="text-sm">
          <span>
            U.S. Dollar <span className="text-muted-foreground/80">/</span> Euro <span className="text-muted-foreground/80">·</span> 1D <span className="text-muted-foreground/80">·</span> ICE
          </span>
          <span className="ms-8 relative inline-flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400"></span>
          </span>
          <span className="ms-4 text-xs">
            <span className="text-muted-foreground">O:</span><span>{mostRecentData?.openClose[0]?.toFixed(4) || "N/A"}</span>{" "}
            <span className="text-muted-foreground">H:</span><span>{mostRecentData?.high?.toFixed(4) || "N/A"}</span>{" "}
            <span className="text-muted-foreground">L:</span><span>{mostRecentData?.low?.toFixed(4) || "N/A"}</span>{" "}
            <span className="text-muted-foreground">C:</span><span>{mostRecentData?.openClose[1]?.toFixed(4) || "N/A"}</span>
          </span>
        </div>
      </div>
      <ChartContainer config={chartConfig} className="aspect-auto h-120 w-full [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-zinc-950/5">
        <BarChart data={data} maxBarSize={20}
          margin={{ left: 20, right: 20, top: 20, bottom: 20 }}>
          <CartesianGrid
            vertical={false}
            stroke="var(--border)"
            strokeWidth={1}
          />
          <XAxis
            dataKey="date" 
            tickLine={false} 
            stroke="var(--border)" 
            tickFormatter={customTickFormatter}
            interval={0}
            minTickGap={5}
            tickMargin={12}
          />
          <YAxis
            domain={[minValue ?? 0, maxValue]}
            tickCount={7}
            tickLine={false}
            stroke="var(--border)"
            orientation="right"
            tickFormatter={(value) => value.toFixed(4)}
          />
          
          {/* Reference line for most recent close value */}
          {mostRecentClose && (
            <ReferenceLine 
              y={mostRecentClose} 
              stroke="var(--muted-foreground)" 
              opacity={0.7}
              strokeWidth={1}
              strokeDasharray="2 2"
              label={({ viewBox }) => (
                <g transform={`translate(${viewBox.x + viewBox.width + 5},${viewBox.y})`}>
                  <rect
                    x={-2}
                    y={-10} 
                    width={50}
                    height={20}
                    fill={isGrowing ? 'var(--color-emerald-500)' : 'var(--color-rose-500)'}
                    rx={4}
                  />
                  <text
                    x={2}
                    y={4}
                    fill="#fff"
                    fontSize={12}
                    fontWeight="500"
                    textAnchor="start"
                  >
                    {mostRecentClose.toFixed(4)}
                  </text>
                </g>
              )}
            />
          )}
          
          {/* @ts-expect-error custom components do not have a good type support */}
          <ChartTooltip content={<CustomTooltip />} />
          {/* @ts-expect-error custom components do not have a good type support */}
          <Bar dataKey="openClose" fill="#8884d8" shape={<Candlestick />}>
            {data.map(({ date }: any) => (
              <Cell key={`cell-${date}`} />
            ))}
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  );
}

export { CandlestickChart };