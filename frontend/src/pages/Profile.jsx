import { useState } from "react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Mohit Verma",
    email: "mohit@example.com",
    phone: "+91 8057XXXXXX",
    dob: "2002-05-15",
    gender: "Male",
    address: "Connaught Place",
    city: "Delhi",
    pincode: "110001",

    vehicleType: "Car",
    vehicleBrand: "Hyundai",
    vehicleNumber: "DL 01 AB 1234",
    vehicleColor: "White",
    fuelType: "Petrol",
    modelYear: "2022",

    memberSince: "Jan 2025",
    accountStatus: "Active",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full min-h-screen bg-white text-black">
      <div className="w-full bg-white/95 p-8 shadow-xl space-y-10">
        {/* HEADER */}
        <section className="px-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
          <p className="text-gray-600">
            Manage your personal and vehicle details.
          </p>
        </section>

        {/* PERSONAL INFO */}
        <section className="space-y-6 px-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Personal Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Full Name" name="name" value={profile.name} />
            <Input label="Email" name="email" value={profile.email} disabled />
            <Input label="Phone" name="phone" value={profile.phone} />

            <Input
              label="Date of Birth"
              name="dob"
              type="date"
              value={profile.dob}
            />

            <Select label="Gender" name="gender" value={profile.gender}>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </Select>

            <Input label="Address" name="address" value={profile.address} />
            <Input label="City" name="city" value={profile.city} />
            <Input label="Pincode" name="pincode" value={profile.pincode} />
          </div>
        </section>

        {/* VEHICLE DETAILS */}
        <section className="space-y-6 px-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Vehicle Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Select
              label="Vehicle Type"
              name="vehicleType"
              value={profile.vehicleType}
            >
              <option>Car</option>
              <option>Bike</option>
              <option>SUV</option>
            </Select>

            <Input
              label="Vehicle Brand"
              name="vehicleBrand"
              value={profile.vehicleBrand}
            />
            <Input
              label="Vehicle Number"
              name="vehicleNumber"
              value={profile.vehicleNumber}
            />
            <Input
              label="Vehicle Color"
              name="vehicleColor"
              value={profile.vehicleColor}
            />

            <Select label="Fuel Type" name="fuelType" value={profile.fuelType}>
              <option>Petrol</option>
              <option>Diesel</option>
              <option>Electric</option>
              <option>CNG</option>
            </Select>

            <Input
              label="Model Year"
              name="modelYear"
              value={profile.modelYear}
            />
          </div>
        </section>

        {/* ACCOUNT INFO */}
        <section className="space-y-4 px-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Account Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Info label="Member Since" value={profile.memberSince} />
            <Info label="Account Status" value={profile.accountStatus} />
          </div>
        </section>

        {/* ACTIONS */}
        <section className="flex justify-end gap-4 px-6">
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 
             text-white font-semibold text-lg 
             rounded-2xl shadow-lg 
             transition-all duration-300"
            >
              Edit Profile
            </button>
          ) : (
            <>
              <button
                onClick={() => setIsEditing(false)}
                className="px-6 py-3 border rounded-lg hover:bg-gray-100"
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

  // Reusable Components
  function Input({ label, name, value, type = "text", disabled = false }) {
    return (
      <div>
        <label className="text-sm text-gray-600">{label}</label>
        <input
          type={type}
          name={name}
          value={value}
          disabled={!isEditing || disabled}
          onChange={handleChange}
          className="w-full mt-1 px-4 py-3 border rounded-md disabled:bg-gray-100"
        />
      </div>
    );
  }

  function Select({ label, name, value, children }) {
    return (
      <div>
        <label className="text-sm text-gray-600">{label}</label>
        <select
          name={name}
          value={value}
          disabled={!isEditing}
          onChange={handleChange}
          className="w-full mt-1 px-4 py-3 border rounded-md disabled:bg-gray-100"
        >
          {children}
        </select>
      </div>
    );
  }

  function Info({ label, value }) {
    return (
      <div>
        <label className="text-sm text-gray-600">{label}</label>
        <div className="mt-1 px-4 py-3 border rounded-md bg-gray-100 text-gray-800">
          {value}
        </div>
      </div>
    );
  }
};

export default Profile;
