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
} from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";
import { CustomTooltipContent } from "@/components/charts-extra";
import { Card } from "@/components/ui/card";

const data = [
  // February 2023
  {
    date: '2023-02-01',
    openClose: [22.86, 24.39],
    high: 24.95,
    low: 22.36,
  },
  {
    date: '2023-02-02',
    openClose: [25.96, 26.91],
    high: 27.45,
    low: 25.75,
  },
  {
    date: '2023-02-03',
    openClose: [25.21, 25.52],
    high: 27.14,
    low: 25.11,
  },
  {
    date: '2023-02-06',
    openClose: [24.85, 24.87],
    high: 25.45,
    low: 24.52,
  },
  {
    date: '2023-02-07',
    openClose: [24.83, 26.41],
    high: 26.69,
    low: 24.54,
  },
  {
    date: '2023-02-08',
    openClose: [26.05, 24.99],
    high: 26.3,
    low: 24.81,
  },
  {
    date: '2023-02-09',
    openClose: [25.10, 26.22],
    high: 26.40,
    low: 24.98,
  },
  {
    date: '2023-02-10',
    openClose: [26.22, 25.75],
    high: 26.55,
    low: 25.65,
  },
  {
    date: '2023-02-13',
    openClose: [25.75, 27.11],
    high: 27.25,
    low: 25.70,
  },
  {
    date: '2023-02-14',
    openClose: [27.11, 27.98],
    high: 28.15,
    low: 26.85,
  },
  {
    date: '2023-02-15',
    openClose: [27.98, 27.45],
    high: 28.25,
    low: 27.30,
  },
  {
    date: '2023-02-16',
    openClose: [27.45, 28.10],
    high: 28.30,
    low: 27.20,
  },
  {
    date: '2023-02-17',
    openClose: [28.10, 27.75],
    high: 28.40,
    low: 27.60,
  },
  {
    date: '2023-02-20',
    openClose: [27.75, 28.45],
    high: 28.65,
    low: 27.50,
  },
  {
    date: '2023-02-21',
    openClose: [28.45, 28.15],
    high: 28.75,
    low: 28.00,
  },
  {
    date: '2023-02-22',
    openClose: [28.15, 29.05],
    high: 29.25,
    low: 28.05,
  },
  {
    date: '2023-02-23',
    openClose: [29.05, 28.75],
    high: 29.40,
    low: 28.60,
  },
  {
    date: '2023-02-24',
    openClose: [28.75, 29.55],
    high: 29.70,
    low: 28.65,
  },
  {
    date: '2023-02-27',
    openClose: [29.55, 29.15],
    high: 29.80,
    low: 29.00,
  },
  {
    date: '2023-02-28',
    openClose: [29.15, 30.05],
    high: 30.25,
    low: 29.10,
  },
  
  // March 2023
  {
    date: '2023-03-01',
    openClose: [30.05, 29.75],
    high: 30.45,
    low: 29.55,
  },
  {
    date: '2023-03-02',
    openClose: [29.75, 30.25],
    high: 30.65,
    low: 29.45,
  },
  {
    date: '2023-03-03',
    openClose: [30.25, 29.85],
    high: 30.45,
    low: 29.65,
  },
  {
    date: '2023-03-06',
    openClose: [29.85, 30.55],
    high: 30.75,
    low: 29.75,
  },
  {
    date: '2023-03-07',
    openClose: [30.55, 30.15],
    high: 30.85,
    low: 30.05,
  },
  {
    date: '2023-03-08',
    openClose: [30.15, 31.25],
    high: 31.45,
    low: 30.05,
  },
  {
    date: '2023-03-09',
    openClose: [31.25, 30.85],
    high: 31.55,
    low: 30.65,
  },
  {
    date: '2023-03-10',
    openClose: [30.85, 29.95],
    high: 31.05,
    low: 29.75,
  },
  {
    date: '2023-03-13',
    openClose: [29.95, 30.45],
    high: 30.65,
    low: 29.85,
  },
  {
    date: '2023-03-14',
    openClose: [30.45, 31.15],
    high: 31.35,
    low: 30.25,
  },
  {
    date: '2023-03-15',
    openClose: [31.15, 30.75],
    high: 31.45,
    low: 30.55,
  },
  {
    date: '2023-03-16',
    openClose: [30.75, 31.85],
    high: 32.05,
    low: 30.65,
  },
  {
    date: '2023-03-17',
    openClose: [31.85, 32.45],
    high: 32.75,
    low: 31.65,
  },
  {
    date: '2023-03-20',
    openClose: [32.45, 31.95],
    high: 32.65,
    low: 31.75,
  },
  
  // April 2023
  {
    date: '2023-04-03',
    openClose: [31.95, 32.85],
    high: 33.15,
    low: 31.75,
  },
  {
    date: '2023-04-04',
    openClose: [32.85, 33.45],
    high: 33.75,
    low: 32.65,
  },
  {
    date: '2023-04-05',
    openClose: [33.45, 32.95],
    high: 33.65,
    low: 32.75,
  },
  {
    date: '2023-04-06',
    openClose: [32.95, 33.85],
    high: 34.15,
    low: 32.75,
  },
  {
    date: '2023-04-07',
    openClose: [33.85, 34.45],
    high: 34.75,
    low: 33.65,
  },
  {
    date: '2023-04-10',
    openClose: [34.45, 33.95],
    high: 34.65,
    low: 33.75,
  },
  {
    date: '2023-04-11',
    openClose: [33.95, 34.85],
    high: 35.15,
    low: 33.75,
  },
  {
    date: '2023-04-12',
    openClose: [34.85, 35.45],
    high: 35.75,
    low: 34.65,
  },
  {
    date: '2023-04-13',
    openClose: [35.45, 34.95],
    high: 35.65,
    low: 34.75,
  },
  {
    date: '2023-04-14',
    openClose: [34.95, 35.85],
    high: 36.15,
    low: 34.75,
  },
  {
    date: '2023-04-17',
    openClose: [35.85, 36.45],
    high: 36.75,
    low: 35.65,
  },
  {
    date: '2023-04-18',
    openClose: [36.45, 35.95],
    high: 36.65,
    low: 35.75,
  },
  {
    date: '2023-04-19',
    openClose: [35.95, 36.85],
    high: 37.15,
    low: 35.75,
  },
  {
    date: '2023-04-20',
    openClose: [36.85, 37.45],
    high: 37.75,
    low: 36.65,
  },
  {
    date: '2023-04-21',
    openClose: [37.45, 36.95],
    high: 37.65,
    low: 36.75,
  },
  {
    date: '2023-04-24',
    openClose: [36.95, 37.85],
    high: 38.15,
    low: 36.75,
  },
  {
    date: '2023-04-25',
    openClose: [37.85, 38.45],
    high: 38.75,
    low: 37.65,
  },
  {
    date: '2023-04-26',
    openClose: [38.45, 37.95],
    high: 38.65,
    low: 37.75,
  },
  {
    date: '2023-04-27',
    openClose: [37.95, 38.85],
    high: 39.15,
    low: 37.75,
  },
  {
    date: '2023-04-28',
    openClose: [38.85, 39.45],
    high: 39.75,
    low: 38.65,
  }
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
        <p className="label">{payload[0].payload.date}</p>
        <p className="label">{`high : ${payload[0].payload.high}`}</p>
        <p className="label">{`low : ${payload[0].payload.low}`}</p>
        <p className="label">{`open : ${payload[0].payload.openClose[0]}`}</p>
        <p className="label">{`close : ${payload[0].payload.openClose[1]}`}</p>
      </div>
    );
  }

  return null;
};

