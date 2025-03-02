import React from "react";
import YouTube from "@/pages/YouTube";
import Searchbar from "@/pages/Searchbar";
import searchDataContext from "@/context/searchDataContext";

interface item {
  url: string;
  title: string;
  description: string;
}

interface defoultDataInterface {
  url: string;
}

const defoultData = [
  {
    url: "https://youtu.be/f2b0q2qKNNU?si=C45A0sygAe-VjS-d",
  },
  {
    url: "https://youtu.be/h9BFBJJl3pg?si=_hYJgYspMi-gUcPf",
  },
  {
    url: " https://youtu.be/NlYXqRG7lus?si=Q7Api6h_67odzLSM",
  },
  {
    url: "https://youtu.be/pN17MOfhZJk?si=bLjpbUqzj4snSDGE ",
  },
  {
    url: "https://youtu.be/wLk2xRzhbjk?si=w-8U5LdtJ0HwsPKV ",
  },
  {
    url: " https://youtu.be/RBSUwFGa6Fk?si=x75xTRSzAQ7-dVbC",
  },
];
export default function Content1() {
  const { searchData } = React.useContext(searchDataContext);
  // console.log("searchData for youtube : ", searchData);

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="flex justify-center">
        <div className="w-1/2 h-28">
          <Searchbar />
        </div>
      </div>
      {/* down  */}
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        {searchData.length > 0 ? (
          searchData.map((item: item, index: number) => {
            return (
              <div key={index} className="aspect-video rounded-xl bg-muted/50">
                <YouTube videoUrl={item.url} />
              </div>
            );
          })
        ) : (
          <>
            {defoultData.map((items: defoultDataInterface, index: number) => {
              return (
                <div
                  key={index}
                  className="aspect-video rounded-xl bg-muted/50"
                >
                  <YouTube videoUrl={items.url} />
                </div>
              );
            })}
            {/* <div className=" aspect-video rounded-xl bg-muted/50" />
             */}
          </>
        )}
      </div>
    </div>
  );
}
