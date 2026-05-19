import PetBanner from "@/components/Banner";
import SuccessStoriesPage from "@/components/SuccessStories";
import WhyAdoptPets from "@/components/WhyAdoptPets";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <PetBanner/>
        Home page
     <WhyAdoptPets/>
     <SuccessStoriesPage/>
    </div>
  );
}
