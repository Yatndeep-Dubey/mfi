import React from "react";
import Sidebar from "../Components/Sidebar";

const cards1 = [
  {
    img: "/assets/pack.png",
    name: "Pack",
  },
  {
    img: "/assets/move.png",
    name: "Move",
  },
  {
    img: "/assets/store.png",
    name: "Store",
  },
  {
    img: "/assets/truck.png",
    name: "Track",
  },
];
const cards2 = [
  {
    img: "/assets/quotation.png",
    title: "Quotation",
    desc: "Total quotations created through application",
    total: "1874",
    cancel: "29",
    pending: "30",
    mature: "29",
  },
  {
    img: "/assets/member.png",
    title: "Members",
    desc: "Total Members created through application",
    total: "1874",
    cancel: "12",
    pending: "29",
    mature: "67",
  },
  {
    img: "/assets/track.png",
    title: "Track",
    desc: "Total Active trackings",
    total: "40",
    cancel: "10",
    pending: "56",
    mature: "29",
  },
  {
    img: "/assets/protect.png",
    title: "Move Protection",
    desc: "Total Move Insurance",
    total: "167",
    cancel: "29",
    pending: "97",
    mature: "100",
  },
];
const Home2 = () => {

  return (
    <>
   <Sidebar/>
    <div className="w-full min-h-screen pb-10 overflow-x-hidden">
      <div className=" relative bg-white flex flex-col text-white py-5  pl-[9%]"></div>
      <div className="  bg-[#402B6E] relative z-30 flex lg:flex-col text-white py-1 lg:py-3 items-center justify-center">
        <div className="flex items-center justify-between self-start ml-[15%] w-full sm:w-fit bg-[#fff] rounded-md px-3 sm:px-10 py-1 gap-x-10">
          <div>
            <img src="/assets/logo.png" className="w-[40px] sm:w-[90px]  object-contain" />
          </div>
          <ul className="flex items-center gap-x-2 sm:gap-x-8 font-[600] text-[12px] sm:text-base  text-black  z-50">
            <a href="#">Home</a>
            <a href="#" className="">About Us</a>
            <a href="#">MFI Member Support</a>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center lg:ml-[10%] lg:w-[90%] gap-[6%]">
        <div className="flex items-center py-3 justify-around w-full lg:w-fit lg:gap-16">
          {cards1.map((e, index) => {
            return (
              <div
                key={index}
                className="felx flex-col items-center justify-center"
              >
                <div className=" border border-[#C99457] bg-[#FFFCF9] shadow-md shadow-black/30 p-3 lg:p-6 rounded-full ">
                  <img src={e.img} className="w-[22px] sm:w-[42px] object-contain" />
                </div>
                <p className="text-[#402C6B] text-center text-[20px]">
                  {e.name}
                </p>
              </div>
            );
          })}
        </div>
        <div className="hidden lg:block z-50">
          <img
            src="/assets/man.png"
            className="w-[440px] -mt-20 z-50 object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center flex-wrap h-min justify-around ml-[7%] xl:ml-[10%] w-[90%]  gap-4">
        {cards2.map((e, index) => {
          return (
            <div
              key={index}
              className="max-w-[170px] h-max flex flex-col items-center shadow-lg shadow-black/30 p-4 pt-0 rounded-lg justify-center"
            >
              <div className="border border-[#9D58C6] w-full h-full flex items-center justify-center py-4 px-6 rounded-lg">
                <img src={e.img} className="w-[30px] z-50 object-contain" />
              </div>
              <p className="text-black font-[500]  text-center mt-4 text-[18px]">
                {e.title}
              </p>
              <p className="text-[#6B04AB] text-center text-xs pb-4  min-h-[65px] border-black/60 border-b-[2px] font-[700]">
                {e.desc}
              </p>
              <a
                href="#"
                className="bg-[#ECBC76] text-white mt-4 py-1.5 px-4 rounded-md z-50"
              >
                Total
              </a>
              <p className="font-[700] text-[27px]">{e.total}</p>
              <div className="flex flex-center gap-2">
                <div>
                  <p className="text-[15px] text-center font-[500]">
                    {e.cancel}
                  </p>
                  <p className="text-[13px] text-center font-[500]">Cancel</p>
                </div>
                <div>
                  <p className="text-[15px] text-center font-[500]">
                    {e.pending}
                  </p>
                  <p className="text-[13px] text-center font-[500]">Pending</p>
                </div>
                <div>
                  <p className="text-[15px] text-center font-[500]">
                    {e.mature}
                  </p>
                  <p className="text-[13px] text-center font-[500]">Mature</p>
                </div>
              </div>
            </div>
          );
        })}
        <div className="flex flex-col ">
            <div className=" flex items-center justify-between  flex-wrap gap-3 w-full lg:w-[220px]">
                <div className="w-[100px] shadow-lg px-3 py-2 relative rounded-2xl shadow-black/30 ">
                    <p className="font-[600] text-[24px]">0</p>
                    <p className="text-xs">Leads</p>
                    <img src="/assets/parcel.png" className="w-[25px] absolute top-2 right-4 z-50 object-contain" />
                </div>
                <div className="w-[100px] shadow-lg px-3 py-2 relative rounded-2xl shadow-black/30 ">
                    <p className="font-[600] text-[24px]">0</p>
                    <p className="text-xs">Quotes</p>
                    <img src="/assets/parcel.png" className="w-[25px] absolute top-2 right-4 z-50 object-contain" />
                </div>
                <div className="w-[100px] shadow-lg px-3 py-2 relative rounded-2xl shadow-black/30 ">
                    <p className="font-[600] text-[24px]">40</p>
                    <p className="text-xs">Pickup</p>
                    <img src="/assets/parcel.png" className="w-[25px] absolute top-2 right-4 z-50 object-contain" />
                </div>
                <div className="w-[100px] shadow-lg px-3 py-2 relative rounded-2xl shadow-black/30 ">
                    <p className="font-[600] text-[24px]">57</p>
                    <p className="text-xs">Delivery</p>
                    <img src="/assets/parcel.png" className="w-[25px] absolute top-2 right-4 z-50 object-contain" />
                </div>
            </div>
<div className="w-[220px] mt-3 hidden lg:flex flex-col items-center">
    <p className="font-[700] text-[15px]">MFI Movers: Expanding Financial Inclusion and Empowering Communities</p>
    <div className="flex text-xs items-center justify-between"><p>Dec 30 2021   EuroNews   4 min read</p>
    <div className="flex gap-2 items-center"><img src="/assets/notification.svg" className="w-[20px] z-50 object-contain"/><a href="#" className="py-1.5 px-4 text-xs bg-[#ECBC76] rounded-full">Unsubscribe</a></div></div>
    <img src="/assets/blog.png" className="w-full h-[80px]  object-cover"/>
    <a href="#" className="py-1.5 px-4 text-xs bg-[#ECBC76] mt-3 text-white text-center rounded-full">Read</a>
</div>
        </div>
      </div>
    </div> </>
  );
};

export default Home2;
