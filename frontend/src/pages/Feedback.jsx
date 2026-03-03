import { useState } from "react";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [cleanliness, setCleanliness] = useState(0);
  const [safety, setSafety] = useState(0);
  const [valueRating, setValueRating] = useState(0);

  const [comment, setComment] = useState("");
  const [recommend, setRecommend] = useState("");
  const [location, setLocation] = useState("");
  const [visitDate, setVisitDate] = useState("");
  const [visitTime, setVisitTime] = useState("");
  const [issueType, setIssueType] = useState("No Issues");
  const [contactEmail, setContactEmail] = useState("");

  const [submittedFeedbacks, setSubmittedFeedbacks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const inputStyle =
    "w-full border px-4 py-3 rounded-lg text-black " +
    "focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 transition";

  const resetForm = () => {
    setRating(0);
    setCleanliness(0);
    setSafety(0);
    setValueRating(0);
    setComment("");
    setRecommend("");
    setLocation("");
    setVisitDate("");
    setVisitTime("");
    setIssueType("No Issues");
    setContactEmail("");
    setEditIndex(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const feedbackData = {
      rating,
      cleanliness,
      safety,
      valueRating,
      comment,
      recommend,
      location,
      visitDate,
      visitTime,
      issueType,
      contactEmail,
      date: new Date().toLocaleString(),
    };

    if (editIndex !== null) {
      const updated = [...submittedFeedbacks];
      updated[editIndex] = feedbackData;
      setSubmittedFeedbacks(updated);
    } else {
      setSubmittedFeedbacks([feedbackData, ...submittedFeedbacks]);
    }

    resetForm();
  };

  const handleEdit = (fb, index) => {
    setRating(fb.rating);
    setCleanliness(fb.cleanliness);
    setSafety(fb.safety);
    setValueRating(fb.valueRating);
    setComment(fb.comment);
    setRecommend(fb.recommend);
    setLocation(fb.location);
    setVisitDate(fb.visitDate);
    setVisitTime(fb.visitTime);
    setIssueType(fb.issueType);
    setContactEmail(fb.contactEmail);
    setEditIndex(index);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (index) => {
    setSubmittedFeedbacks(submittedFeedbacks.filter((_, i) => i !== index));
  };

  const StarRating = ({ value, setValue }) => (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          type="button"
          key={star}
          onClick={() => setValue(star)}
          className={`text-2xl transition ${
            value >= star ? "text-green-600" : "text-gray-300"
          }`}
        >
          ★
        </button>
      ))}
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 pb-24 text-black">
      <div className="w-full px-6 md:px-16 py-16 space-y-16">
        {/* HEADER */}
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-green-700 mb-4">
            Share Your Experience
          </h1>
          <p className="text-gray-600 text-lg">
            Your feedback helps us improve parking quality, safety, and
            reliability for everyone using ParkEase.
          </p>
        </section>

        {/* INFO SECTION */}
        <section className="bg-white rounded-2xl shadow-md p-8 text-center">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">
            Why Your Feedback Matters
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Every review helps us enhance real-time slot accuracy, improve
            cleanliness standards, strengthen security measures, and optimize
            the overall parking experience across locations.
          </p>
        </section>

        {/* FORM */}
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <form onSubmit={handleSubmit} className="space-y-8">
            <input
              type="text"
              placeholder="Parking Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className={inputStyle}
              required
            />

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="date"
                value={visitDate}
                onChange={(e) => setVisitDate(e.target.value)}
                className={inputStyle}
                required
              />
              <input
                type="time"
                value={visitTime}
                onChange={(e) => setVisitTime(e.target.value)}
                className={inputStyle}
                required
              />
            </div>

            <div>
              <label className="font-semibold block mb-2 text-green-700">
                Overall Experience
              </label>
              <StarRating value={rating} setValue={setRating} />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="font-medium block mb-2 text-green-700">
                  Cleanliness
                </label>
                <StarRating value={cleanliness} setValue={setCleanliness} />
              </div>
              <div>
                <label className="block mb-2 font-medium text-green-700">
                  Safety
                </label>
                <StarRating value={safety} setValue={setSafety} />
              </div>
              <div>
                <label className="block mb-2 font-medium text-green-700">
                  Value for Money
                </label>
                <StarRating value={valueRating} setValue={setValueRating} />
              </div>
            </div>

            <select
              value={issueType}
              onChange={(e) => setIssueType(e.target.value)}
              className={inputStyle}
            >
              <option>No Issues</option>
              <option>Payment Problem</option>
              <option>Slot Not Available</option>
              <option>QR Entry Issue</option>
              <option>App Crash</option>
              <option>Other</option>
            </select>

            <div>
              <label className="block mb-3 font-semibold text-green-700">
                Would you recommend ParkEase?
              </label>
              <div className="flex gap-8">
                {["Yes", "No"].map((opt) => (
                  <label key={opt} className="flex items-center gap-2">
                    <input
                      type="radio"
                      value={opt}
                      checked={recommend === opt}
                      onChange={(e) => setRecommend(e.target.value)}
                      className="accent-green-600"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            <textarea
              rows="4"
              placeholder="Tell us more about your experience..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className={inputStyle}
              required
            />

            <input
              type="email"
              placeholder="Contact Email (Optional)"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              className={inputStyle}
            />

            <div className="flex justify-end gap-4">
              {editIndex !== null && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-3 border border-green-600 text-green-700 rounded-lg hover:bg-green-50 transition"
                >
                  Cancel
                </button>
              )}
              <button
                type="submit"
                className={`px-8 py-3 text-white rounded-lg shadow-lg transition ${
                  editIndex !== null
                    ? "bg-yellow-500 hover:bg-yellow-600"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >
                {editIndex !== null ? "Update Feedback" : "Submit Feedback"}
              </button>
            </div>
          </form>
        </div>

        {/* SUBMITTED FEEDBACK */}
        {submittedFeedbacks.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-green-700">
              Community Feedback
            </h2>

            {submittedFeedbacks.map((fb, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md p-6">
                <div className="flex justify-between mb-3">
                  <span className="font-semibold text-green-700">
                    {fb.location}
                  </span>
                  <span className="text-sm text-gray-500">{fb.date}</span>
                </div>

                <p>
                  <strong>Visit:</strong> {fb.visitDate} at {fb.visitTime}
                </p>
                <p>
                  <strong>Overall:</strong> {fb.rating} ⭐
                </p>
                <p>
                  <strong>Cleanliness:</strong> {fb.cleanliness} ⭐
                </p>
                <p>
                  <strong>Safety:</strong> {fb.safety} ⭐
                </p>
                <p>
                  <strong>Value:</strong> {fb.valueRating} ⭐
                </p>
                <p>
                  <strong>Issue:</strong> {fb.issueType}
                </p>
                <p>
                  <strong>Recommend:</strong> {fb.recommend}
                </p>
                <p className="mt-2">
                  <strong>Comment:</strong> {fb.comment}
                </p>

                <div className="flex justify-end gap-3 mt-4">
                  <button
                    onClick={() => handleEdit(fb, index)}
                    className="px-6 py-3 
             bg-gradient-to-r from-emerald-600 to-emerald-500 
             hover:from-emerald-700 hover:to-emerald-600
             text-white font-semibold 
             rounded-2xl shadow-md 
             transition-all duration-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
};

export default Feedback;
