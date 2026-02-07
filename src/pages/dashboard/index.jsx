import Main from "./Main";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="container mt-40 min-h-screen">
      <div className=" w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-15">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};

export default Dashboard;
