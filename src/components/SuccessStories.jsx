"use client";

const SuccessStoriesPage = () => {
  return (
    <div className=" min-h-screen  bg-[#FFF9F5] py-14 sm:py-20
     px-4 sm:px-6 lg:px-8 overflow-x-hidden
     ">
      <div className="max-w-7xl mx-auto">
        {/* HEADER + STATS (FIXED GRID INSTEAD OF FLEX) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start
        ">
          {/* LEFT */}
          <div className="w-full min-w-0">
            <span className="inline-block bg-orange-100 text-orange-700
             px-4 py-2 rounded-full text-xs sm:text-sm font-semibold
             ">
              Happy Adoption Journeys
            </span>
            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl
             font-bold text-gray-900 leading-tight break-words
             ">
              Stories That <br className="hidden sm:block" />
              <span className="text-orange-600">
                Changed Lives
              </span>
            </h1>

            <p className="mt-5 text-gray-600 text-sm 
            sm:text-base leading-relaxed break-words
            ">
              Every rescued pet carries a story of hope, healing, and love.
              These families opened their hearts and transformed lives forever.
            </p>
          </div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="bg-white rounded-2xl p-5 
            sm:p-6 shadow border border-orange-100
            ">
              <h2 className="text-2xl sm:text-3xl 
              font-bold text-orange-600">
                1.5K+
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Pets Rehomed
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 
              sm:p-6 shadow border border-orange-100">
              <h2 className="text-2xl sm:text-3xl font-bold text-orange-600">
                98%
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Adoption Success
              </p>
            </div>
          </div>
        </div>

        {/* STORIES */}
        <div className="mt-14 sm:mt-20 space-y-8">
          {/* CARD 1 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border
           border-orange-100 grid grid-cols-1 lg:grid-cols-[300px_1fr]
            gap-6 items-center
            ">
            <div className="h-[220px] bg-orange-100 rounded-2xl
             flex items-center justify-center text-6xl
             ">
              🐶
            </div>

            <div className="min-w-0">
              <span className="inline-block bg-orange-100 text-orange-700
               text-xs px-3 py-1 rounded-full font-semibold">
                Rescue Story
              </span>
              <h2 className="mt-4 text-2xl font-bold text-gray-900 break-words">
                Bella & Ahmed
              </h2>
              <p className="mt-3 text-gray-600 text-sm sm:text-base
                  leading-relaxed break-words">
                Bella was rescued from the streets during a storm and now lives happily with Ahmed’s family.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border
           border-orange-100 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 items-center
           ">

            <div className="min-w-0">
              <span className="inline-block bg-orange-100 text-orange-700
               text-xs px-3 py-1 rounded-full font-semibold
               ">
                Adoption Success
              </span>
              <h2 className="mt-4 text-2xl font-bold text-gray-900 break-words">
                Max & Sarah
              </h2>
              <p className="mt-3 text-gray-600 text-sm 
              sm:text-base leading-relaxed break-words
              ">
                Max finally found his forever home after months in shelter care.
              </p>
            </div>

            <div className="h-[220px] bg-orange-100 rounded-2xl
             flex items-center justify-center text-6xl
             ">
              🐱
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 
          shadow-lg border border-orange-100 grid grid-cols-1
           lg:grid-cols-[300px_1fr] gap-6 items-center
           ">
            <div className="h-[220px] bg-orange-100 rounded-2xl
             flex items-center justify-center text-6xl
         ">
              🐾
           </div>

            <div className="min-w-0">
              <span className="inline-block bg-orange-100 text-orange-700
               text-xs px-3 py-1 rounded-full font-semibold">
                Happy Ending
              </span>
              <h2 className="mt-4 text-2xl font-bold text-gray-900 break-words">
                Luna & Family
              </h2>
              <p className="mt-3 text-gray-600 text-sm 
              sm:text-base leading-relaxed break-words">
                Luna brings joy and love to her new family every single day.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 bg-orange-600 rounded-3xl
         px-6 sm:px-10 py-12 text-center text-white
         ">
          <h2 className="text-2xl sm:text-4xl font-bold leading-tight">
            Be Part of the Next Success Story 🐾
          </h2>
          <p className="mt-4 text-sm sm:text-base
           text-orange-100 max-w-2xl mx-auto">
            Open your heart to a rescued pet and create a lifetime of love.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-orange-600
             px-6 py-3 rounded-full font-semibold">
              Adopt Today
            </button>
            <button className="border border-white 
            px-6 py-3 rounded-full font-semibold">
              Share Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesPage; 