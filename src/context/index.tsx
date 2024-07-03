"use client";
import { createContext, useContext } from "react";
import { Person } from "./tyes";

interface GlobalContextType {
  data: Person[];
}
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export default function ContextWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const data: Person[] = [
    {
      id: "m5gr84i9",
      name: "Ivan Zhao",
      company: "",
      phone: "",
      "Ceation Date": "07/02/2024 12:52",
      city: "San Francisco",
      "Job Title": "",
      Linkdin: "",
      email: "ken99@yahoo.com",
    },
    {
      id: "3u1reuv4",
      name: "Dylan Field",
      company: "",
      phone: "",
      "Ceation Date": "07/02/2024 12:52",
      city: "San Francisco",
      "Job Title": "",
      Linkdin: "",
      email: "Abe45@gmail.com",
    },
    {
      id: "derv1ws0",
      name: "Patrick Collison",
      company: "",
      phone: "",
      "Ceation Date": "07/02/2024 12:52",
      city: "San Francisco",
      "Job Title": "",
      Linkdin: "",
      email: "Monserrat44@gmail.com",
    },
    {
      id: "5kma53ae",
      name: "Alexandre Prot",
      company: "",
      phone: "",
      "Ceation Date": "07/02/2024 12:52",
      city: "Paris",
      "Job Title": "",
      Linkdin: "",
      email: "Silas22@gmail.com",
    },
    {
      id: "bhqecj4p",
      name: "Brin Chesky",
      company: "",
      phone: "",
      "Ceation Date": "07/02/2024 12:52",
      city: "San Francisco",
      "Job Title": "",
      Linkdin: "",
      email: "chesky@airbnb.com",
    },
  ];

  const getProfileData = (event: { target: any }) => {
    console.log(event.target);
  };
  return (
    <GlobalContext.Provider value={{ data }}>{children}</GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}
