import { cn } from "@workspace/ui/lib/utils";
import Image from "next/image";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  RiCodeSSlashLine,
  RiBookLine,
  RiLoopRightFill,
  RiCheckLine,
} from "@remixicon/react";

type ChatMessageProps = {
  isUser?: boolean;
  children: React.ReactNode;
};

export function ChatMessage({ isUser, children }: ChatMessageProps) {
  return (
    <article
      className={cn(
        "flex items-start gap-4 text-sm",
        isUser && "justify-end"
      )}
    >
      <Image
        className={cn(
          "rounded-full",
          isUser ? "order-1" : "border border-black/[0.08] shadow-sm"
        )}
        src={isUser ? "/user-02.png" : "/user-01.png"}
        alt={isUser ? "User profile" : "Bart logo"}
        width={40}
        height={40}
      />
      <div
        className={cn(
          "space-y-4",
          isUser && "bg-muted p-4 rounded-xl" 
        )}
      >
        <div className="flex flex-col gap-3">
          <p className="sr-only">{isUser ? "You" : "Bart"} said:</p>
          {children}
        </div>
        {!isUser && <MessageActions />}
      </div>
    </article>
  );
}

type ActionButtonProps = {
  icon: React.ReactNode;
  label: string;
};

function ActionButton({ icon, label }: ActionButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className="relative text-muted-foreground/80 hover:text-foreground transition-colors size-8 flex items-center justify-center before:absolute before:inset-y-1.5 before:left-0 before:w-px before:bg-border first:before:hidden first:rounded-s-lg last:rounded-e-lg focus-visible:z-10 outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70">
          {icon}
          <span className="sr-only">{label}</span>
        </button>
      </TooltipTrigger>
      <TooltipContent side="bottom" className="dark px-2 py-1 text-xs">
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  );
}

function MessageActions() {
  return (
    <div className="inline-flex rounded-lg border border-black/[0.08] shadow-sm -space-x-px">
      <TooltipProvider delayDuration={0}>
        <ActionButton icon={<RiCodeSSlashLine size={16} />} label="Show code" />
        <ActionButton icon={<RiBookLine size={16} />} label="Bookmark" />
        <ActionButton icon={<RiLoopRightFill size={16} />} label="Refresh" />
        <ActionButton icon={<RiCheckLine size={16} />} label="Approve" />
      </TooltipProvider>
    </div>
  );
}
