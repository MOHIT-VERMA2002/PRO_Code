const Help = () => {
  return (
    <div className="pb-24">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-xl max-w-5xl mx-auto space-y-10">

        {/* HEADER */}
        <section>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Help & Support
          </h1>
          <p className="text-gray-600">
            Need help? Find answers to common questions below.
          </p>
        </section>

        {/* HOW IT WORKS */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            How ParkEase Works
          </h2>

          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Login to your ParkEase account</li>
            <li>Search for nearby parking locations</li>
            <li>Select a parking slot and complete payment</li>
            <li>Get a QR code for entry verification</li>
            <li>Park safely and exit hassle-free</li>
          </ol>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-gray-900">
                How do I book a parking slot?
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Go to the Book Parking page, choose a location, and confirm your booking.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-gray-900">
                Where can I see my booking details?
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                All your bookings are available on the My Bookings page.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-gray-900">
                What if the parking area is full?
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Parking Status page shows live availability before booking.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-gray-900">
                Can I cancel a booking?
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Yes, active bookings can be cancelled from My Bookings.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT SUPPORT */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Contact Support
          </h2>

          <div className="space-y-2 text-gray-700">
            <p>📧 Email: support@parkease.com</p>
            <p>📞 Phone: +91 9XXXXXXXXX</p>
            <p>⏰ Support Hours: 9 AM – 6 PM</p>
          </div>
        </section>

        {/* IMPORTANT NOTE */}
        <section className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
          <p className="text-sm text-yellow-800">
            ⚠️ In case of entry issues, please contact parking staff immediately.
          </p>
        </section>

      </div>
    </div>
  );
};

export default Help;