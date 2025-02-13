import { useId } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import UserDropdown from "@/components/user-dropdown";
import FeedbackDialog from "@/components/feedback-dialog";
import { RiScanLine, RiQuillPenAiLine } from "@remixicon/react";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SliderControl from "@/components/slider-control";

export default function Page() {
  const id = useId();

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-sidebar group/sidebar-inset">
        <header className="dark flex h-16 shrink-0 items-center gap-2 px-4 md:px-6 lg:px-8 bg-sidebar text-sidebar-foreground">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger className="-ms-4" />
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
        <div className="flex h-[calc(100svh-4rem)] bg-[hsl(240_5%_92.16%)] md:rounded-s-3xl md:peer-data-[state=collapsed]:group-[]/sidebar-inset:rounded-s-none transition-all">

          {/* Main area */}
          <div className="flex-1 overflow-auto shadow-md md:rounded-s-[inherit] md:rounded-e-3xl bg-background px-4 md:px-6 lg:px-8">

          </div>

          {/* Right sidebar */}
          <div className="w-72 overflow-auto px-4 md:px-6">

            {/* Sidebar header */}
            <div className="py-5 border-b border-zinc-300">
              <div className="flex items-center gap-2">
                <RiQuillPenAiLine className="text-muted-foreground/60" size={20} aria-hidden="true" />
                <h2 className="text-sm font-medium">My preferences</h2>
              </div>
            </div>

            {/* Sidebar content */}
            <div className="divide-y divide-zinc-300">

              {/* Content group */}
              <div className="py-5">
                <h3 className="text-xs font-medium uppercase text-muted-foreground/80 mb-4">Chat presets</h3>
                <div className="space-y-3">

                  {/* Model */}
                  <div className="flex items-center justify-between gap-2">
                    <Label htmlFor={`${id}-model`} className="font-normal">Model</Label>
                    <Select defaultValue="1">
                      <SelectTrigger id={`${id}-model`} className="w-auto max-w-full h-7 py-1 px-2 gap-1 [&_svg]:-me-1 border-none">
                        <SelectValue placeholder="Select model" />
                      </SelectTrigger>
                      <SelectContent className="[&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2" align="end">
                        <SelectItem value="1">Chat 4.0</SelectItem>
                        <SelectItem value="2">Chat 3.5</SelectItem>
                        <SelectItem value="3">Chat 3.0</SelectItem>
                        <SelectItem value="4">Chat 2.5</SelectItem>
                        <SelectItem value="5">Chat 2.0</SelectItem>
                        <SelectItem value="6">Chat 1.5</SelectItem>
                        <SelectItem value="7">Chat 1.0</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Response format */}
                  <div className="flex items-center justify-between gap-2">
                    <Label htmlFor={`${id}-response-format`} className="font-normal">Response format</Label>
                    <Select defaultValue="1">
                      <SelectTrigger id={`${id}-response-format`} className="w-auto max-w-full h-7 py-1 px-2 gap-1 [&_svg]:-me-1 border-none">
                        <SelectValue placeholder="Select response format" />
                      </SelectTrigger>
                      <SelectContent className="[&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2" align="end">
                        <SelectItem value="1">text</SelectItem>
                        <SelectItem value="2">json_object</SelectItem>
                        <SelectItem value="3">json_schema</SelectItem>
                      </SelectContent>                      
                    </Select>
                  </div>

                  {/* Writing style */}
                  <div className="flex items-center justify-between gap-2">
                    <Label htmlFor={`${id}-writing-style`} className="font-normal">Writing style</Label>
                    <Select defaultValue="1">
                      <SelectTrigger id={`${id}-writing-style`} className="w-auto max-w-full h-7 py-1 px-2 gap-1 [&_svg]:-me-1 border-none">
                        <SelectValue placeholder="Select writing style" />
                      </SelectTrigger>
                      <SelectContent className="[&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2" align="end">
                        <SelectItem value="1">Concise</SelectItem>
                        <SelectItem value="2">Formal</SelectItem>
                        <SelectItem value="3">Technical</SelectItem>
                        <SelectItem value="4">Creative</SelectItem>
                        <SelectItem value="5">Scientific</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Mode */}
                  <div className="flex items-center justify-between gap-2">
                    <Label htmlFor={`${id}-mode`} className="font-normal">Mode</Label>
                    <Select defaultValue="1">
                      <SelectTrigger id={`${id}-mode`} className="w-auto max-w-full h-7 py-1 px-2 gap-1 [&_svg]:-me-1 border-none">
                        <SelectValue placeholder="Select mode" />
                      </SelectTrigger>
                      <SelectContent className="[&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2" align="end">
                        <SelectItem value="1">Chatbot</SelectItem>
                        <SelectItem value="2">Code</SelectItem>
                        <SelectItem value="3">Translate</SelectItem>
                        <SelectItem value="4">Summarize</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                </div>
              </div>

              {/* Content group */}
              <div className="py-5">
                <h3 className="text-xs font-medium uppercase text-muted-foreground/80 mb-4">Configurations</h3>
                <div className="space-y-3">

                  {/* Temperature */}
                  <SliderControl 
                    minValue={0}
                    maxValue={2}
                    initialValue={[1.25]}
                    defaultValue={[1]}
                    step={0.01}
                    label="Temperature"
                  />

                  {/* Maximum length */}
                  <SliderControl 
                    className="[&_input]:w-14"                  
                    minValue={1}
                    maxValue={16383}
                    initialValue={[2048]}
                    defaultValue={[2048]}
                    step={1}
                    label="Maximum length"
                  />

                  {/* Top P */}
                  <SliderControl 
                    minValue={0}
                    maxValue={1}
                    initialValue={[0.5]}
                    defaultValue={[0]}
                    step={0.01}
                    label="Top P"
                  />

                </div>
              </div>              

            </div>
            
          </div>

        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
