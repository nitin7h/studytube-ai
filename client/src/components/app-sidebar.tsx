"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Nitin Kumar",
    email: "nitinlumar7h@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Study Tube",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Topics",
      url: "#",
      icon: Settings2,
      isActive: true,
      items: [
        {
          title: "Science",
          url: "#",
        },
        {
          title: "Mathematics",
          url: "#",
        },
        {
          title: "Commerce",
          url: "#",
        },
        {
          title: "Art",
          url: "#",
        },
      ],
    },
    {
      title: "Science",
      url: "#",
      icon: Map,
      items: [
        {
          title: "Biology",
          url: "#",
        },
        {
          title: "Chemistry",
          url: "#",
        },
        {
          title: "Physics",
          url: "#",
        },
      ],
    },
    {
      title: "Engineering",
      url: "#",
      icon: SquareTerminal,
      items: [
        {
          title: "Computer Science",
          url: "#",
        },
        {
          title: "Electronics Engineering",
          url: "#",
        },
        {
          title: "Electronics and Communication",
          url: "#",
        },
        {
          title: "Mechanical Engineering",
          url: "#",
        },
        {
          title: "Civil Engineering",
          url: "#",
        },
      ],
    },
    {
      title: "Social Studies",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Geography",
          url: "#",
        },
        {
          title: "Civics",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
