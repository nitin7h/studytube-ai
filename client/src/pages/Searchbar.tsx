"use client";
import React, { useState } from "react";
import axios from "axios";
// import { searchData } from "@/pages/serverActions";
import searchDataContext from "@/context/searchDataContext";

export default function Searchbar() {
  const { searchData, setSearchData } = React.useContext(searchDataContext);

  const searchDataHandle = async (formData: FormData) => {
    const SearchDataInput = formData.get("search");

    try {
      const response = await axios.get(
        `http://localhost:7000/studytube/${SearchDataInput}`
      );

      let dataResponse = response.data.result;

      // setSearchData(() => [...searchData, ...dataResponse]);
      setSearchData(dataResponse);
    } catch (error) {
      console.log("error : ", error);
    }
  };

  return (
    <div id="search-bar" className="w-120 bg-white rounded-md shadow-xl z-10">
      <form
        action={searchDataHandle}
        className="flex items-center justify-center p-2"
      >
        <input
          name="search"
          type="text"
          placeholder="Search here"
          className="w-full ring-2 ring-gray-600 rounded-md px-2 py-1 focus:outline-none "
        />
        <button
          type="submit"
          className="bg-gray-800 text-white rounded-md px-4 py-1 ml-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
        >
          Search
        </button>
      </form>
    </div>
  );
}
