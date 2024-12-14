import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar";

const Sticky = () => {
  return (
    <div>
      {/* NAV */}
      <Navbar />
      {/* Outlet */}
      <Outlet />
      {/* footer */}
    </div>
  );
};

export default Sticky;
