"use client"

import { useId } from "react"
import {
  CartesianGrid,
  Line,
  LineChart,
  Rectangle,
  XAxis,
  YAxis,
} from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Subscriber data for the last 12 months
const chartData = [
  { month: "Jan 2025", actual: 5000, projected: 2000 },
  { month: "Feb 2025", actual: 10000, projected: 8000 },
  { month: "Mar 2025", actual: 15000, projected: 22000 },
  { month: "Apr 2025", actual: 22000, projected: 15000 },
  { month: "May 2025", actual: 20000, projected: 25000 },
  { month: "Jun 2025", actual: 35000, projected: 45000 },
  { month: "Jul 2025", actual: 30000, projected: 25000 },
  { month: "Aug 2025", actual: 60000, projected: 70000 },
  { month: "Sep 2025", actual: 65000, projected: 75000 },
  { month: "Oct 2025", actual: 60000, projected: 80000 },
  { month: "Nov 2025", actual: 70000, projected: 65000 },
  { month: "Dec 2025", actual: 78000, projected: 75000 },
]

const chartConfig = {
  actual: {
    label: "Actual",
    color: "var(--chart-1)",
  },
  projected: {
    label: "Projected",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

function CustomCursor(props: any) {
  const {
    fill, pointerEvents, height, points, className,
  } = props;

  const { x, y } = points[0];
  return (
    <>
    <Rectangle
      x={x - 12}
      y={y}
      fill={fill}
      pointerEvents={pointerEvents}
      width={24}
        height={height}
        points={points}
        className={className}
        type="linear"
      />
    <Rectangle
      x={x - 1}
      y={y}
      fill={fill}
      pointerEvents={pointerEvents}
      width={1}
      height={height}
      points={points}
      className="recharts-tooltip-inner-cursor"
        type="linear"
      />       
    </>
  );
}

export function Chart02() {
  const id = useId()
  const actualSubscribers = 142869
  const growthPercentage = 24.7

  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Subscribers</CardTitle>
        <div className="flex items-center gap-2">
          <div className="font-semibold text-2xl">{actualSubscribers.toLocaleString()}</div>
          <div className="rounded-full bg-emerald-900/60 px-2 py-1 text-xs font-medium text-emerald-400">
            +{growthPercentage}%
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-[var(--chart-1)]"></div>
            <div className="text-muted-foreground">Actual</div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-[var(--chart-3)]"></div>
            <div className="text-muted-foreground">Projected</div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-auto h-48 w-full [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-primary/15 [&_.recharts-rectangle.recharts-tooltip-inner-cursor]:fill-ring">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
          >
            <defs>
              <linearGradient id={`${id}-gradient`} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--chart-2)" />
                <stop offset="100%" stopColor="var(--chart-1)" />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="2 2" stroke="var(--border)" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tickMargin={12}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => {
                if (value === 0) return "$0"
                return `${value / 1000}k`
              }}
              allowDataOverflow={false}
              scale="linear"
              interval="preserveStartEnd"
            />
            <Line
              type="linear"
              dataKey="projected"
              stroke="var(--color-projected)"
              strokeWidth={2}
              dot={false}
              activeDot={false}
            />
            <ChartTooltip
              content={<ChartTooltipContent hideLabel />}
              cursor={<CustomCursor fill="var(--chart-1)" stroke="var(--chart-1)" />}
            />            
            <Line
              type="linear"
              dataKey="actual"
              stroke={`url(#${id}-gradient)`}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 5, fill: "var(--chart-1)", stroke: "var(--background)", strokeWidth: 2 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}