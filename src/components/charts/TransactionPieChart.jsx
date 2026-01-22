import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts";

const COLORS = {
  "E-Commerce": "#2563eb",
  Fintech: "#059669",
  Healthcare: "#22c55e",
  Education: "#f97316",
};

const TransactionPieChart = ({ data }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow  w-full   md:mb-0">
      <h2 className="text-sm font-semibold mb-3 text-gray-700">
        Transaction Category
      </h2>

      <div className="w-full h-73 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={90}
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
            >
              {data.map((item, index) => (
                <Cell key={index} fill={COLORS[item.name]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TransactionPieChart;
