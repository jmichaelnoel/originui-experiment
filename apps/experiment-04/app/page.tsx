import { useId } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import UserDropdown from "@/components/user-dropdown"
import { RiSearch2Line } from "@remixicon/react"
import ThemeToggle from "@/components/theme-toggle"
import { Converter } from "@/components/converter"
import { CoinChart } from "@/components/coin-chart"
import { TransactionsTable } from "@/components/transactions-table"

export default function Page() {
  const id = useId()

  return (
    <div className="flex h-svh">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="overflow-auto px-4 md:px-6 lg:px-8">
          <header className="bg-sidebar/90 backdrop-blur-sm sticky top-0 z-9999 -mx-2 px-2">
            <div className="flex shrink-0 items-center gap-2 border-b py-4 w-full max-w-7xl mx-auto">
              <div className="flex-1">
                <div className="relative inline-flex">
                  <Input id={id} className="h-8 ps-9 pe-9 bg-border border-transparent w-fit min-w-65" aria-label="Search" />
                  <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 text-muted-foreground peer-disabled:opacity-50">
                    <RiSearch2Line size={20} aria-hidden="true" />
                  </div>
                  <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-2 text-muted-foreground">
                    <kbd className="inline-flex size-5 max-h-full items-center justify-center rounded bg-background shadow-xs px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70">
                      /
                    </kbd>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <UserDropdown />  
              </div>
            </div>
          </header>
          <div className="flex max-lg:flex-col flex-1 gap-6 py-6 w-full max-w-7xl mx-auto">
            {/* Converter widget */}
            <div className="lg:order-1 lg:w-90">
              <Converter />
            </div> 
            {/* Chart and table */}
            <div className="flex-1 flex flex-col gap-6">
              <CoinChart />
              <TransactionsTable />
            </div>
          </div>

          <div className="grid grid-cols-2 w-48 gap-8 mb-20">
            <div className="size-20 bg-white shadow-2xs rounded"></div>
            <div className="size-20 bg-white rounded shadow-[0_0.5px_0.5px_rgba(0,0,0,0.03),_0_1px_1px_rgba(0,0,0,0.03)]"></div>
            <div className="size-20 bg-white shadow-xs rounded"></div>
            <div className="size-20 bg-white rounded shadow-[0_0.5px_0.5px_rgba(0,0,0,0.03),_0_1px_1px_rgba(0,0,0,0.03),_0_2px_2px_rgba(0,0,0,0.03)]"></div>
            <div className="size-20 bg-white shadow-sm rounded"></div>
            <div className="size-20 bg-white rounded shadow-[0_0.5px_0.5px_rgba(0,0,0,0.04),_0_1px_1px_rgba(0,0,0,0.04),_0_2px_2px_rgba(0,0,0,0.04),_0_3px_3px_rgba(0,0,0,0.04)]"></div>
            <div className="size-20 bg-white shadow rounded"></div>
            <div className="size-20 bg-white rounded"></div>
            <div className="size-20 bg-white shadow-md rounded"></div>
            <div className="size-20 bg-white rounded shadow-[0_1px_1px_rgba(0,0,0,0.05),_0_2px_2px_rgba(0,0,0,0.05),_0_4px_4px_rgba(0,0,0,0.05),_0_6px_6px_rgba(0,0,0,0.05)]"></div>
            <div className="size-20 bg-white shadow-lg rounded"></div>
            <div className="size-20 bg-white rounded shadow-[0_2px_2px_rgba(0,0,0,0.06),_0_4px_4px_rgba(0,0,0,0.06),_0_8px_8px_rgba(0,0,0,0.06),_0_12px_12px_rgba(0,0,0,0.06),_0_15px_15px_rgba(0,0,0,0.06)]"></div>
            <div className="size-20 bg-white shadow-xl rounded"></div>
            <div className="size-20 bg-white rounded shadow-[0_3px_3px_rgba(0,0,0,0.07),_0_8px_8px_rgba(0,0,0,0.07),_0_15px_15px_rgba(0,0,0,0.07),_0_20px_20px_rgba(0,0,0,0.07),_0_25px_25px_rgba(0,0,0,0.07)]"></div>
            <div className="size-20 bg-white shadow-2xl rounded"></div>
            <div className="size-20 bg-white rounded shadow-[0_5px_5px_rgba(0,0,0,0.09),_0_10px_10px_rgba(0,0,0,0.09),_0_20px_20px_rgba(0,0,0,0.09),_0_30px_30px_rgba(0,0,0,0.09),_0_40px_40px_rgba(0,0,0,0.09),_0_50px_50px_rgba(0,0,0,0.09)]"></div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
