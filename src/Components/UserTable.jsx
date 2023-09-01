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

const TABLE_HEAD = [
  "User",
  "Username",
  "Phone",
  "Role",
  "Created on",
  "Status",
  "Action",
];

const TABLE_ROWS = [
  {
    name: "Ashish Bharadwaj",
    profile: "/assets/user.png",
    email: "onesitepackers@gmail.com",
    username: "mfibanglore2",
    phone: "9822760142",
    role: "Member",
    date: "9/06/2022",
    status: "Active",
  },
  {
    name: "Ashish Bharadwaj",
    profile: "/assets/user.png",
    email: "onesitepackers@gmail.com",
    username: "mfibanglore2",
    phone: "9822760142",
    role: "Member",
    date: "9/06/2022",
    status: "Active",
  },
  {
    name: "Ashish Bharadwaj",
    profile: "/assets/user.png",
    email: "onesitepackers@gmail.com",
    username: "mfibanglore2",
    phone: "9822760142",
    role: "Member",
    date: "9/06/2022",
    status: "Active",
  },
  {
    name: "Ashish Bharadwaj",
    profile: "/assets/user.png",
    email: "onesitepackers@gmail.com",
    username: "mfibanglore2",
    phone: "9822760142",
    role: "Member",
    date: "9/06/2022",
    status: "Active",
  },
  {
    name: "Ashish Bharadwaj",
    profile: "/assets/user.png",
    email: "onesitepackers@gmail.com",
    username: "mfibanglore2",
    phone: "9822760142",
    role: "Member",
    date: "9/06/2022",
    status: "Inactive",
  },
  {
    name: "Ashish Bharadwaj",
    profile: "/assets/user.png",
    email: "onesitepackers@gmail.com",
    username: "mfibanglore2",
    phone: "9822760142",
    role: "Member",
    date: "9/06/2022",
    status: "Inactive",
  },
  {
    name: "Ashish Bharadwaj",
    profile: "/assets/user.png",
    email: "onesitepackers@gmail.com",
    username: "mfibanglore2",
    phone: "9822760142",
    role: "Member",
    date: "9/06/2022",
    status: "Active",
  },
  {
    name: "Ashish Bharadwaj",
    profile: "/assets/user.png",
    email: "onesitepackers@gmail.com",
    username: "mfibanglore2",
    phone: "9822760142",
    role: "Member",
    date: "9/06/2022",
    status: "Inactive",
  },
  {
    name: "Ashish Bharadwaj",
    profile: "/assets/user.png",
    email: "onesitepackers@gmail.com",
    username: "mfibanglore2",
    phone: "9822760142",
    role: "Member",
    date: "9/06/2022",
    status: "Active",
  },
  {
    name: "Ashish Bharadwaj",
    profile: "/assets/user.png",
    email: "onesitepackers@gmail.com",
    username: "mfibanglore2",
    phone: "9822760142",
    role: "Member",
    date: "9/06/2022",
    status: "Inactive",
  },
];

export function UsersTable() {
    const [editUser,setEditUser]= React.useState(false)
  return (
    <Card className=" h-[200vh] lg:h-full w-full px-3 overflow-y-scroll rounded-md ">
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
              className="w-[40px] sm:w-[90px]  object-contain"
            />
          </div>
          <p className="bg-[#C99457] py-1 px-4 text-white font-[600]">
            MFI Users
          </p>

          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <Input
                className="py-1.5 outline-none pl-9 rounded-full"
                placeholder="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5 mt-2.5 ml-1" />}
              />
            </div>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-y-scroll w-full lg:w-[90%] lg:ml-[10%] rounded-3xl h-[70%] px-0">
        <table className="w-full min-w-max table-auto text-left  overflow-x-scroll lg:overflow-x-hidden ">
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
                    <div className="flex items-center gap-1">
                      <div><img
                          src="/assets/user.png"
                          className="rounded-full w-[44px] bg-gray-400  p-2 pb-1"
                        /></div>
                      <div>
                        <p className="font-[600] text-[15px]">{e.name}</p>
                        <p className=" text-[13px] text-[#ADADAD] ">{e.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semibold"
                    >
                      {e.username}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-[#6B04AB] bg-[#ECBC76] py-0.5 rounded-full text-center"
                    >
                      {e.phone}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold text-center text-[16.5px]"
                    >
                      {e.role}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className=" text-center text-[16.5px]"
                    >
                      {e.date}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className={`text-center rounded-md p-1 border ${
                        e.status === "Active"
                          ? "text-[#008767] border-green-700 bg-[#a6e7d8] "
                          : "text-red-700 border-red-700 bg-[#FFC5C5] "
                      }font-normal`}
                    >
                      {e.status}
                    </Typography>
                  </td>
                  <td className={` flex items-center gap-3 ${classes}`}>
                    <p onClick={()=>{setEditUser(true)}} ><img src="/assets/edit.svg" className="width-[10px] cursor-pointer object-contain " /></p>
                    <a href="#"><img src="/assets/delete.svg" className="width-[10px] cursor-pointer object-contain " /></a>
                    <a href="#"><img src="/assets/account.svg" className="width-[10px] cursor-pointer object-contain " /></a>
                    <a href="#"><img src="/assets/replay.png" className="width-[10px] cursor-pointer object-contain " /></a>
                  </td>
                  {/* <td className={classes}>
                      <Tooltip content="Edit User">
                        <IconButton variant="text">
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-end border-t border-blue-gray-50 p-4">
        <p className="bg-[#402B6E] text-white font-[600] cursor-pointer py-1 px-2 rounded-lg ">Delete All</p>
       
      </CardFooter>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <p className="text-xs md:text-sm">showing data 1 to 10 out of 100k results</p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button className="p-1 px-2.5 rounded-lg bg-[#A9592C] h-full w-full text-[13px] ">
              1
            </button>
            <button className="p-1 px-2.5 rounded-lg bg-black/40 h-full w-full text-[13px] ">
              2
            </button>
            <button className="p-1 px-2.5 rounded-lg bg-black/40 h-full w-full text-[13px] ">
              3
            </button>
            <button className="p-1 px-2.5 rounded-lg bg-black/40 h-full w-full text-[13px] ">
              4
            </button>
            <button className="p-1 px-2.5 rounded-lg bg-black/40 h-full w-full text-[13px] ">
              5
            </button>
            <button className="p-1 px-2.5 rounded-lg bg-black/40 h-full w-full text-[13px] ">
              6
            </button>
            <button className="p-1 px-2.5 rounded-lg bg-black/40 h-full w-full text-[13px] ">
              7
            </button>
          </div>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
