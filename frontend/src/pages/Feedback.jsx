import { useState } from "react";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [category, setCategory] = useState("Parking Experience");
  const [recommend, setRecommend] = useState("");
  const [checks, setChecks] = useState({
    easyBooking: false,
    clearNavigation: false,
    accurateAvailability: false,
    smoothEntry: false,
  });

  const handleCheckChange = (e) => {
    setChecks({ ...checks, [e.target.name]: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
    setRating(0);
    setComment("");
    setCategory("Parking Experience");
    setRecommend("");
    setChecks({
      easyBooking: false,
      clearNavigation: false,
      accurateAvailability: false,
      smoothEntry: false,
    });
  };

  return (
    <div className="pb-24">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-xl max-w-4xl mx-auto space-y-10">

        {/* HEADER */}
        <section>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Feedback
          </h1>
          <p className="text-gray-600">
            Your feedback helps us improve the ParkEase experience.
          </p>
        </section>

        {/* FEEDBACK FORM */}
        <form onSubmit={handleSubmit} className="space-y-8">

          {/* CATEGORY */}
          <section>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Feedback Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 border rounded-md text-gray-900"
            >
              <option>Parking Experience</option>
              <option>App Usability</option>
              <option>Payment Process</option>
              <option>QR Entry & Exit</option>
              <option>Other</option>
            </select>
          </section>

          {/* RATING */}
          <section>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rate your overall experience
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  className={`text-3xl ${
                    rating >= star ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>
          </section>

          {/* QUICK EXPERIENCE CHECK */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              What did you like?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="easyBooking"
                  checked={checks.easyBooking}
                  onChange={handleCheckChange}
                />
                Easy booking process
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="clearNavigation"
                  checked={checks.clearNavigation}
                  onChange={handleCheckChange}
                />
                Clear app navigation
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="accurateAvailability"
                  checked={checks.accurateAvailability}
                  onChange={handleCheckChange}
                />
                Accurate parking availability
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="smoothEntry"
                  checked={checks.smoothEntry}
                  onChange={handleCheckChange}
                />
                Smooth QR entry process
              </label>
            </div>
          </section>

          {/* RECOMMEND */}
          <section>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Would you recommend ParkEase to others?
            </label>
            <div className="flex gap-6">
              <label className="flex items-center text-black gap-2">
                <input
                  type="radio"
                  name="recommend"
                  value="Yes"
                  checked={recommend === "Yes"}
                  onChange={(e) => setRecommend(e.target.value)}
                />
                Yes
              </label>

              <label className="flex items-center text-black gap-2">
                <input
                  type="radio"
                  name="recommend"
                  value="No"
                  checked={recommend === "No"}
                  onChange={(e) => setRecommend(e.target.value)}
                />
                No
              </label>
            </div>
          </section>

          {/* COMMENT */}
          <section>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Comments
            </label>
            <textarea
              rows="4"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Tell us what we can improve..."
              className="w-full px-4 py-3 border rounded-md text-gray-900 focus:ring-2 focus:ring-blue-500"
              required
            />
          </section>

          {/* SUBMIT */}
          <section className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            >
              Submit Feedback
            </button>
          </section>

        </form>

        {/* NOTE */}
        <section className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
          <p className="text-sm text-blue-800">
            💡 Your feedback is reviewed by our team and helps improve parking services.
          </p>
        </section>

      </div>
    </div>
  );
};

export default Feedback;