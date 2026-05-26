import PetDetails from "@/components/PetDetails";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const PetDetailsPage = async ({ params }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { id } = await params;
  const res = await fetch(`http://localhost:8000/pet/${id}`);
  const pets = await res.json();

  return <PetDetails pets={pets} session={session} />;
};
export default PetDetailsPage;
