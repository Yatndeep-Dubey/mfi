import React from "react";
import InputForm from "../../Components/adminComponents/InputForm";
import AdminSidebar from "../../Components/adminComponents/AdminSidebar";


export default function Leads() {
    const [first, setfirst] = React.useState("")
    
    const PickupFormData = [
      {
        heading: "Service  Type",
        fields: [
          {
            isSelect: true,
            title: "Service type",
            placeholder: "PICKUP",
            type: "text",
            valueState: first,
            setValueState: setfirst,
          },
        ],
      },
      {
        heading: "Total  CFT",
        fields: [
          {
            isSelect: false,
            title: "CFT",
            placeholder: "Select service type",
            type: "text",
            valueState: first,
            setValueState: setfirst,
          },
        ],
      },
      {
        heading: "Partner",
        fields: [
          {
            isSelect: false,
            title: "City",
            placeholder: "City name",
            type: "text",
            valueState: first,
            setValueState: setfirst,
          },
          {
            isSelect: false,
            title: "source city",
            placeholder: "source city",
            type: "text",
            valueState: first,
            setValueState: setfirst,
          },
        ],
      },
      {
        heading: "Customer info",
        fields: [
          {
            isSelect: false,
            title: "Name",
            placeholder: "Name",
            type: "text",
            valueState: first,
            setValueState: setfirst,
          },
          {
            isSelect: false,
            title: "Email id",
            placeholder: "Email id",
            type: "email",
            valueState: first,
            setValueState: setfirst,
          },
          {
            isSelect: false,
            title: "Contact number",
            placeholder: "Contact number",
            type: "phone",
            valueState: first,
            setValueState: setfirst,
          },
          {
            isSelect: false,
            title: "Source City",
            placeholder: "Source City",
            type: "text",
            valueState: first,
            setValueState: setfirst,
          },
          {
            isSelect: false,
            title: "Dest. City",
            placeholder: "Dest. City",
            type: "text",
            valueState: first,
            setValueState: setfirst,
          },
         
        ],
      },
    ];


    return (
      <>
        <div className="w-full h-screen flex flex-col px-[1%] lg:px-[5%] py-[1%] ">
          <AdminSidebar/>
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
          <div className="lg:ml-[10%]  lg:w-[90%] h-full flex flex-wrap justify-center gap-x-10 gap-y-5 my-5">
            {/* {PickupFormData.map((e,index)=>{return(
                <InputForm key={index} data={e} />
            )})} */}
            <InputForm data={PickupFormData[0]} />
            <InputForm data={PickupFormData[1]} />
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-5 ">
              <div className="flex flex-col justify-between gap-x-10 gap-y-5 ">
                <InputForm data={PickupFormData[2]} />
                {/* <InputForm data={PickupFormData[4]} /> */}
                {/* <InputForm data={PickupFormData[5]} /> */}
              </div>
              <div>
                <InputForm data={PickupFormData[3]} />
              </div>
            </div>
            <div className=" w-[90vw] lg:w-[78%] 2xl:w-[55%] h-fit rounded-3xl shadow-black/30 shadow-md overflow-hidden">
              <div className="bg-[#C99457] text-white font-[700]  py-2 px-4">
                <p>Description</p>
              </div>
              <form className="px-6 py-5">
                <textarea
                  placeholder="description"
                  className="text-black w-full p-2 border border-black/50 rounded-md"
                />
              </form>
            </div>
            <div className=" w-[90vw] lg:w-[78%] 2xl:w-[55%] h-fit pb-10 ">
              <p className="text-[#808080] font-[700]">Terms and condition</p>
              <ul className="flex flex-col list-disc gap-3 mt-3 ml-5">
                <li>This form should be filled with correct details.</li>
                <li>If a particular city have more than one member, then discuss with the delivery partner and choose the most convenient one for yourself.</li>
                <li>The shipment must be under tracking surveillance for smooth delivery.</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
}
