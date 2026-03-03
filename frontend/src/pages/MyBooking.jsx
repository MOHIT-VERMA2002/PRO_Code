import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialBookings = [
  {
    id: "BK-201",
    name: "City Center Parking",
    address: "Connaught Place, Delhi",
    price: "₹50 / hr",
    date: "25 Feb 2026",
    time: "10:00 AM - 12:00 PM",
    status: "Active",
  },
  {
    id: "BK-202",
    name: "Airport Parking",
    address: "IGI Airport Terminal 3",
    price: "₹80 / hr",
    date: "24 Feb 2026",
    time: "6:00 AM - 9:00 AM",
    status: "Active",
  },
  {
    id: "BK-203",
    name: "Karol Bagh Parking",
    address: "Ajmal Khan Road",
    price: "₹35 / hr",
    date: "20 Feb 2026",
    time: "4:00 PM - 6:00 PM",
    status: "Cancelled",
  },
  {
    id: "BK-204",
    name: "Rajiv Chowk Metro Parking",
    address: "Rajiv Chowk Metro Station",
    price: "₹30 / hr",
    date: "18 Feb 2026",
    time: "9:00 AM - 11:00 AM",
    status: "Completed",
  },
  {
    id: "BK-205",
    name: "Saket Mall Parking",
    address: "Select Citywalk, Saket",
    price: "₹60 / hr",
    date: "15 Feb 2026",
    time: "1:00 PM - 4:00 PM",
    status: "Completed",
  },
  {
    id: "BK-206",
    name: "Nehru Place Parking",
    address: "Nehru Place Market",
    price: "₹45 / hr",
    date: "14 Feb 2026",
    time: "11:00 AM - 1:00 PM",
    status: "Cancelled",
  },
  {
    id: "BK-207",
    name: "Lajpat Nagar Parking",
    address: "Central Market, Lajpat Nagar",
    price: "₹40 / hr",
    date: "13 Feb 2026",
    time: "5:00 PM - 7:00 PM",
    status: "Completed",
  },
  {
    id: "BK-208",
    name: "Dwarka Sector 21 Parking",
    address: "Dwarka Sector 21 Metro",
    price: "₹30 / hr",
    date: "12 Feb 2026",
    time: "8:00 AM - 10:00 AM",
    status: "Active",
  },
  {
    id: "BK-209",
    name: "Cyber City Parking",
    address: "DLF Cyber City, Gurugram",
    price: "₹70 / hr",
    date: "10 Feb 2026",
    time: "9:00 AM - 12:00 PM",
    status: "Completed",
  },
  {
    id: "BK-210",
    name: "South Extension Parking",
    address: "South Ex Part 1",
    price: "₹45 / hr",
    date: "9 Feb 2026",
    time: "6:00 PM - 8:00 PM",
    status: "Cancelled",
  },
  {
    id: "BK-211",
    name: "Vasant Kunj Parking",
    address: "DLF Promenade Mall",
    price: "₹65 / hr",
    date: "7 Feb 2026",
    time: "2:00 PM - 5:00 PM",
    status: "Completed",
  },
  {
    id: "BK-212",
    name: "Pitampura Parking",
    address: "Netaji Subhash Place",
    price: "₹40 / hr",
    date: "6 Feb 2026",
    time: "10:00 AM - 12:00 PM",
    status: "Active",
  },
];

const MyBooking = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState(initialBookings);

  return (
    <div className="min-h-[calc(100vh-80px)]">
      <div className="bg-white/95 rounded-2xl p-6 shadow-xl space-y-4">
        <h1 className="text-2xl font-bold text-gray-900">My Bookings</h1>

        {bookings.map((b) => (
          <div
            key={b.id}
            className="border rounded-xl p-4 flex flex-col md:flex-row md:justify-between gap-3"
          >
            {/* DETAILS */}
            <div>
              <h3 className="font-semibold text-gray-900">{b.name}</h3>
              <p className="text-sm text-gray-600">{b.address}</p>
              <p className="text-sm text-gray-500">
                {b.date} • {b.time}
              </p>
              <p className="text-sm font-medium text-green-600">{b.price}</p>
            </div>

            {/* ACTIONS */}
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  b.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : b.status === "Completed"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-red-100 text-red-700"
                }`}
              >
                {b.status}
              </span>

              <button
                onClick={() => navigate("/booking-confirm", { state: b })}
                className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-100 text-black"
              >
                {b.status === "Active" ? "View QR" : "View Details"}
              </button>

              {b.status === "Active" && (
                <button
                  onClick={() =>
                    setBookings((prev) =>
                      prev.map((x) =>
                        x.id === b.id ? { ...x, status: "Cancelled" } : x,
                      ),
                    )
                  }
                  className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBooking;
