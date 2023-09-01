import React from "react";

const Sidemenu = [
  {
    title: "Config",
    img: "/assets/menu1.png",
    href: "#",
  },
  {
    title: "Enquiry",
    img: "/assets/menu2.png",

    href: "#ikhjg",
  },
  {
    title: "Docs",
    img: "/assets/menu3.png",
    href: "#",
  },
  {
    title: "Board",
    img: "/assets/menu4.png",
    href: "#",
  },
  {
    title: "Track",
    img: "/assets/menu5.png",
    href: "#",
  },
  {
    title: "Theme",
    img: "/assets/menu6.png",
    href: "#",
  },
];
const Sidebar = () => {
  const [menuActive, setMenuActive] = React.useState(false);

  return (
    <>
      <div
        onClick={() => {
          {menuActive ?
            setMenuActive(false)
          :  setMenuActive(true)
          }
        }}
        className="lg:hidden pr-2 left-0 text-black w-fit bg-[#ECBC76] absolute top-[5%] z-50  py-1 cursor-pointer px-2"
      >
        <img
          src="/assets/menu.png"
          className="lg:hidden w-[20px] h-[20px] object-contain"
        />
      </div>

      <div
        className={`h-fit py-8 w-[60px] absolute top-[12%] bg-[#ECBC76] gap-7 ${
          menuActive ? "flex" : "hidden"
        }  lg:flex flex-col rounded-full z-50 mx-10 `}
      >
        {Sidemenu.map((e, index) => {
          return (
            <a href={e.href} key={index} className="">
              <div className="flex flex-col items-center justify-center  ">
                <img src={e.img} className="w-[20px] h-[20px] object-contain" />
                <p className="text-sm">{e.title}</p>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Sidebar;
