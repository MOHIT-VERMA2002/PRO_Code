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
      description: "Check available parking slots instantly on live maps.",
      icon: <FaMapMarkedAlt className="text-blue-600 text-3xl" />,
      path: "/book-parking",
    },
    {
      title: "Smart Booking",
      description: "Book parking in advance with hourly or monthly plans.",
      icon: <FaCalendarCheck className="text-green-600 text-3xl" />,
      path: "/book-parking",
    },
    {
      title: "Secure QR Entry",
      description: "Hassle-free entry using secure QR code verification.",
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
      description: "Fast and secure payments using UPI, cards, or wallets.",
      icon: <FaCreditCard className="text-red-600 text-3xl" />,
      path: "/payment-history",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 pb-24">
      {/* FULL WIDTH CONTENT */}
      <div className="w-full px-6 md:px-12 lg:px-20 py-12">
        {/* HEADER */}
        <div className="mb-14 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            ParkEase Features
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Smart solutions designed to simplify your parking experience.
          </p>
        </div>

        {/* FEATURE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => navigate(feature.path)}
              className="cursor-pointer bg-white border rounded-xl p-8 
                         shadow-sm hover:shadow-xl 
                         transition duration-300 
                         transform hover:-translate-y-2"
            >
              <div className="mb-5">{feature.icon}</div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>

              <div className="mt-6 text-blue-600 font-medium text-sm">
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
