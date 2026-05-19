"use client";

const PetCareTips = () => {
  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-gray-100
    min-h-screen py-20 px-4 sm:px-6 lg:px-8
    ">
      <div className="max-w-6xl mx-auto">
        {/* HERO HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-orange-600 text-sm 
          font-semibold uppercase tracking-wide">
            Responsible Pet Parenting
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold
           text-gray-900 leading-tight">
            Pet Care <span className="text-orange-600
            ">
                Tips
            </span>
          </h1>
          <p className="mt-5 text-gray-600 text-sm
           sm:text-base leading-relaxed">
            Proper care ensures pets live healthy, happy, and emotionally secure lives.
            Responsible pet ownership starts with daily love and attention.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* CARD 1 */}
          <div className="group bg-white border border-gray-100
           rounded-2xl p-7 shadow-sm hover:shadow-xl transition duration-300
            relative overflow-hidden
            ">
            <div 
            className="text-4xl">💧
            </div>
            <h2 className="mt-5 text-xl font-semibold text-gray-900
             group-hover:text-orange-600 transition">
              Fresh Water & Nutrition
            </h2>
            <p className="mt-3 text-sm text-gray-600 
            leading-relaxed
            ">
              Always provide clean water and balanced meals to keep your pet healthy and active.
            </p>
            <div className="absolute -bottom-10 -right-10 w-32
             h-32 bg-orange-100 rounded-full blur-3xl opacity-40">
             </div>
          </div>

          {/* CARD 2 */}
          <div className="group bg-white border
           border-gray-100 rounded-2xl
           p-7 shadow-sm hover:shadow-xl transition
            duration-300 relative overflow-hidden
            ">
            <div className="text-4xl">🩺</div>
            <h2 className="mt-5 text-xl font-semibold text-gray-900
             group-hover:text-orange-600 transition">
              Regular Vet Checkups
            </h2>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Routine veterinary visits help prevent illness and ensure long-term wellness.
            </p>
            <div className="absolute -bottom-10 -right-10 w-32
             h-32 bg-orange-100 rounded-full blur-3xl opacity-40">
             </div>
          </div>

          {/* CARD 3 */}
          <div className="group bg-white border border-gray-100 rounded-2xl
           p-7 shadow-sm hover:shadow-xl transition 
           duration-300 relative overflow-hidden">
            <div className="text-4xl">🎾</div>
            <h2 className="mt-5 text-xl font-semibold text-gray-900
             group-hover:text-orange-600 transition">
              Exercise & Playtime
            </h2>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Daily walks and interactive play improve both physical and mental health.
            </p>
            <div className="absolute -bottom-10 -right-10 w-32 h-32
             bg-orange-100 rounded-full blur-3xl opacity-40
             ">
         </div>
      </div>

          {/* CARD 4 */}
          <div className="group bg-white border border-gray-100 rounded-2xl p-7
           shadow-sm hover:shadow-xl transition duration-300 relative overflow-hidden
           ">
            <div className="text-4xl
            ">
             💉
            </div>
            <h2 className="mt-5 text-xl font-semibold text-gray-900
             group-hover:text-orange-600 transition">
              Vaccination & Safety
            </h2>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Keep vaccinations updated and maintain a safe living environment.
            </p>
            <div className="absolute -bottom-10 -right-10 w-32 h-32
             bg-orange-100 rounded-full blur-3xl opacity-40
             ">
          </div>
         </div>

          {/* CARD 5 */}
          <div className="group bg-white border border-gray-100 rounded-2xl
           p-7 shadow-sm hover:shadow-xl transition duration-300 relative overflow-hidden
           ">
            <div className="text-4xl">❤️</div>
            <h2 className="mt-5 text-xl font-semibold text-gray-900
             group-hover:text-orange-600 transition
             ">
              Love & Emotional Care
            </h2>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed
            ">
              Pets need affection, attention, and emotional bonding every day.
            </p>
            <div className="absolute -bottom-10 -right-10 w-32 h-32
             bg-orange-100 rounded-full blur-3xl opacity-40">
             </div>
          </div>

          {/* CARD 6 */}
          <div className="group bg-white border border-gray-100
           rounded-2xl  p-7 shadow-sm hover:shadow-xl transition
            duration-300 relative overflow-hidden"
            >
            <div className="text-4xl
            ">
               ✂️
            </div>
            <h2 className="mt-5 text-xl font-semibold text-gray-900
             group-hover:text-orange-600 transition">
              Proper Grooming
            </h2>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Regular grooming keeps your pet clean, comfortable, and stress-free.
            </p>
            <div className="absolute -bottom-10 -right-10 w-32 h-32
             bg-orange-100 rounded-full blur-3xl opacity-40">
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCareTips;