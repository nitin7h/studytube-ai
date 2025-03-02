"use client";
import React, { useState } from "react";
import axios from "axios";
export default function Content2() {
  const [data, setData] = useState(String);
  const searchDataHandle = async (formData: FormData) => {
    const SearchData = formData.get("search");
    // console.log("SearchData ai : ", SearchData);
    try {
      const response = await axios.get(
        `http://localhost:7000/studytube/ai/${SearchData}`
      );
      // console.log("response : ", response.data.message);
      setData(response.data.message);
    } catch (error) {
      // console.log("API Error");
      let errodata = "Api is not responsing...";
      setData(errodata);
    }
  };
  // console.log("data : ", data);

  return (
    <div className=" overflow-scroll h-screen rounded-xl bg-muted/50 flex flex-col p-5 justify-center items-center">
      <div className="flex justify-center w-full p-10">
        {data ? <p>{data} </p> : "Ask me anything..."}
      </div>
      <div className=" w-full flex items-center justify-center mt-14">
        <form
          action={searchDataHandle}
          className="flex items-center justify-center p-2 w-1/2"
        >
          <input
            name="search"
            type="text"
            placeholder="Search here"
            className="w-full ring-2 ring-gray-600   rounded-md px-2 py-1 focus:outline-none "
          />
          <button
            type="submit"
            className="bg-gray-800 text-white rounded-md px-4 py-1 ml-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
