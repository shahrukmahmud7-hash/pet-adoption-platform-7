"use client";

import { authClient } from "@/lib/auth-client";
import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";

const RequestModal = ({ requestId, setRequestModalId, setIsRefetch }) => {
  const [requests, setRequests] = useState([]);
  const { data: session } = authClient.useSession();
  const onClose = () => {
    setRequestModalId(null);
  };

  useEffect(() => {
    const loadRequest = async () => {
      const res = await fetch(`http://localhost:8000/request/${requestId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${session?.session?.token}`,
        },
      });
      const data = await res.json();
      setRequests(data);
    };
    loadRequest();
  }, [requestId, session]);

  const handleApprove = async (request) => {
    const res = await fetch(
      `http://localhost:8000/request-update/${request?.petId}`,

      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.session?.token}`,
        },
        body: JSON.stringify({
          status: "Approved",
          userEmail: request?.userEmail,
        }),
      },
    );
    const data = await res.json();
    if (data.modifiedCount > 0) {
      setIsRefetch((prev) => !prev);
      toast.success("Request approved successfully!");
      onClose();
    }
  };
  const handleReject = async (request) => {
    const res = await fetch(
      `http://localhost:8000/request-update/${request?.petId}`,

      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.session?.token}`,
        },
        body: JSON.stringify({
          status: "Rejected",
          userEmail: request?.userEmail,
        }),
      },
    );
    const data = await res.json();
    if (data.modifiedCount > 0) {
      setIsRefetch((prev) => !prev);
      toast.success("Request rejected successfully!");
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">Request Details</h2>

          <button
            onClick={onClose}
            className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-black"
          >
            ✕
          </button>
        </div>

        {requests?.map((request, i) => {
          return (
            <Fragment key={i}>
              {/* Content */}
              <div className="space-y-1">
                <div>
                  <p className="text-sm text-gray-500">Requested User Name</p>
                  <p className="font-medium text-gray-800">
                    {request?.userName}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-gray-800">
                    {request?.userEmail}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Pickup Date</p>
                  <p className="font-medium text-gray-800">
                    {request?.pickupDate}
                  </p>
                </div>
              </div>

              {/* Footer Buttons */}
              {request?.status === "Pending" && (
                <div className="mt-4 mb-6 flex gap-3">
                  <button
                    onClick={() => handleApprove(request)}
                    className="flex-1 rounded-lg bg-green-600 px-4 py-2 font-semibold
                     text-white transition hover:bg-green-700"
                  >
                    Approve
                  </button>

                  <button
                    onClick={handleReject}
                    className="flex-1 rounded-lg bg-red-600 px-4 py-2 font-semibold
                     text-white transition hover:bg-red-700"
                  >
                    Reject
                  </button>
                </div>
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default RequestModal;
