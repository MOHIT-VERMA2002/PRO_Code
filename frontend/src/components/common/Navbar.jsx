import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { FaUserCircle, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  // 🔁 TEMP: simulate login (later from AuthContext)
  const isLoggedIn = true;

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    setOpen(false);
    // later: clear auth context / token
    navigate("/login");
  };

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <div className="grid grid-cols-2 gap-1">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
          <span className="text-xl font-bold text-white">ParkEase</span>
        </Link>

        {/* NAV LINKS */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          {[
            { name: "Home", path: "/" },
            { name: "Features", path: "/features" },
            { name: "About Us", path: "/about" },
            { name: "Parking Options", path: "/book-parking" },
            { name: "Location", path: "/parking-status" },
          ].map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `hover:underline transition ${
                    isActive ? "underline" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="relative" ref={dropdownRef}>
          {!isLoggedIn ? (
            <Link
              to="/login"
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            >
              Login
            </Link>
          ) : (
            <>
              {/* PROFILE ICON */}
              <button
                onClick={() => setOpen((prev) => !prev)}
                className="flex items-center gap-2 text-white"
              >
                <FaUserCircle size={28} />
                <FaChevronDown size={12} />
              </button>

              {/* DROPDOWN */}
              {open && (
                <div
                  className="absolute right-0 mt-3 w-60 bg-white 
                             rounded-xl shadow-lg overflow-hidden 
                             text-gray-800 border z-50"
                >
                  {/* PROFILE */}
                  <button
                    onClick={() => {
                      navigate("/profile");
                      setOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-gray-100"
                  >
                    <div className="font-medium">👤 Profile</div>
                    <div className="text-xs text-gray-500">
                      User Details • Car • Address
                    </div>
                  </button>

                  {/* MY BOOKINGS */}
                  <button
                    onClick={() => {
                      navigate("/my-booking");
                      setOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-gray-100"
                  >
                    📅 My Bookings
                  </button>

                  {/* PAYMENT HISTORY */}
                  <button
                    onClick={() => {
                      navigate("/payment-history");
                      setOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-gray-100"
                  >
                    💳 Payment History
                  </button>

                  <div className="border-t" />

                  {/* LOGOUT */}
                  <button
                    onClick={() => {
                      handleLogout();
                      setOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 
                               text-red-600 hover:bg-red-50"
                  >
                    🚪 Logout
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;