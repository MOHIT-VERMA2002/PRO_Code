import { useState, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix leaflet marker issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// MOCK DATA
const parkingData = [
  {
    id: 1,
    name: "City Center Parking",
    address: "Connaught Place, Delhi",
    hourly: 50,
    monthly: 2500,
    position: [28.6315, 77.2167],
  },
  {
    id: 2,
    name: "Railway Station Parking",
    address: "New Delhi Railway Station",
    hourly: 40,
    monthly: 2000,
    position: [28.643, 77.2197],
  },
  {
    id: 3,
    name: "Airport Parking",
    address: "IGI Airport Terminal 3",
    hourly: 80,
    monthly: 4000,
    position: [28.5562, 77.1],
  },
  {
    id: 4,
    name: "Karol Bagh Parking",
    address: "Ajmal Khan Road, Karol Bagh",
    hourly: 35,
    monthly: 1800,
    position: [28.6512, 77.1905],
  },
  {
    id: 5,
    name: "Rajiv Chowk Metro Parking",
    address: "Rajiv Chowk Metro Station",
    hourly: 30,
    monthly: 1500,
    position: [28.6328, 77.2195],
  },
];

const BookParking = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [mode, setMode] = useState("HOURLY");
  const [booking, setBooking] = useState(null);

  const filteredParking = useMemo(() => {
    return parkingData.filter((p) =>
      `${p.name} ${p.address}`.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <>
      <div className="h-[calc(100vh-120px)] bg-white rounded-xl shadow-xl overflow-hidden flex">
        {/* MAP SECTION */}
        <div className="w-2/3 relative">
          {/* SEARCH + TOGGLE */}
          <div
            className="absolute top-4 left-20 z-[2000] pointer-events-auto 
                          flex items-center bg-white rounded-xl shadow-lg 
                          overflow-hidden w-[600px]"
          >
            {/* Search */}
            <div className="relative flex-1">
              <input
                type="text"
                placeholder={`Search ${mode === "HOURLY" ? "hourly" : "monthly"} parking...`}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-3 text-sm text-black 
                           placeholder-gray-500 outline-none"
              />
              <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>

            <div className="w-px h-10 bg-gray-200"></div>

            {/* Toggle */}
            <div className="flex bg-gray-50">
              <button
                onClick={() => setMode("HOURLY")}
                className={`px-6 py-3 text-sm font-medium transition 
                  ${
                    mode === "HOURLY"
                      ? "bg-green-500 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
              >
                🚗 Hourly
              </button>

              <button
                onClick={() => setMode("MONTHLY")}
                className={`px-6 py-3 text-sm font-medium transition 
                  ${
                    mode === "MONTHLY"
                      ? "bg-green-500 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
              >
                📅 Monthly
              </button>
            </div>
          </div>

          {/* MAP */}
          <MapContainer
            center={[28.6315, 77.2167]}
            zoom={11}
            className="h-full w-full"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {filteredParking.map((p) => (
              <Marker key={p.id} position={p.position}>
                <Popup>
                  <strong>{p.name}</strong>
                  <br />
                  {p.address}
                  <br />
                  <span className="text-green-600 font-semibold">
                    ₹
                    {mode === "HOURLY"
                      ? `${p.hourly} / hr`
                      : `${p.monthly} / month`}
                  </span>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-1/3 border-l bg-white overflow-y-auto">
          <h2 className="p-4 font-semibold text-gray-900 border-b">
            Available Parking ({filteredParking.length})
          </h2>

          {filteredParking.map((p) => (
            <div key={p.id} className="p-4 border-b hover:bg-gray-50">
              <h3 className="font-semibold text-gray-900">{p.name}</h3>
              <p className="text-sm text-gray-600">{p.address}</p>

              <p className="text-sm font-medium text-green-600 mt-1">
                ₹
                {mode === "HOURLY"
                  ? `${p.hourly} / hr`
                  : `${p.monthly} / month`}
              </p>

              <button
                onClick={() => setBooking(p)}
                className="mt-3 bg-blue-600 hover:bg-blue-700 
                           text-white px-4 py-2 rounded-lg text-sm"
              >
                Book Parking
              </button>
            </div>
          ))}
        </div>
      </div>

{/* BOOKING MODAL */}
{booking && (
  <div
    className="fixed inset-0 z-[9999] 
               bg-black/50 
               flex items-center justify-center"
  >
    {/* Modal Box */}
    <div
      className="bg-white rounded-2xl p-6 w-[420px] 
                 shadow-2xl relative animate-fadeIn"
    >
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        📍 Confirm Booking Details
      </h2>

      {/* Divider */}
      <div className="h-px bg-gray-200 mb-4"></div>

      {/* Booking Info */}
      <div className="space-y-2 text-sm text-gray-700">
        <p>
          <span className="font-medium text-gray-900">Location:</span>{" "}
          {booking.name}
        </p>

        <p>
          <span className="font-medium text-gray-900">Address:</span>{" "}
          {booking.address}
        </p>

        <p>
          <span className="font-medium text-gray-900">Plan:</span>{" "}
          {mode === "HOURLY" ? "Hourly Parking" : "Monthly Parking"}
        </p>

        <p className="text-green-600 font-semibold text-base mt-2">
          ₹{mode === "HOURLY"
            ? `${booking.hourly} / hr`
            : `${booking.monthly} / month`}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-6">
        <button
          onClick={() => setBooking(null)}
          className="flex-1 bg-gray-100 hover:bg-gray-200 
                     text-gray-700 py-2 rounded-lg transition"
        >
          Cancel
        </button>

        <button
          onClick={() =>
            navigate("/payment", {
              state: { booking, mode },
            })
          }
          className="flex-1 bg-blue-600 hover:bg-blue-700 
                     text-white py-2 rounded-lg transition"
        >
          Continue to Payment
        </button>
      </div>
    </div>
  </div>
)}
    </>
  );
};

export default BookParking;
