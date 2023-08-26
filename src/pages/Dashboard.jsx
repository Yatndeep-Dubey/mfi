import React from "react";
import { BsFillShareFill } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { TransactionsTable } from "../Components/Tables";

const Dashboard = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className=" relative h-[21%] bg-[#402B6E] flex flex-col text-white py-8 items-center justify-center">
        <h2 className="font-[600] text-[25px]">WELCOME KRISHNA!</h2>
        <p className="text-[16.5px] mt-1">
          Aim of the company is to provide reliable/quality and timely
          relocation services to our regular and new customers{" "}
        </p>
        <div className="absolute  -bottom-5 flex items-center justify-evenly w-full z-50">
          <div className="bg-[#ECBC76] py-2 px-4 rounded-[8px] flex items-center gap-3 text-[16.5px] cursor-pointer ">
            <BsFillShareFill className="text-[15px]" />
            Invite Staff
          </div>
          <div className="bg-[#ECBC76] py-2 px-4 rounded-[8px] flex items-center gap-3 text-[16.5px] cursor-pointer ">
            <IoDocumentTextOutline className="text-[20px]" />
            Get Quotation
          </div>
        </div>
      </div>
      <div className="h-[79%]">
        <div className="ml-[10%] h-full">
        <TransactionsTable/>
        </div>
      </div>
      <div className="h-full w-fit absolute left-0 top-0 flex items-center justify-center">
      <div className="h-[350px] w-[60px] bg-[#ECBC76] rounded-full mx-10 "></div>
      </div>
    </div>
  );
};

export default Dashboard;
