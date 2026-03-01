import { useLocation, useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";

const BookingConfirm = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="pb-24 flex justify-center">
        <div className="bg-white rounded-xl p-8 shadow-xl text-center text-gray-700">
          <p>No booking data found.</p>
          <button
            onClick={() => navigate("/my-booking")}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Go to My Bookings
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-24 flex justify-center">
      <div className="bg-white rounded-2xl p-8 shadow-xl max-w-xl w-full space-y-6 text-gray-900">
        <h1 className="text-2xl font-bold text-green-600">Booking Details</h1>

        <div className="space-y-2">
          <p>
            <strong>Booking ID:</strong> {state.id}
          </p>
          <p>
            <strong>Location:</strong>{" "}
            {state.location ||
              state.name ||
              state.parkingName ||
              "Not Available"}
          </p>
          <p>
            <strong>Address:</strong> {state.address}
          </p>
          <p>
            <strong>Date:</strong> {state.date}
          </p>
          <p>
            <strong>Time:</strong> {state.time}
          </p>
          <p>
            <strong>Price:</strong> {state.price}
          </p>
          <p>
            <strong>Status:</strong>{" "}
            <span className="text-green-600 font-semibold">{state.status}</span>
          </p>
        </div>

        {/* QR ONLY FOR ACTIVE BOOKINGS */}
        {state.status === "Active" && (
          <div className="flex justify-center mt-6">
            <QRCode value={JSON.stringify(state)} size={180} />
          </div>
        )}

        <p className="text-sm text-gray-500 text-center">
          Show this QR code at the parking entry gate.
        </p>
      </div>
    </div>
  );
};

export default BookingConfirm;
