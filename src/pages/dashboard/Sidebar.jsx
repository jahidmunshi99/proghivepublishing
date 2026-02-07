import { NavLink } from "react-router";
import { Icons } from "../../components/common/Icons";

const Sidebar = () => {
  return (
    <>
      {/* <!-- Profile Card --> */}
      <div className=" text-black gap-4 h-fit flex flex-col justify-between order-2 md:order-1 rounded border border-gray-200">
        <div className="rounded md:p-4 sm:p-2 flex flex-col items-center text-center">
          <div className="border border-gray-400 p-3 rounded-full">
            <Icons.User className="size-7 text-gray-600" />
          </div>

          <div className="mt-1 mb-5">
            <h2 className="font-bold text-lg pt-2">Jahid Munshi</h2>
            <p className="text-gray-500 text-sm">support@proghive.com</p>
          </div>

          <NavLink
            to="/dashboard"
            className="w-full flex items-center hover:bg-gray-200 py-2 rounded border border-gray-200 px-4 cursor-pointer"
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/dashboard/profile"
            className="w-full flex items-center hover:bg-gray-200 py-2 rounded border border-gray-200 px-4 my-2 cursor-pointer"
          >
            View Profile
          </NavLink>
          <button className="w-full flex items-center hover:bg-gray-200 py-2 rounded border border-gray-200 px-4 cursor-pointer">
            View Orders
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
