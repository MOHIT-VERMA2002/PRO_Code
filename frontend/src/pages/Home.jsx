import { useNavigate } from "react-router-dom";
import { useState } from "react";
import bgImage from "../assets/home.jpg";
import WhyChoose from "./WhyChoose";

const Home = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState("HOURLY"); // HOURLY | MONTHLY

  return (
    <>
    <div
      className="min-h-screen bg-cover bg-center relative flex items-center "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

      <div className="relative w-full max-w-7xl mx-auto px-12">
        <div className="max-w-2xl text-white">

          {/* Heading */}
          <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Smarter Parking{" "}
            <span className="text-gray-300">
              Starts Here.
            </span>
          </h1>

          <p className="text-lg text-gray-200 leading-relaxed mb-8">
            Reserve your parking space instantly with real-time availability
            <br />
            and secure digital access.
          </p>

          {/* Top Buttons */}
          <div className="flex gap-4 mb-10">
            <button
              onClick={() => navigate("/book-parking")}
              className="px-8 py-3 bg-[#0F172A] text-white font-semibold rounded-lg hover:bg-gray-800 transition shadow-lg"
            >
              Reserve Your Spot
            </button>

            <button
              onClick={() => navigate("/book-parking")}
              className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg border border-gray-300 hover:bg-gray-100 transition"
            >
              Explore Parking Options
            </button>
          </div>

          {/* Booking Card */}
          <div className="mt-10 w-[480px] bg-white shadow-lg rounded-xl overflow-hidden">

            {/* Tabs */}
            <div className="flex text-sm">
              <button
                onClick={() => setMode("HOURLY")}
                className={`flex-1 py-2 font-medium transition ${
                  mode === "HOURLY"
                    ? "bg-[#0F172A] text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Hourly/Daily
              </button>

              <button
                onClick={() => setMode("MONTHLY")}
                className={`flex-1 py-2 font-medium transition ${
                  mode === "MONTHLY"
                    ? "bg-[#0F172A] text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Monthly
              </button>
            </div>

            <div className="p-4 space-y-3">

              {/* Address */}
              <div>
                <label className="block text-xs text-gray-700 mb-1">
                  PARKING AT
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Address"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-1 focus:ring-[#0F172A]"
                />
              </div>

              {/* Conditional Section */}
              {mode === "HOURLY" ? (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-gray-700 mb-1">
                      ARRIVING ON
                    </label>
                    <input
                      type="datetime-local"
                      className="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-800 shadow-sm focus:outline-none focus:ring-1 focus:ring-[#0F172A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-700 mb-1">
                      LEAVING ON
                    </label>
                    <input
                      type="datetime-local"
                      className="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-800 shadow-sm focus:outline-none focus:ring-1 focus:ring-[#0F172A]"
                    />
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 p-3 rounded-md">
                  <p className="text-sm text-gray-800 font-medium">
                    Monthly parking gives you unlimited access for 30 days.
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    Ideal for offices, apartments, and daily commuters.
                  </p>
                </div>
              )}

              {/* Action Button */}
              <button
                onClick={() => navigate("/book-parking")}
                className="w-full bg-[#0F172A] text-white py-2 rounded-md text-sm font-medium hover:opacity-90 transition"
              >
                {mode === "HOURLY"
                  ? "Show Parking Spaces"
                  : "View Monthly Plans"}
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
          {/* SECTION BREAK */}
  <div className="h-24 "></div>

  {/* WHY CHOOSE */}
  <WhyChoose />
</>
  );
};

export default Home;