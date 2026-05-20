import PetBanner from "@/components/Banner";
import HomePageCard from "@/components/HomePageCard";
import HowAdoptionWorks from "@/components/HowAdoptionWorks";
import OurMission from "@/components/OurMission";
import PetCareTips from "@/components/PetCareTips";
import SuccessStoriesPage from "@/components/SuccessStories";
import WhyAdoptPets from "@/components/WhyAdoptPets";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <PetBanner/>
      <HomePageCard/>
     <WhyAdoptPets/>
     <SuccessStoriesPage/>
     <PetCareTips/>
     <HowAdoptionWorks/>
     <OurMission/>
    </div>
  );
}
