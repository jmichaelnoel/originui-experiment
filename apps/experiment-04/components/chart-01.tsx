"use client";

import { useId, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Rectangle,
  XAxis,
  YAxis,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const chartData = [
  { time: "12:00 PM", value: 1180008 },
  { time: "12:15 PM", value: 1181007 },
  { time: "12:30 PM", value: 1184000 },
  { time: "12:45 PM", value: 1181008 },
  { time: "1:00 PM", value: 1182003 },
  { time: "1:15 PM", value: 1182007 },
  { time: "1:30 PM", value: 1184000 },
  { time: "1:45 PM", value: 1183003 },
  { time: "2:00 PM", value: 1183005 },
  { time: "2:15 PM", value: 1185001 },
  { time: "2:30 PM", value: 1188007 },
  { time: "2:45 PM", value: 1184000 },
  { time: "3:00 PM", value: 1186002 },
  { time: "3:15 PM", value: 1182005 },
  { time: "3:30 PM", value: 1178005 },
  { time: "3:45 PM", value: 1174005 },
  { time: "4:00 PM", value: 1176005 },
  { time: "4:15 PM", value: 1173008 },
  { time: "4:30 PM", value: 1174005 },
  { time: "4:45 PM", value: 1174000 },
  { time: "5:00 PM", value: 1174006 },
  { time: "5:15 PM", value: 1175004 },
  { time: "5:30 PM", value: 1175008 },
  { time: "5:45 PM", value: 1175005 }, 
  { time: "6:00 PM", value: 1173100 },
  { time: "6:15 PM", value: 1172700 },
  { time: "6:30 PM", value: 1171600 },
  { time: "6:45 PM", value: 1172600 },
  { time: "7:00 PM", value: 1174000 },
  { time: "7:15 PM", value: 1173800 },
  { time: "7:30 PM", value: 1175500 },
  { time: "7:45 PM", value: 1176000 },
  { time: "8:00 PM", value: 1168100 },
  { time: "8:15 PM", value: 1170400 },
  { time: "8:30 PM", value: 1171000 },
  { time: "8:45 PM", value: 1174900 },
  { time: "9:00 PM", value: 1174200 },
  { time: "9:15 PM", value: 1174000 },
  { time: "9:30 PM", value: 1176000 },
  { time: "9:45 PM", value: 1175500 },
  { time: "10:00 PM", value: 1175800 },
  { time: "10:15 PM", value: 1175400 },
  { time: "10:30 PM", value: 1174000 },
  { time: "10:45 PM", value: 1174500 },
  { time: "11:00 PM", value: 1173800 },
  { time: "11:15 PM", value: 1176500 },
  { time: "11:30 PM", value: 1174500 },
  { time: "11:45 PM", value: 1178500 },
  { time: "12:00 AM", value: 1182500 },
  { time: "12:15 AM", value: 1186200 },
  { time: "12:30 AM", value: 1184000 },
  { time: "12:45 AM", value: 1188700 },
  { time: "1:00 AM", value: 1185100 },
  { time: "1:15 AM", value: 1183500 },
  { time: "1:30 AM", value: 1183300 },
  { time: "1:45 AM", value: 1184000 },
  { time: "2:00 AM", value: 1182700 },
  { time: "2:15 AM", value: 1182300 },
  { time: "2:30 AM", value: 1181800 },
  { time: "2:45 AM", value: 1184000 },
  { time: "3:00 AM", value: 1181700 },
  { time: "3:15 AM", value: 1180800 },
  { time: "3:30 AM", value: 1177400 },
  { time: "3:45 AM", value: 1177800 },
  { time: "4:00 AM", value: 1180500 },
  { time: "4:15 AM", value: 1181200 },
  { time: "4:30 AM", value: 1180100 },
  { time: "4:45 AM", value: 1183800 },
  { time: "5:00 AM", value: 1183100 },
  { time: "5:15 AM", value: 1182500 },
  { time: "5:30 AM", value: 1186300 },
  { time: "5:45 AM", value: 1188300 },
  { time: "6:00 AM", value: 1191000 },
  { time: "6:15 AM", value: 1190200 },
  { time: "6:30 AM", value: 1190300 },
  { time: "6:45 AM", value: 1189200 },
  { time: "7:00 AM", value: 1187900 },
  { time: "7:15 AM", value: 1186600 },
  { time: "7:30 AM", value: 1187600 },
  { time: "7:45 AM", value: 1189200 },
  { time: "8:00 AM", value: 1190700 },
  { time: "8:15 AM", value: 1184800 },
  { time: "8:30 AM", value: 1183900 },
  { time: "8:45 AM", value: 1188600 },
  { time: "9:00 AM", value: 1186800 },
  { time: "9:15 AM", value: 1187600 },
  { time: "9:30 AM", value: 1180500 },
  { time: "9:45 AM", value: 1172200 },
  { time: "10:00 AM", value: 1176700 },
  { time: "10:15 AM", value: 1176000 },
  { time: "10:30 AM", value: 1176100 },
  { time: "10:45 AM", value: 1177500 },
  { time: "11:00 AM", value: 1179900 },
  { time: "11:15 AM", value: 1177800 },
  { time: "11:30 AM", value: 1177000 },
  { time: "11:45 AM", value: 1174900 },
  { time: "12:00 PM", value: 1181500 },
  { time: "12:15 PM", value: 1182300 },
  { time: "12:30 PM", value: 1181900 },
  { time: "12:45 PM", value: 1181100 },
  { time: "1:00 PM", value: 1183900 },
  { time: "1:15 PM", value: 1188100 },
  { time: "1:30 PM", value: 1189900 },
  { time: "1:45 PM", value: 1181500 },
  { time: "2:00 PM", value: 1185700 },
  { time: "2:15 PM", value: 1186300 },
  { time: "2:30 PM", value: 1188700 },
  { time: "2:45 PM", value: 1188600 },
  { time: "3:00 PM", value: 1187400 },
  { time: "3:15 PM", value: 1187600 },
  { time: "3:30 PM", value: 1187600 },
  { time: "3:45 PM", value: 1186300 },
  { time: "4:00 PM", value: 1186300 },
  { time: "4:15 PM", value: 1184100 },
  { time: "4:30 PM", value: 1187600 },
  { time: "4:45 PM", value: 1187600 },
  { time: "5:00 PM", value: 1186300 },
  { time: "5:15 PM", value: 1186300 },
  { time: "5:30 PM", value: 1184100 },
  { time: "5:45 PM", value: 1184700 },
  { time: "6:00 PM", value: 1187000 },
  { time: "6:15 PM", value: 1184500 },
  { time: "6:30 PM", value: 1185100 },
  { time: "6:45 PM", value: 1184700 },
  { time: "7:00 PM", value: 1187200 },
  { time: "7:15 PM", value: 1184200 },
  { time: "7:30 PM", value: 1188300 },
  { time: "7:45 PM", value: 1190200 },
  { time: "8:00 PM", value: 1192800 },
  { time: "8:15 PM", value: 1201300 },
  { time: "8:30 PM", value: 1199900 },
  { time: "8:45 PM", value: 1196800 },
  { time: "9:00 PM", value: 1200200 },
  { time: "9:15 PM", value: 1198200 },
  { time: "9:30 PM", value: 1201100 },
  { time: "9:45 PM", value: 1200300 },
  { time: "10:00 PM", value: 1201200 },
  { time: "10:15 PM", value: 1189800 },
  { time: "10:30 PM", value: 1195200 },
  { time: "10:45 PM", value: 1192200 },
  { time: "11:00 PM", value: 1193400 },
  { time: "11:15 PM", value: 1194900 },
  { time: "11:30 PM", value: 1194100 },
  { time: "11:45 PM", value: 1195600 },
  { time: "12:00 AM", value: 1197100 },
  { time: "12:15 AM", value: 1200300 },
  { time: "12:30 AM", value: 1195900 },
  { time: "12:45 AM", value: 1201300 },
  { time: "1:00 AM", value: 1201500 },
  { time: "1:15 AM", value: 1200600 },
  { time: "1:30 AM", value: 1202300 },
  { time: "1:45 AM", value: 1198400 },
  { time: "2:00 AM", value: 1198500 },
  { time: "2:15 AM", value: 1201300 },
  { time: "2:30 AM", value: 1199800 },
  { time: "2:45 AM", value: 1203100 },
  { time: "3:00 AM", value: 1194100 },
  { time: "3:15 AM", value: 1185200 },
  { time: "3:30 AM", value: 1192100 },
  { time: "3:45 AM", value: 1191100 },
  { time: "4:00 AM", value: 1193100 },
  { time: "4:15 AM", value: 1200400 },
  { time: "4:30 AM", value: 1202200 },
  { time: "4:45 AM", value: 1205100 },
  { time: "5:00 AM", value: 1207700 },
  { time: "5:15 AM", value: 1200000 },
  { time: "5:30 AM", value: 1203000 },
  { time: "5:45 AM", value: 1203000 },
  { time: "6:00 AM", value: 1199300 },
  { time: "6:15 AM", value: 1196200 },
  { time: "6:30 AM", value: 1196900 },
  { time: "6:45 AM", value: 1200100 },
  { time: "7:00 AM", value: 1201800 },
  { time: "7:15 AM", value: 1200600 },
  { time: "7:30 AM", value: 1197500 },
  { time: "7:45 AM", value: 1198300 },
  { time: "8:00 AM", value: 1200000 },
  { time: "8:15 AM", value: 1202100 },
  { time: "8:30 AM", value: 1203700 },
  { time: "8:45 AM", value: 1205500 },
  { time: "9:00 AM", value: 1206000 },
  { time: "9:15 AM", value: 1208400 },
  { time: "9:30 AM", value: 1205200 },
  { time: "9:45 AM", value: 1205900 },
  { time: "10:00 AM", value: 1208100 },
  { time: "10:15 AM", value: 1213200 },
  { time: "10:30 AM", value: 1214800 },
  { time: "10:45 AM", value: 1210700 },
  { time: "11:00 AM", value: 1212300 },
  { time: "11:15 AM", value: 1216600 },
  { time: "11:30 AM", value: 1211500 },
  { time: "11:45 AM", value: 1214600 },
  { time: "12:00 PM", value: 1206400 },
  { time: "12:15 PM", value: 1204300 },
  { time: "12:30 PM", value: 1204700 },
  { time: "12:45 PM", value: 1205700 },
  { time: "1:00 PM", value: 1201900 },
  { time: "1:15 PM", value: 1206400 },
  { time: "1:30 PM", value: 1206100 },
];

const chartConfig = {
  value: {
    label: "Value",
    color: "var(--chart-1)",
  },
  projected: {
    label: "Projected",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

const TIME_PERIOD_OPTIONS = ['1h', '1d', '1w', '1m', '1y'];

const ViewOption = ({
  id,
  value,
}: {
  id: string;
  value: string;
}) => {
  return (
    <label className="relative z-10 inline-flex h-full min-w-8 cursor-pointer items-center justify-center px-2 whitespace-nowrap transition-colors select-none uppercase text-foreground has-data-[state=unchecked]:text-muted-foreground/50">
      {value}
      <RadioGroupItem
        id={`${id}-${value}`}
        value={value}
        className="sr-only"
      />
    </label>
  );
};

export function Chart01() {
  const id = useId();
  const [selectedValue, setSelectedValue] = useState("1h");
  const selectedIndex = TIME_PERIOD_OPTIONS.indexOf(selectedValue);

  return (
    <Card className="gap-4">
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-0.5">
            <CardTitle>ArkFi</CardTitle>
            <div className="font-bold text-3xl"><span className="text-xl text-muted-foreground">$</span>1,327,349.19</div>
          </div>
          <div className="bg-muted inline-flex h-7 rounded-lg p-0.5 shrink-0">
            <RadioGroup
              value={selectedValue}
              onValueChange={setSelectedValue}
              className="group text-xs after:border after:border-border after:bg-background has-focus-visible:after:border-ring has-focus-visible:after:ring-ring/50 relative inline-grid grid-cols-[repeat(5,1fr)] items-center gap-0 font-medium after:absolute after:inset-y-0 after:w-1/5 after:rounded-md after:shadow-xs after:transition-[translate,box-shadow] after:duration-300 after:[transition-timing-function:cubic-bezier(0.16,1,0.3,1)] has-focus-visible:after:ring-[3px] [&:after]:translate-x-[calc(var(--selected-index)*100%)]"
              data-state={selectedValue}
              style={{
                '--selected-index': selectedIndex
              } as React.CSSProperties}
            >
              {TIME_PERIOD_OPTIONS.map((value) => (
                <ViewOption 
                  key={value}
                  id={id}
                  value={value}
                />
              ))}
            </RadioGroup>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-72 w-full [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-(--chart-1)/15 [&_.recharts-rectangle.recharts-tooltip-inner-cursor]:fill-white/20"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{ left: -12, right: 12, top: 12 }}
          >
            <CartesianGrid
              vertical={false}
              strokeDasharray="2 2"
              stroke="var(--border)"
            />
            <XAxis
              dataKey="time"
              tickLine={false}
              tickMargin={12}
              stroke="var(--border)"
              minTickGap={24}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              allowDataOverflow={true}
              domain={['dataMin - 1000', 'dataMax + 1000']}
              tickFormatter={(value) => {
                if (value === 0) return "$0";
                return `$${value / 1000}k`;
              }}
            />
            <ChartTooltip />
            <Line
              type="linear"
              dataKey="value"
              stroke="var(--color-value)"
              strokeWidth={2}
              dot={false}
              activeDot={{
                r: 5,
                fill: "var(--chart-1)",
                stroke: "var(--background)",
                strokeWidth: 2,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
