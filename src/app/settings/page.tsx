"use client";
import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

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

import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { User2Icon } from "lucide-react";
import { FaThemeco } from "react-icons/fa";
// import defaultProfileImage from "../../assets/Profile - Settings_files";

export default function page() {
  const FormSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  return (
    <div className="absolute top-0 left-0 w-full h-full flex bg-white">
      <Command className=" bg-white  w-[40%] pl-56 pt-8">
        <CommandInput
          placeholder="Type a command or search..."
          className="border-0"
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="User">
            <CommandItem>
              <User2Icon className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </CommandItem>
            <CommandItem>
              <FaThemeco className="mr-2 h-4 w-4" />
              <span>Appearance</span>
            </CommandItem>
            <CommandItem>
              <RocketIcon className="mr-2 h-4 w-4" />
              <span>Launch</span>
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading="Settings">
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
          </CommandGroup>
        </CommandList>
      </Command>
      <div className="border p-8 w-full h-full rounded m-8 overflow-scroll scrollbar-hide pb-12">
        <Form {...form}>
          <form className="space-y-8  ">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormLabel>Profile</FormLabel>
                    {/* <img src={defaultProfileImage} alt="" /> */}
                    <div className="flex gap-4">
                      <Input className="max-w-64" id="picture" type="file" />
                      <Button
                        variant="outline"
                        className="w-1/4 cursor-not-allowed"
                        disabled
                      >
                        Remove
                      </Button>
                    </div>
                    <FormDescription>
                      We support your best PNGs, JPEGs and GIFs portraits under
                      10MB
                    </FormDescription>
                  </FormItem>
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormDescription>
                      Your name as it will be displayed
                    </FormDescription>
                    <div className="flex gap-8">
                      <FormControl>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                          <Label htmlFor="firstname">First Name</Label>
                          <Input type="text" id="firstname" placeholder="Tim" />
                        </div>
                      </FormControl>
                      <FormControl>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                          <Label htmlFor="lastname">Last Name</Label>
                          <Input type="text" id="lastname" placeholder="Cook" />
                        </div>
                      </FormControl>
                    </div>
                    {/* <FormMessage /> */}
                  </FormItem>
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormDescription>
                      The email associated to your account
                    </FormDescription>

                    <FormControl>
                      <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          type="text"
                          id="email"
                          placeholder="timcook@gmail.com"
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormDescription>
                      Receive an email containing password update link
                    </FormDescription>

                    <FormControl>
                      <div className="">
                        <Button variant={"outline"} size={"sm"}>
                          Change Password
                        </Button>
                      </div>
                    </FormControl>
                  </FormItem>
                  <FormItem>
                    <FormLabel>Danger Zone</FormLabel>
                    <FormDescription>
                      Delete account and all the associated data
                    </FormDescription>

                    <FormControl>
                      <div className="">
                        <Button
                          variant={"outline"}
                          size={"sm"}
                          className="text-red-600 border-red-600 hover:bg-red-100 hover:text-red-600"
                        >
                          Change Password
                        </Button>
                      </div>
                    </FormControl>
                  </FormItem>
                </>
              )}
            />
            {/* <Button type="submit">Submit</Button> */}
          </form>
        </Form>
      </div>
    </div>
  );
}
