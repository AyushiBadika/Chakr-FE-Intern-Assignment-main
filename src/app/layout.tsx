"use client";
import { FaSearch } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { MdTaskAlt } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { GoGoal } from "react-icons/go";
import { TbBuildingWarehouse } from "react-icons/tb";
import { BsBuildings } from "react-icons/bs";
import { IoLogoApple } from "react-icons/io5";
import { TbBrandTabler } from "react-icons/tb";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

//

import type { Metadata } from "next";

import "./globals.css";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  BuildingIcon,
  CheckCheckIcon,
  CheckSquare,
  GoalIcon,
  PersonStandingIcon,
  SettingsIcon,
  TicketCheckIcon,
} from "lucide-react";

import ContextWrapper from "@/context/index";
const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);
  const toggleRef = useRef(null);
  const handleToggleSearchBar = () => {
    setIsVisible((prev) => !prev);
  };
  useEffect(() => {
    const handleKeyDown = (event: {
      ctrlKey: any;
      key: string;
      preventDefault: () => void;
    }) => {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        setIsVisible((prev) => !prev);
      }
    };

    const handleClickOutside = (event: { target: any }) => {
      if (itemRef.current && !itemRef.current.contains(event.target)) {
        console.log("hi");
        setIsVisible(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <html lang="en">
      <body className="bg-[#F2F2F3] w-full h-{100vh} flex pl-3 pt-8">
        <ContextWrapper>
          <Command className="w-1/5 h-[100vh] bg-[#F2F2F3] p-2">
            <div className="flex justify-between px-2 pb-4">
              <div className="flex gap-8">
                <IoLogoApple className="text-xl" />
                <p>Ayushi</p>
              </div>
              <TbBrandTabler className="text-lg" />
            </div>
            <CommandList>
              <CommandGroup>
                <CommandItem onSelect={handleToggleSearchBar} ref={itemRef}>
                  <FaSearch className="mr-2 h-4 w-4" />
                  <span>Search</span>
                  <CommandShortcut className="  ">⌘K</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CiSettings className="mr-2 h-4 w-4" />
                  <span>
                    <Link href={"/settings"}>Settings</Link>
                  </span>
                </CommandItem>
                <CommandItem>
                  <MdTaskAlt className="mr-2 h-4 w-4" />
                  <span>Tasks</span>
                </CommandItem>
              </CommandGroup>
              {/* <CommandSeparator /> */}
              <CommandGroup heading="Workspace">
                <CommandItem>
                  <IoPersonOutline className="mr-2 h-4 w-4" />
                  <span>
                    <Link href={"/people"}>People</Link>
                  </span>
                  {/* <CommandShortcut>⌘P</CommandShortcut> */}
                </CommandItem>
                <CommandItem>
                  <BsBuildings className="mr-2 h-4 w-4" />
                  <span>
                    <Link href={"/"}>Companies</Link>
                  </span>
                  {/* <CommandShortcut>⌘B</CommandShortcut> */}
                </CommandItem>
                <CommandItem>
                  <GoGoal className="mr-2 h-4 w-4" />
                  <span>
                    {" "}
                    <Link href={"/opportunities"}>Opportunies</Link>
                  </span>
                  {/* <CommandShortcut>⌘S</CommandShortcut> */}
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
          <div
            className="w-[80%]  h-[92%] mr-10 bg-white p-4 rounded-md "
            ref={toggleRef}
          >
            {children}
          </div>

          {/* search command */}
          <Command
            className={`${
              isVisible ? "block" : "hidden"
            } rounded-lg border shadow-md absolute right-0 top-0  md:w-1/2 sm:w-3/4`}
          >
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="CRAETE">
                <CommandItem>
                  <CheckSquare className="mr-2 h-4 w-4" />
                  <span>Create Task</span>
                </CommandItem>
              </CommandGroup>

              <CommandGroup heading="NAVIGATE">
                <CommandItem>
                  <PersonStandingIcon className="mr-2 h-4 w-4" />
                  <span>Go to People</span>
                  {/* <CommandShortcut>⌘P</CommandShortcut> */}
                </CommandItem>
                <CommandItem>
                  <BuildingIcon className="mr-2 h-4 w-4" />
                  <span>Go to Companies</span>
                  {/* <CommandShortcut>⌘B</CommandShortcut> */}
                </CommandItem>
                <CommandItem>
                  <GoalIcon className="mr-2 h-4 w-4" />
                  <span>Go to Opportunities</span>
                  {/* <CommandShortcut>⌘S</CommandShortcut> */}
                </CommandItem>
                <CommandItem>
                  <SettingsIcon className="mr-2 h-4 w-4" />
                  <span>Go to Settings</span>
                  {/* <CommandShortcut>⌘S</CommandShortcut> */}
                </CommandItem>
                <CommandItem>
                  <CheckSquare className="mr-2 h-4 w-4" />
                  <span>Go to Tasks</span>
                  {/* <CommandShortcut>⌘S</CommandShortcut> */}
                </CommandItem>
              </CommandGroup>
              <CommandGroup heading="PEOPLE">
                <CommandItem>
                  <span>Brian Chesky</span>
                </CommandItem>
                <CommandItem>
                  <span>Patrick Collison</span>
                </CommandItem>
                <CommandItem>
                  <span>Dylan Field</span>
                </CommandItem>
              </CommandGroup>
              <CommandGroup heading="COMPANIES">
                <CommandItem>
                  <span>Notion</span>
                </CommandItem>
                <CommandItem>
                  <span>Stripe</span>
                </CommandItem>
                <CommandItem>
                  <span>Quonto</span>
                </CommandItem>
              </CommandGroup>
              <CommandGroup heading="NOTES">
                <CommandItem>
                  <span>Ayushi</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </ContextWrapper>
      </body>
    </html>
  );
}