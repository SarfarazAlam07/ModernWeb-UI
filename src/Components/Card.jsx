import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react"

const Card = ({ data , reference }) => (
  <>
    <motion.div   whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  whileDrag={{ scale: 0.9, rotate: 10 }}
  dragConstraints={reference}
  drag className="px-4 py-7 w-40 h-52 bg-zinc-900/80  rounded-2xl text-white relative overflow-hidden  ">
      <FaRegFileAlt />
      <p className=" text-xs mt-4 leading-tight">{data.description}</p>

      <div className="footer absolute  bottom-0 w-full  left-0">
        <div className=" flex items-center justify-between px-4 py-1 ">
          <h5 className="text-xs">{data.fileSize}</h5>
          <span className="bg-zinc-200 rounded-full flex items-center justify-center w-5 h-5 cursor-pointer">
            {data.close ? (
              <IoClose size=".6em" color="#000000" />
            ) : (
              <LuDownload size=".6em" color="#000000" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`w-full py-2 bg-${
              data.tag.tagColor === "yellow"
                ? "yellow-400"
                : data.tag.tagColor === "green"
                ? "green-400"
                : "blue-400"
            } text-zinc-100 flex items-center justify-center`}
          >
            <h4 className="font-semibold  text-xs ">{data.tag.tagTitle}</h4>
          </div>
        )}
      </div>
    </motion.div>
  </>
);

export default Card;
