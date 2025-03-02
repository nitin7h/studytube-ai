"use client";
import React from "react";

import { AppSidebar } from "@/components/app-sidebar";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import TabPage from "./TabPage";
import Content1 from "./Content1";
import SidebarHeader from "./SidebarHeader";
export default function Dasboard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SidebarHeader />
        {/* write your content here  */}
        {/* <Content1 /> */}
        <div className="m-4">
          <TabPage />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
