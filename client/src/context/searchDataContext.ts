"use client"
import React from "react";

interface SearchDataContext {
    searchData: any;
    setSearchData: React.Dispatch<React.SetStateAction<any>>;

}
const searchDataContext = React.createContext({} as SearchDataContext);
export default searchDataContext;