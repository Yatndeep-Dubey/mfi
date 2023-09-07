import React from "react";
import AdminSidebar from "../../Components/adminComponents/AdminSidebar";
import InputForm from "../../Components/adminComponents/InputForm";


export default function Delivery() {
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
        heading: "Destination Partner",
        fields: [
          {
            isSelect: false,
            title: "Destination service partne",
            placeholder: "Enter your city",
            type: "text",
            valueState: first,
            setValueState: setfirst,
          },
          {
            isSelect: true,
            title: "Select destination partner",
            placeholder: "Select destination partner",
            type: "text",
            valueState: first,
            setValueState: setfirst,
          },
        ],
      },
      {
        heading: "Transit details",
        fields: [
          {
            isSelect: false,
            title: "Truck Number",
            placeholder: "Destination service partner",
            type: "number",
            valueState: first,
            setValueState: setfirst,
          },
          {
            isSelect: false,
            title: "Tracking Link",
            placeholder: "Select Destination Partner",
            type: "text",
            valueState: first,
            setValueState: setfirst,
          },
          {
            isSelect: false,
            title: "Driver Contact*",
            placeholder: "",
            type: "phone",
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
                {/* ---------------------------------------------------------------------------------------------------------------- */}

                <div className=" min-w-[90vw] max-w-[90vw] sm:min-w-[400px] h-fit rounded-3xl shadow-black/30 shadow-md overflow-hidden">
                  <div className="bg-[#C99457] text-white font-[700]  py-2 px-4">
                    <p>Additional info</p>
                  </div>
                  <form className="px-6 py-5">
                    <div className="flex flex-col gap-4 w-full mb-5">
                      <div className="gap-3 flex items-center justify-between ">
                        <label htmlFor="HMS required">HMS required</label>
                        <input name="HMS required" type="checkbox" />
                      </div>
                      <div className="gap-3 flex items-center justify-between ">
                        <label htmlFor="Local Settling">Local Settling</label>
                        <input name="Local Settling" type="checkbox" />
                      </div>
                      <div className="gap-3 flex items-center justify-between ">
                        <label htmlFor="WareHouse Required">
                          WareHouse Required
                        </label>
                        <input name="WareHouse Required" type="checkbox" />
                      </div>
                      <div className="gap-3 flex items-center justify-between ">
                        <label htmlFor="Lift Available">Lift Available</label>
                        <input name="Lift Available" type="checkbox" />
                      </div>
                    </div>

                    <div className="flex flex-col  mb-3 ">
                      <label className=" mb-0.5 text-[14px]">
                        Floor Number<span className="text-red-600 ">*</span>
                      </label>
                      <input
                        type="number"
                        name="Floor Number"
                        id="Floor Number"
                        placeholder="Floor Number"
                        className="text-black p-2 border border-black/50 rounded-md"
                      />
                    </div>
                    <div className="flex flex-col  mb-3 ">
                      <label className=" mb-0.5 text-[14px]">
                        Man Power<span className="text-red-600 ">*</span>
                      </label>
                      <input
                        type="number"
                        name="Man Power"
                        id="Man Power"
                        placeholder="Man Power"
                        className="text-black p-2 border border-black/50 rounded-md"
                      />
                    </div>
                    <div className="flex flex-col  mb-3 ">
                      <label className=" mb-0.5 text-[14px]">
                        Tent. Delivery Date
                        <span className="text-red-600 ">*</span>
                      </label>
                      <input
                        type="date"
                        name="Tent. Delivery Date"
                        id="Tent. Delivery Date"
                        placeholder="Tent. Delivery Date"
                        className="text-black p-2 border border-black/50 rounded-md"
                      />
                    </div>
                  </form>
                </div>
                {/* ---------------------------------------------------------------------------------------------------------------- */}
                <InputForm data={PickupFormData[5]} />
              </div>
              <div className="flex flex-col justify-between gap-x-10 gap-y-5 ">
                <InputForm data={PickupFormData[3]} />
                <InputForm data={PickupFormData[4]} />
              </div>
            </div>
            <div className=" w-[90vw] sm:w-[53%] lg:w-[78%] 2xl:w-[55%] h-fit rounded-3xl shadow-black/30 shadow-md overflow-hidden">
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
