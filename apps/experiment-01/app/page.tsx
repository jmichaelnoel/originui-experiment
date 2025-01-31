import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import UserDropdown from "@/components/user-dropdown"
import FeedbackDialog from "@/components/feedback-dialog"
import { RiScanLine, RiArrowRightUpLine, RiArrowRightDownLine } from "@remixicon/react"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 md:px-6 lg:px-8">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    <RiScanLine size={22} aria-hidden="true" />
                    <span className="sr-only">Dashboard</span>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Contacts</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex gap-3 ml-auto">
            <FeedbackDialog />
            <UserDropdown />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 lg:gap-6 p-4 lg:py-6 md:px-6 lg:px-8">
          {/* Page intro */}
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1">
              <h1 className="text-2xl font-semibold">Oilà, Larry!</h1>
              <p className="text-sm text-muted-foreground">Here&rsquo;s an overview of your contacts. Manage or create new ones with ease!</p>
            </div>
            <Button className="px-3">Add Contact</Button>
          </div>
          {/* Numbers */}
          <div className="grid grid-cols-2 min-[1200px]:grid-cols-4 border border-border rounded-xl bg-muted/50">
            {/* Connections */}
            <div className="relative p-4 lg:p-5 group before:absolute before:inset-y-8 before:right-0 before:w-px before:bg-gradient-to-b before:from-border/30 before:via-border before:to-border/30 last:before:hidden">
              <div className="relative flex items-center gap-4">
                {/* Arrow ↗|↘ */}
                <RiArrowRightUpLine className="absolute right-0 top-0 opacity-0 group-has-[a:hover]:opacity-100 transition-opacity text-emerald-400" size={20} aria-hidden="true" />
                {/* Icon */}
                <div className="max-[480px]:hidden size-10 shrink-0 rounded-full bg-emerald-600/25 border border-emerald-600 flex items-center justify-center text-emerald-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor">
                    <path d="M9 0v2.013a8.001 8.001 0 1 0 5.905 14.258l1.424 1.422A9.958 9.958 0 0 1 10 19.951c-5.523 0-10-4.478-10-10C0 4.765 3.947.5 9 0Zm10.95 10.95a9.954 9.954 0 0 1-2.207 5.329l-1.423-1.423a7.96 7.96 0 0 0 1.618-3.905h2.013ZM11.002 0c4.724.47 8.48 4.227 8.95 8.95h-2.013a8.004 8.004 0 0 0-6.937-6.937V0Z" />
                  </svg>
                </div>  
                {/* Content */}
                <div>
                  <a href="#" className="font-medium tracking-widest text-xs uppercase text-muted-foreground before:absolute before:inset-0">Connections</a>
                  <div className="text-2xl font-semibold mb-2">427,296</div>
                  <div className="text-xs text-muted-foreground"><span className="text-emerald-500 font-medium">↗ +12%</span> vs last week</div>
                </div>
              </div>
            </div>
            {/* Contacts */}
            <div className="relative p-4 lg:p-5 group before:absolute before:inset-y-8 before:right-0 before:w-px before:bg-gradient-to-b before:from-border/30 before:via-border before:to-border/30 last:before:hidden">
              <div className="relative flex items-center gap-4">
                {/* Arrow ↗|↘ */}
                <RiArrowRightUpLine className="absolute right-0 top-0 opacity-0 group-has-[a:hover]:opacity-100 transition-opacity text-emerald-400" size={20} aria-hidden="true" />
                {/* Icon */}
                <div className="max-[480px]:hidden size-10 shrink-0 rounded-full bg-emerald-600/25 border border-emerald-600 flex items-center justify-center text-emerald-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={19} fill="currentColor">
                    <path d="M2 9.5c0 .313.461.858 1.53 1.393C4.914 11.585 6.877 12 9 12c2.123 0 4.086-.415 5.47-1.107C15.538 10.358 16 9.813 16 9.5V7.329C14.35 8.349 11.827 9 9 9s-5.35-.652-7-1.671V9.5Zm14 2.829C14.35 13.349 11.827 14 9 14s-5.35-.652-7-1.671V14.5c0 .313.461.858 1.53 1.393C4.914 16.585 6.877 17 9 17c2.123 0 4.086-.415 5.47-1.107 1.069-.535 1.53-1.08 1.53-1.393v-2.171ZM0 14.5v-10C0 2.015 4.03 0 9 0s9 2.015 9 4.5v10c0 2.485-4.03 4.5-9 4.5s-9-2.015-9-4.5ZM9 7c2.123 0 4.086-.415 5.47-1.107C15.538 5.358 16 4.813 16 4.5c0-.313-.461-.858-1.53-1.393C13.085 2.415 11.123 2 9 2c-2.123 0-4.086.415-5.47 1.107C2.461 3.642 2 4.187 2 4.5c0 .313.461.858 1.53 1.393C4.914 6.585 6.877 7 9 7Z" />
                  </svg>                  
                </div>  
                {/* Content */}
                <div>
                  <a href="#" className="font-medium tracking-widest text-xs uppercase text-muted-foreground before:absolute before:inset-0">Contacts</a>
                  <div className="text-2xl font-semibold mb-2">37,429</div>
                  <div className="text-xs text-muted-foreground"><span className="text-emerald-500 font-medium">↗ +42%</span> vs last week</div>
                </div>
              </div>
            </div>
            {/* Value */}
            <div className="relative p-4 lg:p-5 group before:absolute before:inset-y-8 before:right-0 before:w-px before:bg-gradient-to-b before:from-border/30 before:via-border before:to-border/30 last:before:hidden">
              <div className="relative flex items-center gap-4">
                {/* Arrow ↗|↘ */}
                <RiArrowRightUpLine className="absolute right-0 top-0 opacity-0 group-has-[a:hover]:opacity-100 transition-opacity text-emerald-400" size={20} aria-hidden="true" />
                {/* Icon */}
                <div className="max-[480px]:hidden size-10 shrink-0 rounded-full bg-emerald-600/25 border border-emerald-600 flex items-center justify-center text-emerald-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor">
                    <path d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm3.833 3.337a.596.596 0 0 1 .763.067.59.59 0 0 1 .063.76c-2.18 3.046-3.38 4.678-3.598 4.897a1.5 1.5 0 0 1-2.122-2.122c.374-.373 2.005-1.574 4.894-3.602ZM15.5 9a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-11 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm2.318-3.596a1 1 0 1 1-1.414 1.414 1 1 0 0 1 1.414-1.414ZM10 3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
                  </svg>                  
                </div>  
                {/* Content */}
                <div>
                  <a href="#" className="font-medium tracking-widest text-xs uppercase text-muted-foreground before:absolute before:inset-0">Value</a>
                  <div className="text-2xl font-semibold mb-2">$82,439</div>
                  <div className="text-xs text-muted-foreground"><span className="text-emerald-500 font-medium">↗ +37%</span> vs last week</div>
                </div>
              </div>
            </div>
            {/* Referrals */}
            <div className="relative p-4 lg:p-5 group before:absolute before:inset-y-8 before:right-0 before:w-px before:bg-gradient-to-b before:from-border/30 before:via-border before:to-border/30 last:before:hidden">
              <div className="relative flex items-center gap-4">
                {/* Arrow ↗|↘ */}
                <RiArrowRightDownLine className="absolute right-0 top-0 opacity-0 group-has-[a:hover]:opacity-100 transition-opacity text-red-500" size={20} aria-hidden="true" />
                {/* Icon */}
                <div className="max-[480px]:hidden size-10 shrink-0 rounded-full bg-emerald-600/25 border border-emerald-600 flex items-center justify-center text-emerald-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width={21} height={21} fill="currentColor">
                    <path d="m14.142.147 6.347 6.346a.5.5 0 0 1-.277.848l-1.474.23-5.656-5.657.212-1.485a.5.5 0 0 1 .848-.282ZM2.141 19.257c3.722-3.33 7.995-4.327 12.643-5.52l.446-4.017-4.297-4.298-4.018.447c-1.192 4.648-2.189 8.92-5.52 12.643L0 17.117c2.828-3.3 3.89-6.953 5.303-13.081l6.364-.708 5.657 5.657-.707 6.364c-6.128 1.415-9.782 2.475-13.081 5.304L2.14 19.258Zm5.284-6.029a2 2 0 1 1 2.828-2.828 2 2 0 0 1-2.828 2.828Z" />
                  </svg>                  
                </div>  
                {/* Content */}
                <div>
                  <a href="#" className="font-medium tracking-widest text-xs uppercase text-muted-foreground before:absolute before:inset-0">Referrals</a>
                  <div className="text-2xl font-semibold mb-2">3,497</div>
                  <div className="text-xs text-muted-foreground"><span className="text-red-500 font-medium">↘ -17%</span> vs last week</div>
                </div>
              </div>                                    
            </div>
          </div>
          {/* Table */}
          <div className="grid auto-rows-min gap-4 lg:gap-6 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
