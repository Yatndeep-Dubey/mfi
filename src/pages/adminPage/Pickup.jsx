import React from "react";
import InputForm from "../../Components/adminComponents/InputForm";
import AdminSidebar from "../../Components/adminComponents/AdminSidebar";


export default function Pickup() {
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
        heading: "Origin Address",
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
            title: "Pincode",
            placeholder: "Pincode",
            type: "number",
            valueState: first,
            setValueState: setfirst,
          },
        ],
      },
      {
        heading: "Destination info",
        fields: [
          {
            isSelect: false,
            title: "Search Address",
            placeholder: "Select service type",
            type: "text",
            valueState: first,
            setValueState: setfirst,
          },
          {
            isSelect: false,
            title: "Address",
            placeholder: "Select service type",
            type: "text",
            valueState: first,
            setValueState: setfirst,
          },
          {
            isSelect: false,
            title: "City",
            placeholder: "Enter your city",
            type: "text",
            valueState: first,
            setValueState: setfirst,
          },
          {
            isSelect: false,
            title: "State",
            placeholder: "Enter your state",
            type: "text",
            valueState: first,
            setValueState: setfirst,
          },
          {
            isSelect: false,
            title: "Country",
            placeholder: "",
            type: "text",
            valueState: first,
            setValueState: setfirst,
          },
          {
            isSelect: false,
            title: "Pincode",
            placeholder: "Pincode",
            type: "number",
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
            title: "Customer Name",
            placeholder: "Customer Name",
            type: "text",
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
        ],
      },
      {
        heading: "Origin Partner",
        fields: [
          {
            isSelect: false,
            title: "Origin service city",
            placeholder: "Enter your city",
            type: "text",
            valueState: first,
            setValueState: setfirst,
          },
          {
            isSelect: false,
            title: "Select source partner",
            placeholder: "Select source partner",
            type: "text",
            valueState: first,
            setValueState: setfirst,
          },
        ],
      },
      {
        heading: "Destination partner",
        fields: [
          {
            isSelect: false,
            title: "Destination Service Partner",
            placeholder: "Destination service partner",
            type: "text",
            valueState: first,
            setValueState: setfirst,
          },
          {
            isSelect: false,
            title: "Select Destination Partner",
            placeholder: "Select Destination Partner",
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
                <InputForm data={PickupFormData[4]} />
                <InputForm data={PickupFormData[5]} />
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
          </div>
        </div>
      </>
    );
}
