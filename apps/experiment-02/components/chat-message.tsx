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
          isUser ? "bg-muted p-4 rounded-xl" : "space-y-4"
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

// export function ChatMessage({ isUser, children }: ChatMessageProps) {
//   return (
//     <article
//       className={cn(
//         "flex items-start gap-4 text-sm",
//         isUser && "justify-end"
//       )}
//     >
//       <Image
//         className={cn(
//           "rounded-full",
//           isUser ? "order-1" : "border border-black/[0.08] shadow-sm"
//         )}
//         src={isUser ? "/user-02.png" : "/user-01.png"}
//         alt={isUser ? "User profile" : "Bart logo"}
//         width={40}
//         height={40}
//       />
//       <div
//         className={cn(
//           isUser ? "min-h-10 flex items-center" : "space-y-4 p-4 relative before:absolute before:inset-0 before:rounded-xl before:bg-muted before:pointer-events-none before:mb-8"
//         )}
//       >
//         <div className="relative flex flex-col gap-3">
//           <p className="sr-only">{isUser ? "You" : "Bart"} said:</p>
//           {children}
//         </div>
//         {!isUser && <MessageActions />}
//       </div>
//     </article>
//   );
// }

type ActionButtonProps = {
  icon: React.ReactNode;
  label: string;
};

function ActionButton({ icon, label }: ActionButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className="relative text-muted-foreground/80 hover:text-foreground transition-colors size-8 flex items-center justify-center before:absolute before:inset-y-1.5 before:left-0 before:w-px before:bg-border first:before:hidden first-of-type:rounded-s-lg last-of-type:rounded-e-lg focus-visible:z-10 outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70">
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
    <div className="relative inline-flex bg-white rounded-lg border border-black/[0.08] shadow-sm -space-x-px">
      <TooltipProvider delayDuration={0}>
        <ActionButton icon={<RiCodeSSlashLine size={16} />} label="Show code" />
        <ActionButton icon={<RiBookLine size={16} />} label="Bookmark" />
        <ActionButton icon={<RiLoopRightFill size={16} />} label="Refresh" />
        <ActionButton icon={<RiCheckLine size={16} />} label="Approve" />
      </TooltipProvider>
    </div>
  );
}
