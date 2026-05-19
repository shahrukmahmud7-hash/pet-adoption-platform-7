"use client";

const HowAdoptionWorks = () => {
  return (
    <div className="min-h-screen bg-[#FFF8F3] py-16
     sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
         <div className="flex justify-start px-72 mb-16">
         <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">
          How <span className="text-orange-600">Adoption Works</span>
        </h1>
         </div>
      <div className="max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT CONTENT */}
          <div className="w-full min-w-0">
            <span className="inline-block bg-orange-100 text-orange-700
             text-xs sm:text-sm font-semibold px-4 py-2 rounded-full">
              Easy 4-Step Process
            </span>

            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl
             font-bold text-gray-900 leading-tight break-words">
              Bringing Home a <br className="hidden sm:block" />
              <span className="text-orange-600">
                Loving Companion
              </span>
            </h1>
            <p className="mt-6 text-gray-600 text-sm 
            sm:text-base leading-relaxed break-words max-w-xl">
              Our adoption process is designed to be simple, safe, and stress-free.
              We help connect caring families with pets looking for a forever home.
            </p>

            {/* MINI STATS */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-md
            ">
              <div className="bg-white rounded-2xl p-5 
              shadow-sm border border-orange-100
              ">
                <h3 className="text-2xl sm:text-3xl
                 font-bold text-orange-600
                 ">
                  2K+
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Successful Adoptions
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm
                border border-orange-100
                ">
                <h3 className="text-2xl sm:text-3xl
                 font-bold text-orange-600">
                  98%
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Happy Pet Families
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT TIMELINE */}
          <div className="relative w-full">

            {/* vertical line (ONLY DESKTOP) */}
            <div className="hidden lg:block absolute left-6 top-0 
            bottom-0 w-1 bg-orange-200 rounded-full">
           </div>

            <div className="space-y-6 sm:space-y-8">
              {/* STEP CARD */}
              {[
                {
                  title: "Search Available Pets",
                  desc: "Explore dogs, cats, and other pets available for adoption based on breed, age, and personality.",
                },
                {
                  title: "Connect With Shelter",
                  desc: "Contact the shelter or rescue center to learn more about your selected pet.",
                },
                {
                  title: "Complete Application",
                  desc: "Fill out a quick adoption application to ensure the best match.",
                },
                {
                  title: "Welcome Your New Friend",
                  desc: "Finalize the process and bring your new companion home safely.",
                },
              ].map((item, i) => (
                <div key={i} className="relative flex flex-col sm:flex-row gap-4 sm:gap-6">
                  {/* NUMBER */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 
                  rounded-full bg-orange-600 text-white flex items-center 
                  justify-center font-bold text-base sm:text-lg z-10">
                    {i + 1}
                  </div>

                  {/* CONTENT */}
                  <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md
                   border border-orange-100 w-full hover:shadow-lg transition">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}


            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 sm:mt-24 bg-orange-600 rounded-3xl
         px-6 sm:px-10 py-12 sm:py-14 text-center text-white
         ">
          <h2 className="text-2xl sm:text-4xl font-bold leading-tight">
            Your Future Best Friend is Waiting 🐾
          </h2>
          <p className="mt-5 text-sm sm:text-base
           text-orange-100 max-w-2xl mx-auto">
            Start your adoption journey today and give a rescued pet a loving home.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4
          ">
            <button className="bg-white text-orange-600 px-6
             py-3 rounded-full font-semibold
             ">
              Adopt a Pet
            </button>

            <button className="border border-white
             px-6 py-3 rounded-full font-semibold">
              Contact Shelter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowAdoptionWorks;