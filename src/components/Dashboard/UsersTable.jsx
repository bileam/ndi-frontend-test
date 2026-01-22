const UsersTable = ({ data }) => {
  return (
    <div className="w-full overflow-x-auto bg-white rounded-xl shadow">
      <h1 className="px-3 py-2 text-2xl">Jumlah user Pertahun</h1>
      <table className="min-w-full text-sm">
        <thead className="bg-gray-100 text-gray-600 ">
          <tr className="border-b">
            <th className="px-4 py-3 text-center">Bulan</th>
            <th className="px-4 py-3 text-center">Jumlah User</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index} className=" hover:bg-gray-50">
              <td className="px-4 py-3 font-medium text-center">
                {item.month}
              </td>
              <td className="px-4 py-3 text-center">{item.users}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
