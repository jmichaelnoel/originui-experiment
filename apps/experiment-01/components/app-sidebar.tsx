import * as React from "react"

import { SearchForm } from "@/components/search-form"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { RiScanLine, RiBardLine, RiUserFollowLine, RiCodeSSlashLine, RiLoginCircleLine, RiLayoutLeftLine, RiVoiceAiLine, RiSettings3Line, RiLeafLine, RiLogoutBoxLine } from "@remixicon/react"

// This is sample data.
const data = {
  teams: [
    {
      name: "InnovaCraft",
      logo: "/logo-01.png",
    },
    {
      name: "Acme Corp.",
      logo: "/logo-01.png",
    },
    {
      name: "Evil Corp.",
      logo: "/logo-01.png",
    },
  ],
  navMain: [
    {
      title: "Sections",
      url: "#",
      items: [
        {
          title: "Dashboard",
          url: "#",
          icon: RiScanLine,
        },
        {
          title: "Insights",
          url: "#",
          icon: RiBardLine,
        },
        {
          title: "Contacts",
          url: "#",
          icon: RiUserFollowLine,
          isActive: true,
        },
        {
          title: "Tools",
          url: "#",
          icon: RiCodeSSlashLine,
        },
        {
          title: "Integration",
          url: "#",
          icon: RiLoginCircleLine,
        },
        {
          title: "Layouts",
          url: "#",
          icon: RiLayoutLeftLine,
        },
        {
          title: "Reports",
          url: "#",
          icon: RiLeafLine,
        },
      ]
    },
    {
      title: "Other",
      url: "#",
      items: [
        {
          title: "Settings",
          url: "#",
          icon: RiSettings3Line,
        },
        {
          title: "Help Center",
          url: "#",
          icon: RiLeafLine,
        },
      ]
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild className="font-medium gap-3" isActive={item.isActive}>
                      <a href={item.url}>
                        {item.icon && <item.icon size={22} aria-hidden="true" />}
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="font-medium gap-3">
              <RiLogoutBoxLine size={22} aria-hidden="true" />
              <span>Sign Out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>      
      <SidebarRail />
    </Sidebar>
  )
}
