import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login();
    navigate("/", { replace: true });
  };

  return (
    <div className="min-h-screen flex">

      {/* LEFT IMAGE */}
      <div className="hidden lg:block lg:w-[62%] relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/WhatsApp_Image_2026-02-18_at_12.31.15_PM.jpeg"
            alt="Luxury parking"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent"></div>
        </div>

        {/* LOGO */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 z-10 flex items-center gap-5">
          <div className="grid grid-cols-2 gap-2">
            <div className="w-8 h-8 rounded-full bg-red-600"></div>
            <div className="w-7 h-10 rounded-full bg-yellow-400"></div>
            <div className="w-7 h-10 rounded-full bg-blue-600"></div>
            <div className="w-8 h-8 rounded-full bg-emerald-500"></div>
          </div>

          <div className="flex flex-col">
            <span className="text-4xl font-extrabold text-white tracking-wide leading-none">
              PARK
            </span>
            <span className="text-4xl font-light text-white tracking-[0.35em] leading-none">
              SMART
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="w-full lg:w-[38%] flex items-center justify-center p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="w-full max-w-md">

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-100">

            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Sign in to Your Account
            </h2>
            <p className="text-gray-600 mb-6">
              Welcome back! Please enter your details
            </p>

            {/* GOOGLE BUTTON */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition font-medium mb-6"
            >
              <FcGoogle size={22} />
              Sign in with Google
            </button>

            {/* DIVIDER */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">
                  or Sign in with Email
                </span>
              </div>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">

              {/* EMAIL */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="mail@website.com"
                  required
                  className="w-full mt-1 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Password *
                </label>
                <div className="relative mt-1">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    required
                    className="w-full p-3 border rounded-lg outline-none pr-10 focus:ring-2 focus:ring-emerald-500 text-gray-900"
                  />
                  <span
                    className="absolute right-3 top-3 cursor-pointer text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible size={20} />
                    ) : (
                      <AiOutlineEye size={20} />
                    )}
                  </span>
                </div>
              </div>

              {/* REMEMBER + FORGOT */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input type="checkbox" className="accent-emerald-600" />
                  Remember me
                </label>

                <Link
                  to="/forgot-password"
                  className="text-sm text-emerald-600 hover:text-emerald-700 font-semibold"
                >
                  Forgot password?
                </Link>
              </div>

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold shadow-lg transition"
              >
                Sign in
              </button>

              {/* SIGNUP */}
              <p className="text-center text-sm text-gray-600 mt-1">
                Not registered yet?{" "}
                <Link
                  to="/signup"
                  className="text-emerald-600 hover:text-emerald-700 font-semibold"
                >
                  Create an Account
                </Link>
              </p>

            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;