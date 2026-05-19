import PetBanner from "@/components/Banner";
import HowAdoptionWorks from "@/components/HowAdoptionWorks";
import PetCareTips from "@/components/PetCareTips";
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
     <PetCareTips/>
     <HowAdoptionWorks/>
    </div>
  );
}
