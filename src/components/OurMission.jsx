"use client";

const OurMissionPage = () => {
  return (
    <div className="relative bg-gradient-to-b from-gray-50 via-white to-gray-100
     py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden
     ">

      {/* subtle background decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-10 left-10 w-40 h-40
         bg-orange-200 rounded-full blur-3xl
         ">    
        </div>
       <div className="absolute bottom-10 right-10
         w-40 h-40 bg-gray-300 rounded-full blur-3xl
         ">      
         </div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* BADGE */}
        <span className="inline-block bg-orange-100 text-orange-700 
        text-xs sm:text-sm font-semibold px-4 py-2 rounded-full
        ">
          Animal Welfare Commitment
        </span>

        {/* TITLE */}
        <h1 className="mt-6 text-3xl sm:text-5xl 
        font-bold text-gray-900 leading-tight
        ">
          Our <span className="text-orange-600">Mission
       </span>
     </h1>

        {/* DESCRIPTION */}
        <p className="mt-6 text-gray-600 text-sm sm:text-base
         leading-relaxed max-w-3xl mx-auto
         ">
          We are dedicated to creating a world where every pet lives in safety, love, and dignity.
          Through rescue programs, adoption awareness, and community education,
          we aim to reduce stray suffering and build a compassionate society.
        </p>

        {/* CORE VALUES */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2
         lg:grid-cols-3 gap-6 text-left
         ">

          {/* CARD 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm 
          hover:shadow-xl transition border border-gray-100
          ">
            <div className="text-3xl">🌍</div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Global Animal Welfare
            </h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Protect and improve the lives of animals through rescue and advocacy.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm 
          hover:shadow-xl transition border border-gray-100
          ">
            <div className="text-3xl">🏠</div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Safe & Loving Homes
            </h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Ensuring every rescued pet finds a permanent, caring family.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm 
           hover:shadow-xl transition border border-gray-100
          ">
            <div className="text-3xl">❤️</div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Compassion First
            </h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Promoting kindness, empathy, and responsible pet ownership.
            </p>
          </div>
        </div>

        {/* IMPACT SECTION */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">

          <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-orange-600">5K+</h2>
            <p className="text-sm text-gray-600 mt-2">Animals Rescued</p>
          </div>

          <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-orange-600">2K+</h2>
            <p className="text-sm text-gray-600 mt-2">Successful Adoptions</p>
          </div>

          <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-orange-600">98%</h2>
            <p className="text-sm text-gray-600 mt-2">Positive Outcomes</p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-16 bg-orange-600 
          text-white rounded-3xl p-10 text-center
          ">

          <h2 className="text-2xl sm:text-4xl font-bold">
            Join Our Mission 🐾
          </h2>

          <p className="mt-4 text-sm sm:text-base 
          text-orange-100 max-w-2xl mx-auto
          ">
            Be part of the change. Adopt, support, or spread awareness to help animals in need.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row 
          gap-4 justify-center
          ">
            <button className="bg-white text-orange-600 px-6
             py-3 rounded-full font-semibold w-full sm:w-auto
             ">
              Adopt Now
            </button>
            <button className="border border-white px-6 
            py-3 rounded-full font-semibold w-full sm:w-auto
            ">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMissionPage;