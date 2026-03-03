import { useLocation, useNavigate } from "react-router-dom";

const BookingConfirm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const booking = location.state;

  // If user refreshes page or no state found
  if (!booking) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-semibold text-red-600">
          No Booking Data Found
        </h2>
        <button
          onClick={() => navigate("/my-bookings")}
          className="mt-4 px-4 py-2 bg-black text-white rounded-lg"
        >
          Back to My Bookings
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 p-6 text-black">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center text-gray-900">
          Booking Confirmation
        </h1>

        <div className="space-y-2 text-sm">
          <p>
            <strong>ID:</strong> {booking.id}
          </p>
          <p>
            <strong>Parking:</strong> {booking.name}
          </p>
          <p>
            <strong>Address:</strong> {booking.address}
          </p>
          <p>
            <strong>Date:</strong> {booking.date}
          </p>
          <p>
            <strong>Time:</strong> {booking.time}
          </p>
          <p>
            <strong>Price:</strong> {booking.price}
          </p>
          <p>
            <strong>Status:</strong>{" "}
            <span className="text-green-600 font-semibold">
              {booking.status}
            </span>
          </p>
        </div>

        {/* Show QR only if Active */}
        {booking.status === "Active" && (
          <div className="mt-6 text-center">
            <div className="w-40 h-40 mx-auto bg-gray-200 flex items-center justify-center rounded-lg">
              QR CODE
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Show this QR at parking entry
            </p>
          </div>
        )}

        <button
          onClick={() => navigate(-1)}
          className="w-full mt-6 
  bg-gradient-to-r from-emerald-500 to-teal-600
  text-white font-semibold text-lg
  py-3
  rounded-2xl
  shadow-lg
  hover:shadow-xl
  hover:scale-[1.02]
  active:scale-95
  transition-all duration-300"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default BookingConfirm;
