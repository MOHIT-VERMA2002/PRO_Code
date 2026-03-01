import { Link } from "react-router-dom";
import {
  FaUserFriends,
  FaSearch,
  FaShieldAlt,
  FaLightbulb,
} from "react-icons/fa";

import Pro1 from "../assets/Pro1.png";
import Pro2 from "../assets/Pro2.png";
import Pro3 from "../assets/Pro3.png";

const About = () => {
  return (
    <div className="pb-24">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-10 shadow-xl max-w-6xl mx-auto space-y-16">

        {/* HERO */}
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About ParkEase
          </h1>
          <p className="text-gray-600 text-lg">
            ParkEase solves one everyday problem —{" "}
            <span className="font-medium text-gray-800">
              finding parking without stress.
            </span>
          </p>
        </section>

        {/* MISSION & VISION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To simplify urban parking through smart technology that
              saves time and reduces congestion.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To become a core component of smart and sustainable cities.
            </p>
          </div>
        </section>

        {/* STORY */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Our Story
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              ParkEase began as an academic project to solve real parking
              challenges faced in busy urban areas.
            </p>
            <p>
              Over time, it evolved into a full smart parking system
              including booking, payments, QR entry, and partner support.
            </p>
            <p>
              Today, ParkEase is designed to be scalable and ready for
              real-world deployment.
            </p>
          </div>
        </section>

        {/* CORE VALUES WITH ICONS */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: <FaUserFriends />,
                title: "User First",
                desc: "Designed to reduce user effort and confusion.",
              },
              {
                icon: <FaSearch />,
                title: "Transparency",
                desc: "Clear pricing and real-time availability.",
              },
              {
                icon: <FaShieldAlt />,
                title: "Security",
                desc: "Secure payments and QR-based access.",
              },
              {
                icon: <FaLightbulb />,
                title: "Innovation",
                desc: "Continuous improvement using smart tech.",
              },
            ].map((v, i) => (
              <div
                key={i}
                className="border rounded-xl p-6 text-center"
              >
                <div className="text-3xl text-blue-600 mb-3 flex justify-center">
                  {v.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {v.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* USP */}
        <section className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            What Makes ParkEase Different?
          </h2>
          <p className="text-gray-700">
            ParkEase combines booking, real-time availability, digital
            payments, and QR-based entry into one seamless platform.
          </p>
        </section>

        {/* TEAM WITH IMAGES */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Meet the Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                name: "Project Lead",
                role: "System Design & Architecture",
                img: Pro1,
              },
              {
                name: "Frontend Developer",
                role: "UI / UX & React",
                img: Pro2,
              },
              {
                name: "Backend Developer",
                role: "API & Database",
                img: Pro3,
              },
            ].map((m, i) => (
              <div
                key={i}
                className="border rounded-xl p-6 text-center"
              >
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                />
                <h4 className="font-semibold text-gray-900">
                  {m.name}
                </h4>
                <p className="text-sm text-gray-600">
                  {m.role}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="flex flex-col md:flex-row justify-between items-center gap-6 border-t pt-8">
          <p className="text-gray-700">
            Have questions or want to share your experience?
          </p>

          <div className="flex gap-4">
            <Link
              to="/help"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            >
              Contact Us
            </Link>

            <Link
              to="/feedback"
              className="px-6 py-3 border rounded-lg text-gray-700 hover:bg-gray-100"
            >
              Give Feedback
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;