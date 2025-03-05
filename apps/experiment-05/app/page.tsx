import { CandlestickChart } from "@/components/candlestick-chart";

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto p-4">
      <div className="flex items-center justify-center h-screen">
        <CandlestickChart />
      </div>
    </main>
  );
}
