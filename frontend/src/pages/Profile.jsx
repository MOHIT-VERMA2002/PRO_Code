import { useState } from "react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Mohit Kumar",
    email: "mohit@example.com",
    phone: "+91 9XXXXXXXXX",
    vehicleType: "Car",
    vehicleNumber: "DL 01 AB 1234",
    vehicleColor: "White",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pb-24">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-xl max-w-4xl mx-auto space-y-8">

        {/* HEADER */}
        <section>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            My Profile
          </h1>
          <p className="text-gray-600">
            Manage your personal and vehicle details.
          </p>
        </section>

        {/* USER DETAILS */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">
            User Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                name="name"
                value={profile.name}
                disabled={!isEditing}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 border rounded-md text-gray-900 disabled:bg-gray-100"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                disabled
                className="w-full mt-1 px-4 py-3 border rounded-md bg-gray-100 text-gray-700"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Phone</label>
              <input
                type="text"
                name="phone"
                value={profile.phone}
                disabled={!isEditing}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 border rounded-md text-gray-900 disabled:bg-gray-100"
              />
            </div>
          </div>
        </section>

        {/* VEHICLE DETAILS */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Vehicle Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-gray-600">Vehicle Type</label>
              <select
                name="vehicleType"
                value={profile.vehicleType}
                disabled={!isEditing}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 border rounded-md text-gray-900 disabled:bg-gray-100"
              >
                <option>Car</option>
                <option>Bike</option>
                <option>SUV</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-600">Vehicle Number</label>
              <input
                type="text"
                name="vehicleNumber"
                value={profile.vehicleNumber}
                disabled={!isEditing}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 border rounded-md text-gray-900 disabled:bg-gray-100"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Vehicle Color</label>
              <input
                type="text"
                name="vehicleColor"
                value={profile.vehicleColor}
                disabled={!isEditing}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 border rounded-md text-gray-900 disabled:bg-gray-100"
              />
            </div>
          </div>
        </section>

        {/* ACTIONS */}
        <section className="flex justify-end gap-4">
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            >
              Edit Profile
            </button>
          ) : (
            <>
              <button
                onClick={() => setIsEditing(false)}
                className="px-6 py-3 border rounded-lg text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg"
              >
                Save Changes
              </button>
            </>
          )}
        </section>

      </div>
    </div>
  );
};

export default Profile;