"use client";

const WhyAdoptPets = () => {
  return (
    <div  className="bg-gradient-to-b from-white via-gray-50 to-gray-100 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-orange-600 font-semibold
           text-sm uppercase">
            Animal Welfare Initiative
          </span>
          <h1 className="mt-3 text-3xl sm:text-5xl
           font-bold text-gray-900">
            Why Adopt <span className="text-orange-600">Pets?</span>
          </h1>
          <p className="mt-5 text-gray-600 text-sm sm:text-base">
            Adoption is more than a choice—it’s a commitment to saving lives and giving love.
          </p>
        </div>

        {/* FEATURES */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Save a Life", desc: "Give abandoned pets a second chance.", icon: "🐾" },
            { title: "Ethical Choice", desc: "Stop overbreeding and cruelty.", icon: "🌍" },
            { title: "Affordable Care", desc: "Low adoption cost.", icon: "💰" },
            { title: "Loyal Companions", desc: "Deep emotional bonding.", icon: "❤️" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition"
            >
              <div className="text-3xl">{item.icon}</div>
              <h3 className="mt-4 font-semibold text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 bg-orange-50 border border-orange-100
          rounded-2xl p-6 sm:p-10 text-center">
          <h2 className="text-xl sm:text-2xl font-bold">
            Every Pet Deserves a Loving Home 🏡
          </h2>

          <p className="mt-3 text-sm text-gray-600 max-w-xl mx-auto">
            Thousands of pets are waiting for you.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row 
          gap-4 justify-center">
            <button className="bg-orange-600 
            text-white px-6 py-3 rounded-full w-full sm:w-auto
            ">
              Start Adoption
            </button>
            <button className="border px-6 py-3 
            rounded-full w-full sm:w-auto">
              Support Shelter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyAdoptPets;