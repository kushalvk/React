
function Home() {
  return (
      <div className="min-h-screen bg-gradient-to-r from-gray-400 to-gray-900 text-white p-8 w-full h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-6xl mx-auto text-center space-y-10">
          {/* Welcome Section */}
          <section className="mt-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Welcome to Your Home Page</h1>
            <p className="text-base sm:text-lg">
              Manage your profile and explore the available features.
            </p>
          </section>

          {/* Testimonials Section */}
          <section className="mt-16">
            <h2 className="text-xl font-bold mb-6">What Our Customers Say</h2>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md text-center max-w-xs">
                <p className="text-lg mb-4">&#34;The experience was amazing. Highly recommend!&#34;</p>
                <p className="font-semibold">John Doe</p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md text-center max-w-xs">
                <p className="text-lg mb-4">&#34;Comfortable rooms and great service. Will stay again!&#34;</p>
                <p className="font-semibold">Jane Smith</p>
              </div>
            </div>
          </section>
        </div>
      </div>
  );
}

export default Home;
