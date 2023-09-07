import React from "react";
import InputForm from "../../Components/adminComponents/InputForm";
import AdminSidebar from "../../Components/adminComponents/AdminSidebar";

export default function Iserv() {
  const [first, setfirst] = React.useState("");

  return (
    <>
      <div className="w-full h-screen flex flex-col px-[1%] lg:px-[5%] py-[1%] ">
        <AdminSidebar />
        <div className="flex flex-col sm:flex-row mb-2 items-center relative ">
          <div>
            <img
              className="object-contain w-[110px] "
              src="/adminAssets/logo.png"
              alt="logo"
            />
          </div>
          <div className="w-full lg:absolute left-0 top-0 flex items-center justify-center">
            <div className="bg-[#402B6E] text-white w-fit px-14 py-2.5 font-[600] rounded-md text-center">
              Internal Service Request
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-end">
          <button className="bg-[#402B6E] text-white w-fit px-4 py-1.5 font-[600] rounded-md text-center">
            Submit
          </button>
        </div>
        {/* header------------------------------------------------------------------------ */}
        <div className="lg:ml-[10%]  lg:w-[90%] flex flex-col my-5">
          <label>Service type</label>
          <select className=" border border-black/50 p-3 rounded-md">
            <option>Service type</option>
            <option>Service type</option>
            <option>Service type</option>
            <option>Service type</option>
          </select>
        </div>
      </div>
    </>
  );
}
