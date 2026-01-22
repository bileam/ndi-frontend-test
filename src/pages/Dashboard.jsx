import { dashboardData } from "../data/dashboardData";
import UsersBarChart from "../components/charts/UsersBarChart";
import TransactionPieChart from "../components/charts/TransactionPieChart";
import Navbar from "../components/Navbar";
import Card from "../components/Dashboard/Card";
import UsersTable from "../components/Dashboard/UsersTable";
const { totalUsers, totalTransactions, totalRevenue } = dashboardData.summary;

// npm install recharts
const Dashboard = () => {
  const userLength = dashboardData.usersPerMonth.length;
  return (
    <div className=" bg-gray-100 flex-col flex gap-3">
      <Navbar />
      <div className="md:mt-26 mt-35 px-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-white gap-4">
        <Card
          data={totalUsers}
          title="Total Users"
          color="bg-linear-to-r from-blue-800 to-blue-400"
        />
        <Card
          title="Total Transaction"
          data={totalTransactions}
          color="bg-linear-to-r from-red-800 to-red-400"
        />
        <Card
          title="Total Revenue"
          data={totalRevenue}
          color="bg-linear-to-r from-green-800 to-green-400"
        />
      </div>

      <div className="px-9 md:px-5 flex  flex-col gap-2 ">
        <div className=" w-full order-2 mb-6 lg:md-0">
          <UsersTable data={dashboardData.usersPerMonth} />
        </div>
        <div className="md:flex-row flex flex-col gap-2 order-1  w-full">
          <UsersBarChart data={dashboardData.usersPerMonth} />
          <TransactionPieChart data={dashboardData.transactionCategory} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
