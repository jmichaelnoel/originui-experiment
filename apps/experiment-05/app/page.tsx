import { Card, CardContent } from "@/components/ui/card";
import { CandlestickChart } from "@/components/candlestick-chart";
import Image from "next/image";
import CoinSelector from "@/components/coin-selector";
import PeriodSelector from "@/components/period-selector";
import Link from "next/link";

export default function Page() {
  return (
    <div className="px-6 py-20 min-h-svh flex flex-col justify-center bg-zinc-100">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Chart area */}
          <div className="flex-1 @container">
            <Card className="shadow-2xl rounded-3xl">
              <CardContent>
                {/* Header */}
                <div className="flex flex-col @xl:flex-row @xl:items-center gap-3 mb-6">
                  {/* Left side */}
                  <div className="flex-1 flex gap-3">
                    {/* Coin symbols */}
                    <div className="mt-0.5 shrink-0">
                      <div className="inline-flex rounded-full border-2 border-card last:-ms-3.5 last:translate-y-3.5">
                        <Image src="https://res.cloudinary.com/dlzlfasou/image/upload/v1742390289/coin-01_tidmpi.svg" width={28} height={28} alt="TRX" />
                      </div>
                      <div className="inline-flex rounded-full border-2 border-card last:-ms-3.5 last:translate-y-3.5">
                        <Image src="https://res.cloudinary.com/dlzlfasou/image/upload/v1742390289/coin-02_a6ineb.svg" width={28} height={28} alt="TOK" />
                      </div>
                    </div>
                    {/* Exchange information */}
                    <div className="flex flex-col gap-0.5">
                      <div className="text-xl font-semibold">TRX <span className="text-muted-foreground">:</span> TOK</div>
                      <div className="text-[13px] text-muted-foreground uppercase font-medium">1 Year <span className="text-muted-foreground/80">·</span> PRC <span className="text-emerald-500">1,970.84 (+4.37%)</span></div>
                    </div>
                  </div>
                  {/* Right side */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <CoinSelector defaultValue="TRX" />
                      <CoinSelector defaultValue="TOK" />
                    </div>
                    <PeriodSelector />
                  </div>
                </div>
                {/* The Chart */}
                <CandlestickChart />
              </CardContent>
            </Card>
          </div>
          {/* Sidebar with links */}
          <aside className="md:-order-1 dark md:w-60 rounded-3xl bg-sidebar text-foreground p-5 flex flex-col gap-4">
            {/* Logo */}
            <div className="mb-4">
              <Link href="/">
                <span className="sr-only">Logo</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="32" fill="none">
                  <path fill="#D4D4D8" d="M13.53 1.641h17.287l-12.71 18.85H.82L13.53 1.64Z" />
                  <path fill="#D4D4D8" fillOpacity=".32" d="m14.286 22.238-4.923 7.3H27.47l12.71-18.85H26.815l-7.787 11.55h-4.743Z" />
                </svg>
              </Link>
            </div>
            {/* Navigation menu */}
            <div className="flex-1">
              <div className="uppercase font-medium text-xs text-muted-foreground/80 mb-2">Live market</div>
              <nav>
                <ul className="text-[13px] font-semibold divide-y divide-sidebar-border">
                  <li>
                    <Link className="flex items-center justify-between gap-2 py-2" href="#">
                      <span>SAP <span className="text-muted-foreground">:</span> TOK</span> <span className="text-emerald-500">12,089</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="flex items-center justify-between gap-2 py-2" href="#">
                      <span>MAP <span className="text-muted-foreground">:</span> TOK</span> <span className="text-emerald-500">88,749</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="flex items-center justify-between gap-2 py-2" href="#">
                      <span>BTK <span className="text-muted-foreground">:</span> TOK</span> <span className="text-rose-500">12,921</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="flex items-center justify-between gap-2 py-2" href="#">
                      <span>WAP <span className="text-muted-foreground">:</span> TOK</span> <span className="text-emerald-500">4,982</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="flex items-center justify-between gap-2 py-2" href="#">
                      <span>LUP <span className="text-muted-foreground">:</span> TOK</span> <span className="text-emerald-500">10,801</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="flex items-center justify-between gap-2 py-2" href="#">
                      <span>SUV <span className="text-muted-foreground">:</span> TOK</span> <span className="text-rose-500">1,047</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="flex items-center justify-between gap-2 py-2" href="#">
                      <span>ARK <span className="text-muted-foreground">:</span> TOK</span> <span className="text-emerald-500">1,994</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="flex justify-end text-muted-foreground hover:text-foreground transition-colors gap-2 py-2" href="#">
                      MORE
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            {/* Market sentiment */}
            <div>
              <div className="uppercase font-medium text-xs text-muted-foreground/80 mb-4">Market sentiment</div>
              <div className="flex items-center text-[13px] font-semibold gap-2 mb-2">
                <div className="text-emerald-500">27%</div>
                <div className="h-1.5 flex items-center gap-1 flex-1" aria-hidden="true">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: '27%' }}></div>
                  <div className="h-full bg-rose-500 rounded-full" style={{ width: '73%' }}></div>
                </div>
                <div className="text-rose-500">73%</div>
              </div>
              <div className="text-[13px] flex justify-between text-muted-foreground/80">
                <div>Bullish</div>
                <div>Bearish</div>
              </div>
            </div>
          </aside>          
        </div>
      </div>
    </div>
  );
}
