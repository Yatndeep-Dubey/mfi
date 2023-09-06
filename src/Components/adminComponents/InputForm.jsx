import React from "react";

const InputForm = ({ data }) => {
  return (
    <div className=" min-w-[90vw] max-w-[90vw] sm:min-w-[400px] bg-white h-fit rounded-3xl shadow-black/30 shadow-md overflow-hidden">
      <div className="bg-[#C99457] text-white font-[700]  py-2 px-4">
        <p>{data.heading}</p>
      </div>
      <form className="px-6 py-5">
        {data.fields.map((e, index) => {
          return (
            <div key={index}>
              {e.isSelect ? (
                <div className="flex flex-col mb-3 ">
                  <label className=" mb-0.5 text-[14px]">
                    {e.title}<span className="text-red-600 ">*</span>
                  </label>
                  <select
                    value={data.fields[0].valueState}
                    onChange={(e) => {
                      data.fields[0].setValueState(e.target.value);
                    }}
                    name={e.title}
                    id={e.title}
                    placeholder={e.placeholder}
                    className="text-black p-2 border border-black/50 rounded-md"
                  >
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                  </select>
                </div>
              ) : (
                <div className="flex flex-col  mb-3 ">
                  <label className=" mb-0.5 text-[14px]">
                    {e.title}<span className="text-red-600 ">*</span>
                  </label>
                  <input
                    value={data.fields[0].valueState}
                    onChange={(e) => {
                      data.fields[0].setValueState(e.target.value);
                    }}
                    type={e.type}
                    name={e.title}
                    id={e.title}
                    placeholder={e.placeholder}
                    className="text-black p-2 border border-black/50 rounded-md"
                  />
                </div>
              )}
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default InputForm;
