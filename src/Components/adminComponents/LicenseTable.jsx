import { PencilIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";
import React from "react";
import { IoClose } from "react-icons/io5";
import AdminSidebar from "./AdminSidebar";

const TABLE_HEAD = [
  "License",
  "Avatar",
  "Name",
  "Address",
  "GST",
  "Pan",
  "QR",
  "Contact",
  " ",
];

const TABLE_ROWS = [
  {
    license: "/adminAssets/license.png",
    avatar: "/adminAssets/user.png",
    name: "Pick and track",
    address: "MFI Movers Buisness Park, #118 Singanayakanahalli Yelahanka Hobli Bangalore North, Near Navachethana School, Bangalore Karnataka 560064 India",
    gst: "29LQMPS3485A1Z6",
    pan: "LQMPS3485A",
    qr: "/adminAssets/qr.svg",
    contact: `9113651818
    9113651818`,
    edit: "/adminAssets/edit.svg",
  },
];

export function LicenseTable({edit,setEdit}) {
    const [editUser,setEditUser]= React.useState(false)
  return (
    <Card className=" h-[200vh] lg:h-full w-full px-3 overflow-y-scroll rounded-md ">
          <AdminSidebar/>
       {editUser && <div className="w-full h-screen bg-black/60 absolute z-50 left-0 flex items-center justify-center ">
            <div className="max-w-[600px] w-[90vw] bg-white rounded-md overflow-hidden">
                <div className="bg-[#402B6E] relative text-white font-[600] text-center py-2"><p>Edit User</p> <p><IoClose onClick={()=>{setEditUser(false)}} className="absolute cursor-pointer top-3 right-3" /></p> </div>
<div className="px-5"><label htmlFor="name" className="text-sm font-semibold">User name<span className="text-red-600 font-bold">*</span></label>
<input name="name" id="name" type="text" className="px-1 py-1 border border-black block w-full rounded-md " />
            </div>
<div className="px-5"><label htmlFor="Firstname" className="text-sm font-semibold">First name<span className="text-red-600 font-bold">*</span></label>
<input name="Firstname" id="Firstname" type="text" className="px-1 py-1 border border-black block w-full rounded-md " />
            </div>
<div className="px-5"><label htmlFor="lastname" className="text-sm font-semibold">Last name<span className="text-red-600 font-bold">*</span></label>
<input name="lastname" id="lastname" type="text" className="px-1 py-1 border border-black block w-full rounded-md " />
            </div>
<div className="px-5"><label htmlFor="email;" className="text-sm font-semibold">Email Id<span className="text-red-600 font-bold">*</span></label>
<input name="email" id="email" type="email" className="px-1 py-1 border border-black block w-full rounded-md " />
            </div>
<div className="px-5"><label htmlFor="phone" className="text-sm font-semibold">Phone number<span className="text-red-600 font-bold">*</span></label>
<input name="phone" id="phone" type="number" className="px-1 py-1 border border-black block w-full rounded-md " />
            </div>
<div className="px-5"><label htmlFor="Organization" className="text-sm font-semibold">Organization<span className="text-red-600 font-bold">*</span></label>
<select name="Organization" id="Organization" className="px-1 py-1 border border-black block w-full rounded-md " >
<option>A</option>
    <option>B</option>
    <option>C</option>
</select>
            </div>
<div className="px-5"><label htmlFor="photo" className="text-sm font-semibold">User photo<span className="text-red-600 font-bold">*</span></label>
<input name="photo" id="photo" type="file" className="px-1 py-1 border border-black block w-full rounded-md " />
            </div>
<div className="px-5"><label htmlFor="role" className="text-sm font-semibold">Role<span className="text-red-600 font-bold">*</span></label>
<select name="role" id="role"  className="px-1 py-1 border border-black block w-full rounded-md " >
    <option>A</option>
    <option>B</option>
    <option>C</option>
</select>
            </div>
            <div className="flex items-center justify-end gap-4 my-2 px-4 w-full">
                <button onClick={()=>{setEditUser(false)}} className="bg-[#6B04AB] rounded-md py-1 px-4 text-white">Save</button>
                <button className="bg-[#A19EA3] rounded-md py-1 px-4 text-white">Close</button>
            </div>
            </div>
        </div>}
      <CardHeader floated={false} shadow={false} className="rounded-none">
    
        <div className="md:mb-4 flex flex-col h-fit md:h-[30%] px-[10%] justify-between  md:mt-10 gap-2 md:gap-8 md:flex-row md:items-center">
          <div>
            <img
              src="/assets/logo.png"
              className="w-[80px] sm:w-[90px]  object-contain"
            />
          </div>

        </div>
      </CardHeader>
      <CardBody className=" overflow-scroll w-full lg:w-[90%] lg:ml-[10%] rounded-3xl h-[70%] px-0">
        
        <table className="w-full overflow-scroll min-w-max table-auto text-left border border-t-0 border-[#C99457]">
          <thead className="">
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 text-white bg-[#402B6E] p-2 "
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className=" leading-none text-center text-[17px] font-[500]"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map((e, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={index}>
                  <td className={classes}>
                  <Typography
                      variant="small"
                      color="blue-gray"
                      className=" flex justify-center"
                    >
                       <img
                          src={e.license}
                          className="rounded-full w-[44px] bg-gray-400  p-2 pb-1"
                        />   
                    </Typography>                
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="flex justify-center"
                    >
                       <img
                          src={e.avatar}
                          className="rounded-full w-[44px] bg-gray-400  p-2 pb-1"
                        />   
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className=""
                    >
                      {e.name}
                    </Typography>
                  </td>
                  <td className="w-[100px] text-center">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className=""
                    >
                      {e.address}
                    </Typography>
                  </td>
                  <td className=" text-center">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mr-4"
                    >
                      {e.gst}
                    </Typography>
                  </td>
                  <td className=" text-center">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className=""
                    >
                      {e.pan}
                    </Typography>
                  </td>
                  <td className="w-[100px] text-center">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className=""
                    >
                      <img
                          src={e.qr}
                          className=" w-[44px] p-2 pb-1"
                        />
                    </Typography>
                  </td>
                  <td className="w-[100px] text-center">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className=""
                    >
                      {e.contact}
                    </Typography>
                  </td>
                  <td className="w-[100px]  ">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className=""
                      onClick={()=>{setEdit(true)}}
                    >
                      <img
                          src={e.edit}
                          className=" w-[44px] p-2 pb-1 cursor-pointer "
                        />
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}
