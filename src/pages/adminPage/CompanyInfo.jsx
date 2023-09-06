import React from "react";
import { LicenseTable } from "../../Components/adminComponents/LicenseTable";
import AdminSidebar from "../../Components/adminComponents/AdminSidebar";

const CompanyInfo = () => {
  const [menuActive, setMenuActive] = React.useState(false);
  const [first, setfirst] = React.useState("")
    
  const data = [
    {
      heading: "Fill in the Details",
      fields: [
        {
          isSelect: false,
          title: "Name",
          placeholder: "Enter you name",
          type: "text",
          valueState: first,
          setValueState: setfirst,
        },
        {
          isSelect: false,
          title: "Address Line 1",
          placeholder: "Address Line 1",
          type: "text",
          valueState: first,
          setValueState: setfirst,
        },
        {
          isSelect: false,
          title: "Address Line 2",
          placeholder: "Address Line 2",
          type: "text",
          valueState: first,
          setValueState: setfirst,
        },
        {
          isSelect: false,
          title: "Country",
          placeholder: "India",
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
          isSelect: true,
          title: "State",
          placeholder: "Enter your state",
          type: "text",
          valueState: first,
          setValueState: setfirst,
        },
        {
          isSelect: false,
          title: "Contact Number",
          placeholder: "Contact Number",
          type: "phone",
          valueState: first,
          setValueState: setfirst,
        },
        {
          isSelect: false,
          title: "Company Logo",
          placeholder: "Company Logo",
          type: "file",
          valueState: first,
          setValueState: setfirst,
        },
      ],
    },
  ]
  const [edit,setEdit]= React.useState(false)
  return (
    <div className="w-full h-fit lg:h-screen overflow-hidden">
      <AdminSidebar/>
   <LicenseTable edit={edit} setEdit={setEdit}/>
{edit &&     <div className="w-full h-screen flex items-center  justify-center absolute top-0 left-0 bg-black/30 z-50">
        <div className=" min-w-[90vw] max-w-[90vw] sm:min-w-[700px] h-[90vh] bg-white rounded-3xl shadow-black/30 shadow-md overflow-y-scroll">
      <div className="bg-[#C99457] text-center text-white font-[700]  py-2 px-4">
        <p>{data[0].heading}</p>
      </div>
      <form className="px-6 py-5">
        {data[0].fields.map((e, index) => {
          return (
            // <div key={index}>
            //   {e.isSelect ? (
            //     <div className="flex flex-col mb-3 ">
            //       <label className=" mb-0.5 text-[14px]">
            //         {e.title}<span className="text-red-600 ">*</span>
            //       </label>
            //       <select
            //         value={data.fields[0].valueState}
            //         onChange={(e) => {
            //           data.fields[0].setValueState(e.target.value);
            //         }}
            //         name={e.title}
            //         id={e.title}
            //         placeholder={e.placeholder}
            //         className="text-black p-2 border border-black/50 rounded-md"
            //       >
            //         <option>A</option>
            //         <option>B</option>
            //         <option>C</option>
            //       </select>
            //     </div>
            //   ) : (
                <div className="flex flex-col  mb-3 ">
                  <label className=" mb-0.5 text-[14px]">
                    {e.title}<span className="text-red-600 ">*</span>
                  </label>
                  <input
                    // value={data[0].fields[0].valueState}
                    // onChange={(e) => {
                    //   data.fields[0].setValueState(e.target.value);
                    // }}
                    type={e.type}
                    name={e.title}
                    id={e.title}
                    placeholder={e.placeholder}
                    className="text-black p-2 border border-black/50 rounded-md"
                  />
                </div>
              // )}
            // </div>
          );
        })}
         <button onClick={()=>{setEdit(false)}} className="bg-[#402B6E] ww-fulll text-white w-fit px-[15%] py-2.5 font-[600] rounded-md text-center">
              Save
              </button>
      </form>
    </div>
      </div>}
    </div>
  );
};

export default CompanyInfo;
