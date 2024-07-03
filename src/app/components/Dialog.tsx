import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusIcon } from "lucide-react";
import { useState } from "react";

export default function DialogDemo() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    creationDate: "",
    city: "",
    jobTitle: "",
    linkdin: "",
  });

  const handleUserData = (e: {
    preventDefault: () => void;
    target: { name: any; value: any };
  }) => {
    e.preventDefault();

    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleUserAdd = (e: {
  //   preventDefault: () => void;
  //   target: { name: any; value: any };
  // }) => {
  //   e.preventDefault();

  // };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <PlusIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              name="name"
              value={userData.name}
              onChange={handleUserData}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Email
            </Label>
            <Input
              name="email"
              value={userData.email}
              onChange={handleUserData}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Company
            </Label>
            <Input
              name="company"
              value={userData.company}
              onChange={handleUserData}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Phone
            </Label>
            <Input
              name="phone"
              value={userData.phone}
              onChange={handleUserData}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Creation Date
            </Label>
            <Input
              name="creationDate"
              value={userData.creationDate}
              onChange={handleUserData}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              City
            </Label>
            <Input
              name="city"
              value={userData.city}
              onChange={handleUserData}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              JobTitle
            </Label>
            <Input
              name="jobTitle"
              value={userData.jobTitle}
              onChange={handleUserData}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Linkdin
            </Label>
            <Input
              name="linkdin"
              value={userData.linkdin}
              onChange={handleUserData}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Add User</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
