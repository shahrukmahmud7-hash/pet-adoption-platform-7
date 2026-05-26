"use client";
import Image from "next/image";
import React from "react";
import { toast } from "react-toastify";

const PetDetails = ({ pets, session }) => {
  const [pickupDate, setPickupDate] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isRequestSubmitted, setRequestSubmitted] = React.useState(false);
  const {
    petName,
    imageUrl,
    age,
    gender,
    location,
    adoptionFee,
    breed,
    description,
    vaccinationStatus,
    healthStatus,
    species,
  } = pets;

  const handleAdoptRequest = async () => {
    const payload = {
      petName,
      userName: session.user.name,
      userEmail: session.user.email,
      pickupDate,
      message,
      petId: pets._id,
      status: "Pending",
    };

    const result = await fetch("https://pet-adoption-server-7.vercel.app/request-adopt", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${session?.session?.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await result.json();

    console.log(data);
    if (data?.insertedId) {
      toast.success("Request sent successfully!");
    } else {
      toast.error(data?.message);
    }
  };

  console.log(session?.user?.email);

  return (
    <div className="min-h-screen bg-slate-100 text-gray-500">
      {/* TOP HEADER */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-5">
          <h1 className="text-3xl font-bold text-gray-800">{petName}</h1>
          <p className="text-gray-500 mt-1">
            Friendly • Loyal • Family Companion 
          </p>
          <span
            className="inline-block mt-2 px-3 py-1 text-xs 
           rounded-full bg-green-100 text-green-700"
          >
            Available for Adoption
          </span>
        </div>
      </div>

      {/* MAIN */}
      <div
        className="max-w-6xl mx-auto px-4 py-8 
       grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">
          {/* IMAGE */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <Image
              src={imageUrl}
              width={1500}
              height={1500}
              alt="pet"
              className="w-full h-[420px] object-fill" 
            />
          </div>

          {/* DESCRIPTION */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-2">About Pet</h2>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>

          {/* INFO GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <p className="text-gray-500 text-sm">Species</p>
              <p className="font-semibold">{species}</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <p className="text-gray-500 text-sm">Breed</p>
              <p className="font-semibold">{breed}</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <p className="text-gray-500 text-sm">Age</p>
              <p className="font-semibold">{age} Years</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <p className="text-gray-500 text-sm">Gender</p>
              <p className="font-semibold">{gender}</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <p className="text-gray-500 text-sm">Health</p>
              <p className="font-semibold">{healthStatus}</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <p className="text-gray-500 text-sm">Vaccination</p>
              <p className="font-semibold">{vaccinationStatus}</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <p className="text-gray-500 text-sm">Location</p>
              <p className="font-semibold">{location}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl shadow-sm">
              <p className="text-gray-500 text-sm">Adoption Fee</p>
              <p className="text-blue-600 font-bold">{adoptionFee} $USD</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-md p-6 lg:sticky lg:top-6">
              { isRequestSubmitted ? (
        <div className="text-center py-10">
          <h2 className="text-2xl font-bold text-green-600">
            Your request submitted
          </h2>

          <p className="text-gray-500 mt-2">
            Please wait for the owner's response.
          </p>
        </div>
      ) :   (
         <>
            <h2 className="text-xl font-bold mb-5">Adoption Request</h2>
             
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-500">Pet Name</label>
                <input
                  value={petName}
                  disabled
                  className="w-full p-2 border rounded-lg bg-gray-100"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">Your Name</label>
                <input
                  value="John Doe"
                  disabled
                  className="w-full p-2 border rounded-lg bg-gray-100"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">Your Email</label>
                <input
                  value={session?.user?.email}
                  disabled
                  className="w-full p-2 border rounded-lg bg-gray-100"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">Pickup Date</label>
                <input
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  type="date"
                  className="w-full p-2 border rounded-lg focus:outline-none
                   focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  className="w-full p-2 border rounded-lg focus:outline-none
                   focus:ring-2 focus:ring-blue-200"
                  placeholder="Why do you want to adopt this pet?"
                />
              </div>

              <button
                disabled={pets?.ownerEmail === session?.user?.email}
                onClick={handleAdoptRequest}
                className="w-full bg-blue-600 hover:bg-blue-700
               text-white py-2 rounded-lg font-semibold transition disabled:cursor-not-allowed"
              >
                {pets?.ownerEmail === session?.user?.email
                  ? "You are the owner of this pet"
                  : "Send Adoption Request"}
              </button>
              <p className="text-xs text-gray-400 text-center">
                Your request will be reviewed by the owner
              </p>
            </div>
               </>
                 )  }

          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
