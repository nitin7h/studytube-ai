"use client";
import React from "react";
import searchDataContext from "./searchDataContext";
import { ReactNode } from "react";

export default function SearchDataContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [searchData, setSearchData] = React.useState([]);

  return (
    <searchDataContext.Provider value={{ searchData, setSearchData }}>
      {children}
    </searchDataContext.Provider>
  );
}
