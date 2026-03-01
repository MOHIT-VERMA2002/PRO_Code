const paymentHistoryData = [
  {
    id: "TXN-1001",
    location: "City Center Parking",
    date: "20 Feb 2026",
    time: "4:00 PM - 6:00 PM",
    amount: "₹100",
    method: "UPI (PhonePe)",
    status: "Success",
  },
  {
    id: "TXN-1002",
    location: "Airport Parking",
    date: "18 Feb 2026",
    time: "9:00 AM - 12:00 PM",
    amount: "₹240",
    method: "Card",
    status: "Success",
  },
  {
    id: "TXN-1003",
    location: "Karol Bagh Parking",
    date: "15 Feb 2026",
    time: "6:00 PM - 8:00 PM",
    amount: "₹70",
    method: "Wallet (Paytm)",
    status: "Success",
  },
];

const PaymentHistory = () => {
  return (
    <div className="pb-24 text-black">
      <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-md 
                      rounded-2xl p-8 shadow-xl space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Payment History
          </h1>
          <p className="text-gray-600">
            View all your completed transactions.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left text-sm text-gray-700">
                <th className="p-3">Transaction ID</th>
                <th className="p-3">Location</th>
                <th className="p-3">Date & Time</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Method</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {paymentHistoryData.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50 text-sm"
                >
                  <td className="p-3 font-medium text-gray-800">
                    {item.id}
                  </td>
                  <td className="p-3">{item.location}</td>
                  <td className="p-3">
                    {item.date} <br />
                    <span className="text-gray-500">{item.time}</span>
                  </td>
                  <td className="p-3 font-semibold text-green-600">
                    {item.amount}
                  </td>
                  <td className="p-3">{item.method}</td>
                  <td className="p-3">
                    <span className="px-3 py-1 rounded-full 
                                     bg-green-100 text-green-700 text-xs">
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default PaymentHistory;