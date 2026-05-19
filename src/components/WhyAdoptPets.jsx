"use client";


const WhyAdoptPets = () => {
  return (
    <section className=" bg-gradient-to-r  bg-gradient-to-b from-white via-gray-50 to-gray-100 py-20
       h-[90vh]  mt-6 px-4 sm:px-6 lg:px-8">

      <div className="max-w-6xl mx-auto">

        {/* HERO HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-orange-600 font-semibold 
          text-sm tracking-wide uppercase">
            Animal Welfare Initiative
          </span>

          <h1 className="mt-3 text-4xl sm:text-5xl 
          font-bold text-gray-900 leading-tight">
            Why Adopt <span className="text-orange-600">Pets?</span>
          </h1>

          <p className="mt-5 text-gray-600 
          text-sm sm:text-base leading-relaxed">
            Adoption is more than a choice—it’s a commitment to saving lives,
            reducing cruelty, and giving animals the loving homes they deserve.
          </p>
        </div>

        {/* FEATURE GRID */}
        <div className="mt-16 grid grid-cols-1 
        sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            {
              title: "Save a Life",
              desc: "Give abandoned pets a second chance at happiness.",
              icon: "🐾",
            },
            {
              title: "Ethical Choice",
              desc: "Help stop overbreeding and unethical pet trade.",
              icon: "🌍",
            },
            {
              title: "Affordable Care",
              desc: "Adoption costs are minimal compared to buying.",
              icon: "💰",
            },
            {
              title: "Loyal Companions",
              desc: "Adopted pets form deep emotional bonds.",
              icon: "❤️",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl 
               p-6 shadow-sm hover:shadow-xl transition duration-300"
            >
              <div className="text-3xl">{item.icon}</div>

              <h3 className="mt-4 font-semibold text-gray-900 text-lg">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* INFO BANNER */}
        <div className="mt-16 bg-orange-50 border 
        border-orange-100 rounded-2xl p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Every Pet Deserves a Loving Home 🏡
          </h2>

          <p className="mt-3 text-sm text-gray-600 max-w-2xl mx-auto">
            Thousands of pets are waiting in shelters. Your adoption can change
            a life forever and bring unconditional love to your home.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <div
        
              className="bg-orange-600 hover:bg-orange-700
               text-white px-6 py-3 rounded-full font-medium transition"
            >
              Start Adoption
            </div>

            <div
              
              className="bg-white border border-gray-300 hover:bg-gray-100
               text-gray-800 px-6 py-3 rounded-full font-medium transition"
            >
              Support Shelter
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyAdoptPets;