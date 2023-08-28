import React from "react";
import Sidebar from "../Components/Sidebar";


const cards=[
  {
    name:"Basic",
    price:"₹ 3,000",
    desc:"Capture ideas and find them quickly",
    bg:"#ECBC76",
    link:"#",
  },
  {
    name:"Standard",
    price:"₹ 8,000",
    desc:"Capture ideas and find them quickly",
    bg:"#fff",
    link:"#",
  },
  {
    name:"Classic",
    price:"₹ 8,000",
    desc:"Capture ideas and find them quickly",
    bg:"#fff",
    link:"#",
  },
  {
    name:"Premium",
    price:"₹ 8,000",
    desc:"Capture ideas and find them quickly",
    bg:"#fff",
    link:"#",
  },
]


const Subscription = () => {
  const [menuActive, setMenuActive] = React.useState(false);

  return (
    <div className="w-full min-h-screen pb-10 overflow-hidden">
      <div className=" relative bg-white flex flex-col text-white py-2  pl-[9%]">
        <img src="/assets/logo.png" className="w-[110px]  object-contain" />
      </div>
      <div className=" relative bg-[#402B6E] flex flex-col text-white py-3 items-center justify-center">
        {/* mobile menu ----------------------------------------------------------------------------- */}
        <div
          onClick={() => {
            setMenuActive(true);
          }}
          className="lg:hidden absolute left-0 text-black z-30 bg-[#ECBC76] top-3 sm:top-0 py-1 cursor-pointer px-2"
        >
          <img
            src="/assets/menu.png"
            className="lg:hidden w-[20px] h-[20px] object-contain"
          />
        </div>
        {/* mobile menu ----------------------------------------------------------------------------- */}
        <div className="h-full w-fit absolute left-0 top-0 flex items-center justify-center">
        {/* {menuActive && ( */}
          <div
            onClick={() => {
              setMenuActive(false);
            }}
            className="w-screen h-screen  z-30 relative"
          >
            {menuActive && <Sidebar />}
          </div>
        {/* // )} */}
      </div>
        <h2 className="font-[700] text-[23px] lg:text-[27px]">
          Choose Your Plan
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className=" text-[12.5px] sm:text-[14px] w-[80%] text-center lg:text-[16.5px] sm:mt-1">
          MFI Movers and Packers offers a comprehensive subscription plan
          tailored to meet the needs of individuals and businesses looking for
          reliable and efficient moving and packing services. With their
          subscription plan, customers can enjoy a range of benefits and
          convenience while entrusting their valuable possessions to a
          professional team.
        </p>
        {/* cards ---------------------------------------------------------------- */}
        <div className="w-full flex items-center justify-around my-5 gap-y-4 flex-wrap ">
          {cards.map((e,index)=>{return(

            <div key={index} className={`bg-[${e.bg}] shadow-sm shadow-black  rounded-[7px] px-2 py-1 max-w-[200px]`}>
<p className="text-[#402B6E] text-[32px] font-[700]">{e.name}c</p>
<p className="text-black text-[22px] font-[700]">{e.price}</p>
<p className="text-black text-[15px] ">{e.desc}</p>
<p className="text-black text-[15px] ">1 Years</p>
<a href={e.link}><button className="font-[600] text-[19px] self-center my-3 bg-[#402B6E] text-white py-2 px-8 rounded-[7px] ">
Get Started 
          </button></a>
</div>
  )})}
        </div>
        {/* cards ---------------------------------------------------------------- */}
        <div className="flex flex-col  justify-center w-full">
          <button className="font-[600] text-[19px] self-center mt-4 bg-[#402B6E] text-white py-2.5 w-[85vw] md:w-[34vw] rounded-[7px] ">
            MFI Bank Details
          </button>
          <p className="self-center mt-3 mb-7">Here are our bank details </p>
          <div className="flex flex-col w-full gap-4 px-10">
            <p className="font-[700] texat-[17px]">
              Account Holder Name: MOVERS FEDERATION OF INDIA
            </p>
            <p className="font-[700] text-[17px]">
              Account Number : 201003878904
            </p>
            <p className="font-[700] text-[17px]">IFSC Code: INDB0001015</p>
            <p className="font-[700] text-[17px]">Bank Name: INDUSLAND BANK</p>
            <p className="font-[700] text-[17px]">
              Branch Address:New Yelahanka, Bangalore - 560064, Karnataka India
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <img src="/assets/qr.png" className=" w-[300px] object-contain " />
            <div className="flex items-center justify-center flex-wrap gap-x-8">
            <img src="/assets/bhim.png" className=" w-[100px] object-contain " />
            <img src="/assets/gapy.png" className=" w-[100px] object-contain " />
            <img src="/assets/paytm.png" className=" w-[80px] object-contain " />
            <img src="/assets/phonepe.png" className=" w-[30px] object-contain " />
            </div>
            <button className="font-[600] text-[19px] self-center mt-4 bg-[#402B6E] text-white py-2 w-[85vw] md:w-[34vw] rounded-[7px] ">
            Scan QR 
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
