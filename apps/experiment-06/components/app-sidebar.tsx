"use client";

import * as React from "react";
import {
  Command,
} from "lucide-react";
import { RiCheckLine } from "@remixicon/react"; 
import { useCalendarContext } from "@/components/event-calendar/calendar-context";
import { EventColor } from "@/components/event-calendar/types";

import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import SidebarCalendar from "@/components/sidebar-calendar";
import { Checkbox } from "@/components/ui/checkbox";

const data = {
  user: {
    name: "Mark Bannert",
    email: "mark@bannert.com",
    avatar:
      "https://res.cloudinary.com/dlzlfasou/image/upload/v1741345912/user_itiiaq.png",
  },
  etiquettes: [
    {
      id: "my-events",
      name: "My Events",
      color: "emerald" as EventColor,
      isActive: true,
    },
    {
      id: "marketing-team",
      name: "Marketing Team",
      color: "amber" as EventColor,
      isActive: false,
    },
    {
      id: "interviews",
      name: "Interviews",
      color: "violet" as EventColor,
      isActive: true,
    },
    {
      id: "events-planning",
      name: "Events Planning",
      color: "blue" as EventColor,
      isActive: true,
    },
    {
      id: "holidays",
      name: "Holidays",
      color: "rose" as EventColor,
      isActive: true,
    }
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { isColorVisible, toggleColorVisibility } = useCalendarContext();
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarCalendar /> 
        <SidebarGroup>
          <SidebarGroupLabel className="uppercase text-muted-foreground/65">
            Calendars
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.etiquettes.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    asChild
                    className="relative font-medium gap-3 h-9 rounded-md [&>svg]:size-auto"
                    isActive={item.isActive}
                  >
                    <span>
                      <Checkbox
                        id={item.id}
                        className="order-1 after:absolute after:inset-0"
                        checked={isColorVisible(item.color)}
                        onCheckedChange={() => toggleColorVisibility(item.color)}
                      />
                      <RiCheckLine
                        size={16}
                        aria-hidden="true"
                      />
                      <label htmlFor={item.id}>{item.name}</label>
                    </span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
