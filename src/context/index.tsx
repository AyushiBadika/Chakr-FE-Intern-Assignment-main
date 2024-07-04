"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { Person, Theme } from "./tyes";

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

  // useEffect(() => {
  //   const root = window.document.documentElement;
  //   root.classList.remove("light", "dark");

  //   if (theme === "system") {
  //     const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
  //       .matches
  //       ? "dark"
  //       : "light";
  //     root.classList.add(systemTheme);
  //   } else {
  //     root.classList.add(theme);
  //   }
  // }, [theme]);

  return (
    <GlobalContext.Provider value={{ data }}>{children}</GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
}
