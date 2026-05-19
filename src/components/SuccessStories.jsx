"use client";

const SuccessStoriesPage = () => {
  return (
    <section className="h-[90vh] bg-gradient-to-b from-white via-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="text-orange-600 text-sm font-semibold uppercase tracking-wide">
            Real Impact Stories
          </span>

          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-gray-900">
            Success <span className="text-orange-600">Stories</span>
          </h1>

          <p className="mt-5 text-gray-600 text-sm sm:text-base leading-relaxed">
            Every adoption has a story. These are real journeys of hope,
            healing, and unconditional love.
          </p>

        </div>

        {/* STORY GRID */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 relative overflow-hidden">

            <span className="inline-block text-xs font-medium bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
              Rescue Story
            </span>

            <h2 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-orange-600 transition">
              Bella & Ahmed
            </h2>

            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Bella was rescued from the street and now lives happily with Ahmed’s family.
            </p>

            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-orange-100 rounded-full blur-2xl opacity-40"></div>

          </div>

          {/* CARD 2 */}
          <div className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 relative overflow-hidden">

            <span className="inline-block text-xs font-medium bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
              Adoption Success
            </span>

            <h2 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-orange-600 transition">
              Max & Sarah
            </h2>

            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              After months in shelter care, Max finally found his forever home.
            </p>

            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-orange-100 rounded-full blur-2xl opacity-40"></div>

          </div>

          {/* CARD 3 */}
          <div className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 relative overflow-hidden">

            <span className="inline-block text-xs font-medium bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
              Happy Ending
            </span>

            <h2 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-orange-600 transition">
              Luna & Family
            </h2>

            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Luna brings daily joy, love, and energy to her new family.
            </p>

            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-orange-100 rounded-full blur-2xl opacity-40"></div>

          </div>

        </div>

        {/* CTA SECTION */}
        <div className="mt-20 bg-orange-50 border border-orange-100 rounded-3xl p-10 text-center">

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Want to Create Another Success Story? 🐾
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Your adoption can change a life forever. Be the reason a pet finds
            happiness, comfort, and a loving family.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-medium transition">
              Adopt Now
            </button>

            <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-full font-medium transition">
              Share Your Story
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SuccessStoriesPage;