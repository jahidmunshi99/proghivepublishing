import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { Icons } from "../common/Icons";

export default function AccountMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => setOpen(!open);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      {/* Avatar Button */}
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
        aria-expanded={open}
      >
        <Icons.User />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-3 w-56 bg-white rounded-md shadow-lg  z-50">
          {/* Arrow */}
          <div className="absolute top-0 right-4 w-3 h-3 bg-white transform rotate-45 -translate-y-1/2 shadow-md"></div>

          <div className="py-1">
            <Link
              to="/dashboard/profile"
              onClick={() => setOpen(false)}
              className="flex gap-2 items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600 cursor-pointer"
            >
              <Icons.User size="18" /> Profile
            </Link>
            <Link
              to="/dashboard"
              onClick={() => setOpen(false)}
              className="flex gap-2 items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600 cursor-pointer"
            >
              <Icons.Dashboard size="18" /> My Dashboard{" "}
            </Link>
            <div className="border-t border-gray-200 my-1"></div>

            <button
              onClick={() => setOpen(false)}
              className="flex gap-2 items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600 cursor-pointer"
            >
              <Icons.Setting size="18" /> Settings
            </button>
            <button
              onClick={() => setOpen(false)}
              className="flex gap-2 items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600 cursor-pointer"
            >
              <Icons.Logout size="18" /> Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
