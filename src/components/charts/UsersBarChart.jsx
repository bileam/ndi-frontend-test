import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const UsersBarChart = ({ data }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow w-full">
      <h2 className="text-sm font-semibold mb-3 text-gray-700">
        Users per Month
      </h2>

      <div className="w-full h-65">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" fill="#2563eb" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UsersBarChart;
