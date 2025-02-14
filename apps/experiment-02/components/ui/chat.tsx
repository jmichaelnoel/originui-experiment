import { SettingsPanelTrigger } from "@/components/settings-panel";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { RiCodeSSlashLine, RiShareLine, RiShareCircleLine, RiShining2Line, RiAttachment2, RiMicLine, RiLeafLine, RiBookLine, RiLoopRightFill, RiCheckLine } from "@remixicon/react";

export default function Chat() {
  return (
    <div className="flex-1 flex flex-col overflow-auto shadow-md md:rounded-s-[inherit] min-[1024px]:rounded-e-3xl bg-background px-4 md:px-6 lg:px-8">
      {/* Header */}
      <div className="py-5 border-b border-border bg-background/90 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center justify-between gap-2">
          <Breadcrumb>
            <BreadcrumbList className="sm:gap-1.5">
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Playground</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Chat</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex items-center gap-2 sm:gap-1 -my-2 -me-2">
            <Button variant="ghost" className="px-2">
              <RiCodeSSlashLine className="sm:me-1.5 sm:text-muted-foreground/70" size={20} aria-hidden="true" />
              <span className="max-sm:sr-only">Code</span>
            </Button>
            <Button variant="ghost" className="px-2">
              <RiShareLine className="sm:me-1.5 sm:text-muted-foreground/70" size={20} aria-hidden="true" />
              <span className="max-sm:sr-only">Share</span>
            </Button>
            <Button variant="ghost" className="px-2">
              <RiShareCircleLine className="sm:me-1.5 sm:text-muted-foreground/70" size={20} aria-hidden="true" />
              <span className="max-sm:sr-only">Export</span>
            </Button>
            <SettingsPanelTrigger />
          </div>
        </div>
      </div>
      {/* Chat */}
      <div className="relative grow">
        <div className="sticky top-[5.5rem] h-0">
          <Button variant="outline" size="sm" className="absolute top-0 left-1/2 -translate-x-1/2 z-10 rounded-full bg-background/90 backdrop-blur-md py-1 h-6.5 text-foreground/80">
            <RiShining2Line className="sm:me-1.5 sm:text-muted-foreground/70 -ms-1" size={14} aria-hidden="true" />
            Today
          </Button>
        </div>
        <div className="max-w-3xl mx-auto pt-20 space-y-6">
          <article className="flex items-start justify-end gap-4 text-sm">
            <Image className="rounded-full order-1" src="/user-02.png" alt="User profile" width={40} height={40} />
            <div className="flex flex-col gap-3 bg-muted p-4 rounded-xl">
              <p className="sr-only">You said:</p>
              <p>Hey Bolt, can you tell me more about AI Agents?</p>
            </div>
          </article>
          <article className="flex items-start gap-4 text-sm">
            <Image className="rounded-full border border-black/[0.08] shadow-sm" src="/user-01.png" alt="Bart logo" width={40} height={40} />
            <div className="space-y-4">
              <div className="flex flex-col justify-center gap-3">
                <p className="sr-only">Bart said:</p>
                <p>AI agents are software that perceive their environment and act autonomously to achieve goals, making decisions, learning, and interacting. For example, an AI agent might schedule meetings by resolving conflicts, contacting participants, and finding optimal times—all without constant supervision.</p>
                <p>Let me know if you'd like more details!</p>
              </div>
              <div className="inline-flex rounded-lg border border-black/[0.08] shadow-sm -space-x-px">
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="relative text-muted-foreground/80 hover:text-foreground transition-colors size-8 flex items-center justify-center before:absolute before:inset-y-1.5 before:left-0 before:w-px before:bg-border first:before:hidden first:rounded-s-lg last:rounded-e-lg focus-visible:z-10 outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70">
                        <RiCodeSSlashLine size={16} aria-hidden="true" />
                        <span className="sr-only">Show code</span>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="dark px-2 py-1 text-xs">
                      <p>Show code</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="relative text-muted-foreground/80 hover:text-foreground transition size-8 flex items-center justify-center before:absolute before:inset-y-1.5 before:left-0 before:w-px before:bg-border first:before:hidden first:rounded-s-lg last:rounded-e-lg focus-visible:z-10 outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70">
                    <RiBookLine size={16} aria-hidden="true" />
                        <span className="sr-only">Bookmark</span>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="dark px-2 py-1 text-xs">
                      <p>Bookmark</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="relative text-muted-foreground/80 hover:text-foreground transition-colors size-8 flex items-center justify-center before:absolute before:inset-y-1.5 before:left-0 before:w-px before:bg-border first:before:hidden first:rounded-s-lg last:rounded-e-lg focus-visible:z-10 outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70">
                    <RiLoopRightFill size={16} aria-hidden="true" />
                    <span className="sr-only">Refresh</span>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="dark px-2 py-1 text-xs">
                      <p>Refresh</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="relative text-muted-foreground/80 hover:text-foreground transition-colors size-8 flex items-center justify-center before:absolute before:inset-y-1.5 before:left-0 before:w-px before:bg-border first:before:hidden first:rounded-s-lg last:rounded-e-lg focus-visible:z-10 outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70">
                    <RiCheckLine size={16} aria-hidden="true" />
                    <span className="sr-only">Approve</span>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="dark px-2 py-1 text-xs">
                      <p>Approve</p>
                    </TooltipContent>
                  </Tooltip>                    
                </TooltipProvider>
              </div>
            </div>
          </article>
          <article className="flex items-start justify-end gap-4 text-sm">
            <Image className="rounded-full order-1" src="/user-02.png" alt="User profile" width={40} height={40} />
            <div className="flex flex-col gap-3 bg-muted p-4 rounded-xl">
              <p className="sr-only">You said:</p>
              <p>All clear, thank you!</p>
            </div>
          </article>
        </div>
      </div>
      {/* Footer */}
      <div className="sticky bottom-0 pt-8">
        <div className="max-w-3xl mx-auto bg-background pb-8">
          <div className="relative rounded-[20px] border border-transparent bg-muted transition-colors focus-within:bg-muted/50 focus-within:border-input has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50 [&:has(input:is(:disabled))_*]:pointer-events-none">
            <textarea
              className="flex min-h-[70px] w-full bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-none [resize:none]"
              placeholder="Ask me anything..."
              aria-label="Enter your prompt"
            />
            {/* Textarea buttons */}
            <div className="flex items-center justify-between gap-2 p-3">
              {/* Left buttons */}
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="rounded-full size-8 border-none hover:bg-background hover:shadow-md transition-[box-shadow]">
                  <RiAttachment2 className="text-muted-foreground/70" size={20} aria-hidden="true" />
                  <span className="sr-only">Attach</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full size-8 border-none hover:bg-background hover:shadow-md transition-[box-shadow]">
                  <RiMicLine className="text-muted-foreground/70" size={20} aria-hidden="true" />
                  <span className="sr-only">Audio</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full size-8 border-none hover:bg-background hover:shadow-md transition-[box-shadow]">
                  <RiLeafLine className="text-muted-foreground/70" size={20} aria-hidden="true" />
                  <span className="sr-only">Action</span>
                </Button>
              </div>
              {/* Right buttons */}
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="rounded-full size-8 border-none hover:bg-background hover:shadow-md transition-[box-shadow]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><g clipPath="url(#icon-a)"><path fill="url(#icon-b)" d="m8 .333 2.667 5 5 2.667-5 2.667-2.667 5-2.667-5L.333 8l5-2.667L8 .333Z" /><path stroke="#451A03" strokeOpacity=".04" d="m8 1.396 2.225 4.173.072.134.134.071L14.604 8l-4.173 2.226-.134.071-.072.134L8 14.604l-2.226-4.173-.071-.134-.134-.072L1.396 8l4.173-2.226.134-.071.071-.134L8 1.396Z" /></g><defs><linearGradient id="icon-b" x1="8" x2="8" y1=".333" y2="15.667" gradientUnits="userSpaceOnUse"><stop stopColor="#FDE68A" /><stop offset="1" stopColor="#F59E0B" /></linearGradient><clipPath id="icon-a"><path fill="#fff" d="M0 0h16v16H0z" /></clipPath></defs></svg>
                  <span className="sr-only">Generate</span>
                </Button>
                <Button className="rounded-full h-8">Ask Bart</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
