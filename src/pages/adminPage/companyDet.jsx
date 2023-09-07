import React from "react";
import InputForm from "../../Components/adminComponents/InputForm";
import AdminSidebar from "../../Components/adminComponents/AdminSidebar";


export default function CompanyDetails() {
    const [first, setfirst] = React.useState("")
    
    const PickupFormData = [
      {
        heading: "Company Details",
        fields: [
          {
            isSelect: false,
            title: "Company Name",
            placeholder: "Username or email address",
            type: "text",
            valueState: first,
            setValueState: setfirst,
          },
          {
            isSelect: false,
            title: "Billing Address",
            placeholder: "Billing Address",
            type: "text",
            valueState: first,
            setValueState: setfirst,
          },
          {
            isSelect: false,
            title: "Branch GST Number",
            placeholder: "GST Number",
            type: "text",
            valueState: first,
            setValueState: setfirst,
          },
          {
            isSelect: false,
            title: "Contact  Numbe",
            placeholder: "Contact  Numbe",
            type: "number",
            valueState: first,
            setValueState: setfirst,
          },
          {
            isSelect: false,
            title: "Alternate Number",
            placeholder: "Alternate Number",
            type: "number",
            valueState: first,
            setValueState: setfirst,
          },
          {
            isSelect: false,
            title: "Upload QR",
            placeholder: "Upload QR",
            type: "file",
            valueState: first,
            setValueState: setfirst,
          },
         
        ],
      },
      {
        heading: "Bank Details",
        fields: [
          {
            isSelect: false,
            title: "Account Holder Name",
            placeholder: "Account Holder Name",
            type: "text",
            valueState: first,
            setValueState: setfirst,
          },
          {
            isSelect: false,
            title: "IFSC Code",
            placeholder: "IFSC Code",
            type: "text",
            valueState: first,
            setValueState: setfirst,
          },
          {
            isSelect: false,
            title: "Branch Name",
            placeholder: "Branch Name",
            type: "text",
            valueState: first,
            setValueState: setfirst,
          },
          {
            isSelect: false,
            title: "Account Number",
            placeholder: "Account Number",
            type: "number",
            valueState: first,
            setValueState: setfirst,
          },
          {
            isSelect: false,
            title: "UPI ID",
            placeholder: "UPI ID",
            type: "text",
            valueState: first,
            setValueState: setfirst,
          },
          {
            isSelect: false,
            title: "Upload QR",
            placeholder: "Upload QR",
            type: "file",
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
          <div className="flex flex-col sm:flex-row mb-2 items-center justify-between relative ">
            <div>
              <img
                className="object-contain w-[110px] "
                src="/adminAssets/logo.png"
                alt="logo"
              />
            </div>
            <button className="bg-[#402B6E] hidden lg:block text-white w-fit px-4 py-1.5 font-[600] rounded-md text-center">
            Save
            </button>
            <div className="w-full lg:absolute left-0 top-0 flex items-center my-2 justify-center">
              <div className="bg-[#402B6E] text-white w-fit px-14 py-2.5 font-[600] rounded-md text-center">
              COMPANY INFORMATION
              </div>
            </div>
            <button className="bg-[#402B6E] lg:hidden text-white w-fit px-4 py-1.5 font-[600] rounded-md text-center">
            Save
            </button>
          </div>
          {/* header------------------------------------------------------------------------ */}
          <div className="lg:ml-[5%]  lg:w-[95%] h-fit flex flex-wrap justify-around gap-x-10 gap-y-5 my-5 ">
            {PickupFormData.map((e,index)=>{return(
                <InputForm key={index} data={e} />
            )})}
          </div>
          <div className=" flex items-center justify-center pb-10">
              <button className="bg-[#402B6E] text-white w-fit px-[15%] py-2.5 font-[600] rounded-md text-center">
              Save
              </button>
            </div>
        </div>
      </>
    );
}
