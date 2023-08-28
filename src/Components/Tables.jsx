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

const TABLE_HEAD = [
  "Sr.No",
  "Date",
  "Origin Address",
  "Destination Address",
  "Date of packing",
  "Status",
  "View details",
];

const TABLE_ROWS = [
  {
    date: "10-05-2023",
    packDate: "10-05-2023",
    origin: "Air force station, Tabaram",
    destitation: "Air force station, Brahmpura",
    status: "Active",
    id: "TK5420302",
  },
  {
    date: "10-05-2023",
    packDate: "10-05-2023",
    origin: "Air force station, Tabaram",
    destitation: "Air force station, Brahmpura",
    status: "Active",
    id: "TK5420302",
  },
  {
    date: "10-05-2023",
    packDate: "10-05-2023",
    origin: "Air force station, Tabaram",
    destitation: "Air force station, Brahmpura",
    status: "Inctive",
    id: "TK5420302",
  },
  {
    date: "10-05-2023",
    packDate: "10-05-2023",
    origin: "Air force station, Tabaram",
    destitation: "Air force station, Brahmpura",
    status: "Active",
    id: "TK5420302",
  },
  {
    date: "10-05-2023",
    packDate: "10-05-2023",
    origin: "Air force station, Tabaram",
    destitation: "Air force station, Brahmpura",
    status: "Active",
    id: "TK5420302",
  },
  {
    date: "10-05-2023",
    packDate: "10-05-2023",
    origin: "Air force station, Tabaram",
    destitation: "Air force station, Brahmpura",
    status: "Inactive",
    id: "TK5420302",
  },
  {
    date: "10-05-2023",
    packDate: "10-05-2023",
    origin: "Air force station, Tabaram",
    destitation: "Air force station, Brahmpura",
    status: "Inactive",
    id: "TK5420302",
  },
  {
    date: "10-05-2023",
    packDate: "10-05-2023",
    origin: "Air force station, Tabaram",
    destitation: "Air force station, Brahmpura",
    status: "Active",
    id: "TK5420302",
  },
  {
    date: "10-05-2023",
    packDate: "10-05-2023",
    origin: "Air force station, Tabaram",
    destitation: "Air force station, Brahmpura",
    status: "Active",
    id: "TK5420302",
  },
  {
    date: "10-05-2023",
    packDate: "10-05-2023",
    origin: "Air force station, Tabaram",
    destitation: "Air force station, Brahmpura",
    status: "Active",
    id: "TK5420302",
  },
];

export function TransactionsTable() {
  return (
    <Card className="h-full w-full px-3 border rounded-md mt-5">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col h-[30%] justify-between  mt-10 gap-8 md:flex-row md:items-center">
          <div>
            <Typography color="blue-gray" className="text-[18px] font-bold">
            All Quatations
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <Input
              className="py-1.5 outline-none pl-7 rounded-md"
                placeholder="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5 mt-2 ml-1" />}
              />
            </div>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll h-[70%] px-0">
        <table className="w-full min-w-max table-auto text-left  overflow-x-scroll lg:overflow-x-hidden ">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
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
                    <div className="flex items-center gap-3">
                      {/* <Avatar
                          src={img}
                          alt={name}
                          size="md"
                          className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                        /> */}
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className=""
                      >
                        {index + 1}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {e.date}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {e.origin}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {e.destitation}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {e.packDate}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className={`text-center p-1 border ${
                        e.status === "Active"
                          ? "text-[#008767] border-green-700 bg-[#a6e7d8] "
                          : "text-red-700 border-red-700 bg-[#FFC5C5] "
                      }font-normal`}
                    >
                      {e.status}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className={` border font-[500] text-center p-1 ${
                        e.status === "Active"
                          ? "text-black border-blue-500 bg-[#c0dcff] "
                          : " bg-[#ebebeb] border-black/30 "
                      }`}
                    >
                      {e.id}
                    </Typography>
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
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <p>showing data 1 to 10 out of 100k results</p>
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
