import Carousels from "@/components/Carousel";
import Explore from "@/components/Explore";
import OurObjective from "@/components/OurObjective";
import Subfooter from "@/components/Subfooter";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Carousels />
      <div className="relative">
        <Explore />
        <Subfooter />
        <div className="w-full mt-5 text-[#18181B]">
         <div className="max-w-screen-xl py-10 flex gap-20 mx-auto ">
            <div className="basis-1/2">
                <h1 className="text-7xl font-semibold leading-none tracking-tight">Car Rental</h1>
            </div>
            <div className="basis-1/2 flex gap-5">
                <div className="basis-1/3">
                    <h4 className="mb-5">Socials</h4>
                   { ["Facebook","twitter","Linkedin"].map((item,id)=><a className="block  mt-1 text-[#18181B] capitalize">{item}</a>) }

                </div>
                
                <div className="basis-1/2">
                    <p className="italic font-semibold">"Drive Your Dream: Affordable Rentals, Unforgettable Journeys"</p>
                    <img src="" alt="" />
                </div>
            </div>
         </div>
        </div>
      </div>
    </div>
  );
}
