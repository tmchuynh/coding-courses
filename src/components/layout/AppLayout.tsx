"use client";

import { ThemeToggle } from "@/components/button/ThemeToggle";
import DynamicBreadcrumb from "@/components/navigation/dynamic-breadcrumb";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { navbarItems } from "@/lib/constants/navigation";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function AppSidebar() {
  const [openMenus, setOpenMenus] = useState<Set<string>>(new Set());

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(label)) {
        newSet.delete(label);
      } else {
        newSet.add(label);
      }
      return newSet;
    });
  };

  return (
    <Sidebar>
      <SidebarHeader className="border-b h-16">
        <div className="flex gap-2 items-center px-2 py-2">
          <span className="font-semibold">Coding Courses</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navbarItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  {item.dropdown ? (
                    <div>
                      <SidebarMenuButton
                        onClick={() => toggleMenu(item.label)}
                        className="justify-between w-full"
                      >
                        <span>{item.label}</span>
                        {openMenus.has(item.label) ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </SidebarMenuButton>
                      {openMenus.has(item.label) && (
                        <SidebarMenuSub>
                          {item.dropdown.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.label}>
                              <SidebarMenuSubButton asChild>
                                <Link href={subItem.href}>{subItem.label}</Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      )}
                    </div>
                  ) : (
                    <SidebarMenuButton asChild>
                      <Link href={item.href || "#"}>
                        {item.label === "Home"}
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex gap-2 items-center px-4 border-b h-16 shrink-0">
          <SidebarTrigger className="-ml-1" />
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 pb-25">
          <DynamicBreadcrumb />
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
