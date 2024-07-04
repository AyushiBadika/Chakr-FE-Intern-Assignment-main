"use client";
// import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { User2Icon } from "lucide-react";
import { FaThemeco } from "react-icons/fa";
import Link from "next/link";

import { useTheme } from "next-themes";

export default function AppearanceSettings() {
  const { setTheme } = useTheme();
  return (
    <div className="absolute top-0 left-0 w-full h-full flex ">
      <Command className="   w-[40%] pl-56 pt-8">
        <CommandInput
          placeholder="Type a command or search..."
          className="border-0"
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="User">
            <CommandItem>
              <User2Icon className="mr-2 h-4 w-4" />
              <span>
                <Link href={"/settings"}>Profile</Link>
              </span>
            </CommandItem>
            <CommandItem>
              <FaThemeco className="mr-2 h-4 w-4" />
              <Link href={"/settings/appearance"}>Appearance</Link>
            </CommandItem>
            {/* <CommandItem>
              <RocketIcon className="mr-2 h-4 w-4" />
              <span>Launch</span>
            </CommandItem> */}
          </CommandGroup>

          {/* <CommandGroup heading="Settings">
            <CommandItem>
              <PersonIcon className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
              <span>Mail</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <GearIcon className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup> */}
        </CommandList>
      </Command>

      <div className="border p-8 w-full h-full rounded m-8 overflow-scroll scrollbar-hide pb-12">
        <h3 className="text-lg font-medium mb-4">Theme</h3>
        <RadioGroup defaultValue="system" className="grid grid-cols-4 gap-4">
          <Label
            onClick={() => setTheme("light")}
            htmlFor="light"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted p-4  [&:has([data-state=checked])]:border-primary"
          >
            <RadioGroupItem value="light" id="light" className="sr-only" />
            <div className="text-4xl mb-2">Aa</div>
            <span>Light</span>
          </Label>
          <Label
            onClick={() => setTheme("dark")}
            htmlFor="dark"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-zinc-950 p-4  [&:has([data-state=checked])]:border-primary"
          >
            <RadioGroupItem value="dark" id="dark" className="sr-only" />
            <div className="text-4xl mb-2 text-white">Aa</div>
            <span className="text-white">Dark</span>
          </Label>
          <Label
            onClick={() => setTheme("system")}
            htmlFor="system"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-gradient-to-r from-white to-zinc-950 p-4   [&:has([data-state=checked])]:border-primary"
          >
            <RadioGroupItem value="system" id="system" className="sr-only" />
            <div className="flex justify-between w-full mb-2">
              <span className="text-4xl">Aa</span>
              <span className="text-4xl">Aa</span>
            </div>
            <span>System settings</span>
          </Label>
        </RadioGroup>
      </div>
    </div>
  );
}
