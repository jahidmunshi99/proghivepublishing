import { Outlet } from "react-router";
const Main = () => {
  return (
    <>
      <div className="md:col-span-3 text-black order-1 md:order-2">
        <Outlet />
      </div>
    </>
  );
};

export default Main;
