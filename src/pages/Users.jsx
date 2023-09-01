import React from "react";

import { UsersTable } from "../Components/UserTable";
import Sidebar from "../Components/Sidebar";

const Users = () => {
  const [menuActive, setMenuActive] = React.useState(false);

  return (
    <>
    <Sidebar/>
    <div className="w-full h-fit lg:h-screen overflow-hidden">
   <UsersTable/>
    </div>
    </>
  );
};

export default Users;
