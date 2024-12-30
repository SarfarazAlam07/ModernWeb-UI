import React, { useRef, useState } from "react";
import Card from "./Card";


const Foreground = () => {
    const ref = useRef(null)
  const data = [
    {
      description:
        "Hello baby have a good day. You are so lucky if you have reach this site",
        fileSize:".9mb",
        close: false,
        tag:{
            isOpen:true, tagTitle: "Download Now", tagColor:"yellow"
        }
    },
    {
      description:
        "Hello baby have a good day. You are so lucky if you have reach this site",
        fileSize:".4mb",
        close: false,
        tag:{
            isOpen:true, tagTitle: "Download Now", tagColor:"green"
        }
    },
    {
      description:
        "Hello baby have a good day. You are so lucky if you have reach this site",
        fileSize:".5mb",
        close: true,
        tag:{
            isOpen:true, tagTitle: "Downloaded", tagColor:"yellow"
        }
    },
    {
      description:
        "Hello baby have a good day. You are so lucky if you have reach this site",
        fileSize:".9mb",
        close: false,
        tag:{
            isOpen:true, tagTitle: "Download Now", tagColor:"blue"
        }
    },
  ];
  return (
    <>
      <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5  ">
        {data.map((item,index)=>
        <Card data={item} reference={ref} />
        )}
      </div>
    </>
  );
};

export default Foreground;
