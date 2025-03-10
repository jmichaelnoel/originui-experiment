import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { RiSettings2Line } from "@remixicon/react";

export function Converter() {
  return (
    <Tabs defaultValue="tab-1" className="flex-1 gap-5">
      <div className="flex items-center gap-2">
        <TabsList className="flex w-full bg-background p-0 shadow-md *:not-first:ms-px">
          <TabsTrigger
            value="tab-1"
            className="flex-1 data-[state=active]:shadow-none relative before:absolute before:inset-y-2 before:-left-px before:w-px before:bg-border first:before:hidden"
          >
            Convert
          </TabsTrigger>
          <TabsTrigger
            value="tab-2"
            className="flex-1 data-[state=active]:shadow-none relative before:absolute before:inset-y-2 before:-left-px before:w-px before:bg-border first:before:hidden"
          >
            Buy
          </TabsTrigger>
          <TabsTrigger
            value="tab-3"
            className="flex-1 data-[state=active]:shadow-none relative before:absolute before:inset-y-2 before:-left-px before:w-px before:bg-border first:before:hidden"
          >
            Send
          </TabsTrigger>
        </TabsList>
        <Button size="icon" variant="ghost" className="size-8 shrink-0">
          <span className="sr-only">Settings</span>
          <RiSettings2Line size={20} aria-hidden="true" />
        </Button>            
      </div>
      <div className="dark bg-background rounded-2xl p-2">
        <TabsContent value="tab-1">
          <p className="text-muted-foreground p-4 text-center text-xs">Content for Tab 1</p>
        </TabsContent>
        <TabsContent value="tab-2">
          <p className="text-muted-foreground p-4 text-center text-xs">Content for Tab 2</p>
        </TabsContent>
        <TabsContent value="tab-3">
          <p className="text-muted-foreground p-4 text-center text-xs">Content for Tab 3</p>
        </TabsContent>
      </div>
    </Tabs>
  );
}
