"use client"

import { useId } from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

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
} from "@/components/ui/chart"
import { CustomTooltipContent } from "@/components/charts-extra"
import { Badge } from "@/components/ui/badge";

const chartData = [
  { month: "Jan 2025", actual: 300000, projected: 120000 },
  { month: "Feb 2025", actual: 420000, projected: 180000 },
  { month: "Mar 2025", actual: 500000, projected: 90000 },
  { month: "Apr 2025", actual: 630000, projected: 110000 },
  { month: "May 2025", actual: 710000, projected: 120000 },
  { month: "Jun 2025", actual: 800000, projected: 100000 },
  { month: "Jul 2025", actual: 900000, projected: 140000 },
  { month: "Aug 2025", actual: 1010000, projected: 120000 },
  { month: "Sep 2025", actual: 1090000, projected: 130000 },
  { month: "Oct 2025", actual: 1180000, projected: 110000 },
  { month: "Nov 2025", actual: 1280000, projected: 130000 },
  { month: "Dec 2025", actual: 1380000, projected: 100000 },
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

export function Chart01() {
  const id = useId()

  // Get first and last month with type assertions
  const firstMonth = chartData[0]?.month as string
  const lastMonth = chartData[chartData.length - 1]?.month as string  

  return (
    <Card className="gap-4">
      <CardHeader>
        <div className="space-y-0.5">
          <CardTitle>Monthly Recurring Revenue</CardTitle>
          <div className="flex items-start gap-2">
            <div className="font-semibold text-2xl">$1,439,346</div>
            <Badge className="mt-1.5 bg-emerald-500/24 text-emerald-500 border-none">
              +48.1%
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-auto h-60 w-full [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-[var(--chart-1)]/15">
          <BarChart 
            accessibilityLayer 
            data={chartData} 
            maxBarSize={20}
            margin={{ left: -12, right: 12, top: 12 }}
          >
            <defs>
              <linearGradient id={`${id}-gradient`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--chart-1)" />
                <stop offset="100%" stopColor="var(--chart-2)" />
              </linearGradient>
            </defs>            
            <CartesianGrid vertical={false} strokeDasharray="2 2" stroke="var(--border)" />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={12}
              ticks={[firstMonth, lastMonth]}
              stroke="var(--border)"
            />
            <YAxis 
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => value === 0 ? "$0" : `$${(value / 1000000).toFixed(1)}M`}
            />
            <ChartTooltip
              content={
                <CustomTooltipContent
                  colorMap={{
                    actual: "var(--chart-1)",
                    projected: "var(--chart-3)"
                  }}
                  labelMap={{
                    actual: "Actual",
                    projected: "Projected"
                  }}
                  dataKeys={["actual", "projected"]}
                  valueFormatter={(value) => `$${value.toLocaleString()}`}
                />
              }
            />
            <Bar
              dataKey="actual"
              fill={`url(#${id}-gradient)`}
              stackId="a"
            />             
            <Bar
              dataKey="projected"
              fill="var(--color-projected)"
              stackId="a"
            />           
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
