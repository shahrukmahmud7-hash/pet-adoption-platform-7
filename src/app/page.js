import PetBanner from "@/components/Banner";
import WhyAdoptPets from "@/components/WhyAdoptPets";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     Home page
     <PetBanner/>
     <WhyAdoptPets/>
    </div>
  );
}