function StockPriceChart() {

    const minValue = data.reduce((minValue: number | null, { low, openClose: [open, close] }) => {
      const currentMin = Math.min(low ?? 0, open ?? 0, close ?? 0);
      return minValue === null || currentMin < minValue ? currentMin : minValue;
    }, null as number | null);
    const maxValue = data.reduce((maxValue: number, { high, openClose: [open, close] }) => {
      const currentMax = Math.max(high ?? 0, open ?? 0, close ?? 0);
      return maxValue === null || currentMax > maxValue ? currentMax : maxValue;
    }, minValue || 0);

    return (
      <Card>
        <ChartContainer config={chartConfig} className="aspect-auto h-60 w-full [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-[var(--chart-1)]/15">
          <BarChart data={data} maxBarSize={20}
              margin={{ left: -12, right: 12, top: 12 }}>
            <XAxis dataKey="date" tickLine={false} stroke="var(--border)" />
            <YAxis domain={[minValue ?? 0, maxValue]} tickLine={false} axisLine={false} />
            {/* @ts-expect-error custom components do not have a good type support */}
            <ChartTooltip content={<CustomTooltip />} />          
            {/* @ts-expect-error custom components do not have a good type support */}
            <Bar accessibilityLayer dataKey="openClose" fill="#8884d8" shape={<Candlestick />}>
              {data.map(({ date }: any) => (
                <Cell key={`cell-${date}`} />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </Card>
    );
}

export { StockPriceChart };