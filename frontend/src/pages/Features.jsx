import { useNavigate } from "react-router-dom";
import {
  FaMapMarkedAlt,
  FaCalendarCheck,
  FaQrcode,
  FaParking,
  FaCreditCard,
} from "react-icons/fa";

const Features = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Real-time Slot Availability",
      description:
        "Check available parking slots instantly on live maps.",
      icon: <FaMapMarkedAlt className="text-blue-600 text-3xl" />,
      path: "/book-parking",
    },
    {
      title: "Smart Booking",
      description:
        "Book parking in advance with hourly or monthly plans.",
      icon: <FaCalendarCheck className="text-green-600 text-3xl" />,
      path: "/book-parking",
    },
    {
      title: "Secure QR Entry",
      description:
        "Hassle-free entry using secure QR code verification.",
      icon: <FaQrcode className="text-purple-600 text-3xl" />,
      path: "/my-booking",
    },
    {
      title: "Live Parking Status",
      description:
        "View live occupancy and availability status of parking areas.",
      icon: <FaParking className="text-yellow-600 text-3xl" />,
      path: "/parking-status",
    },
    {
      title: "Digital Payments",
      description:
        "Fast and secure payments using UPI, cards, or wallets.",
      icon: <FaCreditCard className="text-red-600 text-3xl" />,
      path: "/payment-history",
    },
  ];

  return (
    <div className="pb-24">
      <div
        className="max-w-6xl mx-auto bg-white/95 backdrop-blur-md 
                   rounded-2xl p-10 shadow-xl"
      >
        {/* HEADER */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            ParkEase Features
          </h1>
          <p className="text-gray-600 mt-3">
            Smart solutions designed to simplify your parking experience.
          </p>
        </div>

        {/* FEATURE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => navigate(feature.path)}
              className="cursor-pointer bg-white border rounded-xl p-6 
                         shadow-md hover:shadow-xl 
                         transition transform hover:-translate-y-1"
            >
              <div className="mb-4">{feature.icon}</div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>

              <div className="mt-4 text-blue-600 font-medium text-sm">
                Explore →
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;